"use client";

/**
 * TerrainSection
 *
 * Scroll-driven 3D terrain scrollytelling. A pinned terrain canvas renders
 * contour-line topography; scroll steps walk through the four channels that
 * make up Shadow's narrative graph.
 */

import Link from "next/link";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ----- Peaks (named beats with positions, heights, ridge orientation) -----
type Peak = {
  x: number;
  z: number;
  height: number;
  lengthSpread: number;
  widthSpread: number;
  rot: number;
  _cos?: number;
  _sin?: number;
  name: string;
  detail: string;
};
const PEAKS: Peak[] = [
  { x: -0.3, z: -0.18, height: 95, lengthSpread: 0.42, widthSpread: 0.2, rot: 0.55, name: "Fintech", detail: "12 yr · 847 placements" },
  { x: 0.18, z: -0.32, height: 78, lengthSpread: 0.36, widthSpread: 0.18, rot: 0.3, name: "AI / Enterprise", detail: "6 yr · 312 placements" },
  { x: 0.48, z: 0.28, height: 50, lengthSpread: 0.3, widthSpread: 0.16, rot: -0.7, name: "Creator economy", detail: "3 yr · rising" },
  { x: -0.52, z: 0.38, height: 42, lengthSpread: 0.28, widthSpread: 0.15, rot: 1.2, name: "Climate / infra", detail: "4 yr · steady" },
  { x: 0.62, z: -0.52, height: 22, lengthSpread: 0.22, widthSpread: 0.14, rot: -0.4, name: "Healthcare", detail: "foothill · 2 wins" },
  { x: -0.18, z: 0.6, height: 14, lengthSpread: 0.2, widthSpread: 0.13, rot: 0.0, name: "Consumer", detail: "flatland · new" },
];
PEAKS.forEach((p) => {
  p._cos = Math.cos(p.rot);
  p._sin = Math.sin(p.rot);
});

// Saddle ridges connecting peaks
const SADDLES = [
  { a: 0, b: 1, heightFactor: 0.45, width: 0.13 },
  { a: 2, b: 4, heightFactor: 0.3, width: 0.1 },
  { a: 3, b: 5, heightFactor: 0.25, width: 0.1 },
];

// ----- Noise -----
function valueNoise(x: number, z: number): number {
  function hash(ix: number, iz: number) {
    let h = ix * 374761393 + iz * 668265263;
    h = (h ^ (h >>> 13)) * 1274126177;
    h = h ^ (h >>> 16);
    return ((h >>> 0) % 100000) / 100000;
  }
  function smooth(t: number) {
    return t * t * (3 - 2 * t);
  }
  const ix = Math.floor(x);
  const iz = Math.floor(z);
  const fx = x - ix;
  const fz = z - iz;
  const h00 = hash(ix, iz);
  const h10 = hash(ix + 1, iz);
  const h01 = hash(ix, iz + 1);
  const h11 = hash(ix + 1, iz + 1);
  const tx = smooth(fx);
  const tz = smooth(fz);
  return (
    (h00 * (1 - tx) * (1 - tz) +
      h10 * tx * (1 - tz) +
      h01 * (1 - tx) * tz +
      h11 * tx * tz) *
      2 -
    1
  );
}
function fbm(x: number, z: number): number {
  let total = 0;
  let amp = 1;
  let freq = 1;
  for (let i = 0; i < 5; i++) {
    total += valueNoise(x * freq, z * freq) * amp;
    amp *= 0.5;
    freq *= 2.05;
  }
  return total;
}
function ridgedFbm(x: number, z: number, octaves: number): number {
  let total = 0;
  let amp = 1;
  let freq = 1;
  let ampSum = 0;
  for (let i = 0; i < octaves; i++) {
    const n = valueNoise(x * freq, z * freq);
    const r = 1 - Math.abs(n);
    total += r * r * amp;
    ampSum += amp;
    amp *= 0.55;
    freq *= 2.1;
  }
  return total / ampSum;
}

function terrainHeight(x: number, z: number): number {
  let baseH = 0;
  for (const p of PEAKS) {
    const dx = x - p.x;
    const dz = z - p.z;
    const lx = dx * p._cos! + dz * p._sin!;
    const lz = -dx * p._sin! + dz * p._cos!;
    const d2 =
      (lx * lx) / (p.lengthSpread * p.lengthSpread) +
      (lz * lz) / (p.widthSpread * p.widthSpread);
    baseH += p.height * Math.exp(-d2 * 2.2);
  }
  for (const s of SADDLES) {
    const a = PEAKS[s.a];
    const b = PEAKS[s.b];
    const mx = (a.x + b.x) * 0.5;
    const mz = (a.z + b.z) * 0.5;
    const sdx = b.x - a.x;
    const sdz = b.z - a.z;
    const sLen = Math.sqrt(sdx * sdx + sdz * sdz);
    const sCos = sdx / sLen;
    const sSin = sdz / sLen;
    const dx = x - mx;
    const dz = z - mz;
    const lx = dx * sCos + dz * sSin;
    const lz = -dx * sSin + dz * sCos;
    const lengthSpread = sLen * 0.55;
    const d2 =
      (lx * lx) / (lengthSpread * lengthSpread) +
      (lz * lz) / (s.width * s.width);
    const peakAvg = (a.height + b.height) * 0.5;
    baseH += peakAvg * s.heightFactor * Math.exp(-d2 * 1.5);
  }
  baseH += fbm(x * 0.9 + 4.2, z * 0.9 - 1.7) * 6;
  let h = baseH;
  const envelope = Math.min(1, baseH / 50);
  h += ridgedFbm(x * 3.2 + 7.1, z * 3.2 - 2.4, 4) * (8 + envelope * 14);
  h += ridgedFbm(x * 8.5 - 3.0, z * 8.5 + 6.6, 3) * (3 + envelope * 7);
  h += valueNoise(x * 22, z * 22) * (1 + envelope * 2.5);
  h += fbm(x * 4.5 + 9, z * 4.5 - 5) * 2.5;
  const valleys = [
    { x: -0.05, z: -0.55, depth: 9, spread: 0.35 },
    { x: 0.0, z: 0.0, depth: 7, spread: 0.25 },
    { x: 0.6, z: 0.05, depth: 6, spread: 0.3 },
  ];
  for (const v of valleys) {
    const dx = x - v.x;
    const dz = z - v.z;
    const d2 = dx * dx + dz * dz;
    h -= v.depth * Math.exp(-d2 / (v.spread * v.spread * 0.5));
  }
  return Math.max(0, h);
}

// ----- Scene targets per scroll step -----
type SceneTarget = {
  distance: number;
  polar: number;
  azimuth: number;
  lookY: number;
  pathProgress: number;
  peakLabels: number;
  peakHighlight: number;
  contoursOpacity: number;
  surfaceOpacity: number;
};
const SCENE_TARGETS: SceneTarget[] = [
  { distance: 480, polar: 0.02, azimuth: 0, lookY: 0, pathProgress: 0, peakLabels: 0, peakHighlight: -1, contoursOpacity: 0.55, surfaceOpacity: 0 },
  { distance: 540, polar: 0.62, azimuth: 0, lookY: 8, pathProgress: 0, peakLabels: 0, peakHighlight: -1, contoursOpacity: 0.45, surfaceOpacity: 0.45 },
  { distance: 540, polar: 0.78, azimuth: 0.4, lookY: 8, pathProgress: 0, peakLabels: 1, peakHighlight: -1, contoursOpacity: 0.4, surfaceOpacity: 0.5 },
  { distance: 460, polar: 0.85, azimuth: 0.65, lookY: 12, pathProgress: 1, peakLabels: 1, peakHighlight: 0, contoursOpacity: 0.36, surfaceOpacity: 0.55 },
  { distance: 580, polar: 0.7, azimuth: 0.9, lookY: 8, pathProgress: 1, peakLabels: 1, peakHighlight: -1, contoursOpacity: 0.45, surfaceOpacity: 0.55 },
];

const STEPS = [
  {
    num: "01",
    title: <>From above, it looks like a map.</>,
    body: (
      <>
        <p>
          Contour lines on a flat plane. Some areas dense with rings — those
          are the beats your firm has gone deep on. Some areas open and flat —
          practices you&apos;ve barely touched.
        </p>
        <p className="mt-3">
          This is your firm&apos;s accumulated specificity, viewed from
          straight above.
        </p>
      </>
    ),
  },
  {
    num: "02",
    tag: "Tilt",
    title: (
      <>
        But it&apos;s not flat.
        <br />
        <em className="not-italic italic font-light text-[#fbf7ee]/55">It&apos;s terrain.</em>
      </>
    ),
    body: (
      <>
        <p>
          Pull the camera down and the contour lines become elevation. The
          dense areas rise into peaks. The flat areas stay flat.
        </p>
        <p className="mt-3">
          <strong className="text-[#fbf7ee]">
            Density of context becomes height.
          </strong>{" "}
          The deeper your firm&apos;s experience in a beat, the higher the peak.
        </p>
      </>
    ),
  },
  {
    num: "03",
    tag: "The peaks",
    title: <>Each peak has a name.</>,
    body: (
      <>
        <p>
          Fintech: twelve years of work, 847 placements, deep relationships at
          the FT and the Information. AI and enterprise: six years, 312
          placements, a position you&apos;ve earned. Creator economy: three
          years, rising fast.
        </p>
        <p className="mt-3">
          Healthcare? A foothill. Climate? Almost flat.{" "}
          <strong className="text-[#fbf7ee]">
            This is the part of your firm a generic AI has zero access to.
          </strong>
        </p>
      </>
    ),
  },
  {
    num: "04",
    tag: "A story crosses the terrain",
    title: <>A path lights up.</>,
    body: (
      <>
        <p>
          Stripe just announced a stablecoin product. The narrative graph picks
          it up. Now watch where the story <em>lands</em> on your terrain.
        </p>
        <p className="mt-3">
          It starts on flat ground — neutral news. It climbs. It crests right
          at the top of your fintech peak, where Bridge sits with a Series B in
          six days and an embargoed angle that lines up with this exact news.
        </p>
        <p className="mt-4 italic text-[#fbf7ee]/85">
          A horizontal AI sees the news. It cannot see why this peak.
        </p>
      </>
    ),
  },
  {
    num: "05",
    tag: "The whole point",
    title: <>The terrain is the moat.</>,
    body: (
      <>
        <p>
          Other AI tools can run the path. None of them have your terrain. None
          of them can know that{" "}
          <strong className="text-[#fbf7ee]">this story</strong> hits{" "}
          <strong className="text-[#fbf7ee]">this peak</strong> at{" "}
          <strong className="text-[#fbf7ee]">this moment</strong>, and that
          this peak has Penny Lin three feet away with a piece she wrote last
          month that opens the door.
        </p>
        <p className="mt-3">
          The agents work the path. The terrain is what tells them where to land.
        </p>
        <p className="mt-4 italic text-[#fbf7ee]/85">
          Your firm took a decade to build this terrain.
          <br />
          Shadow is the only system that can see it.
        </p>
      </>
    ),
  },
];

export function TerrainSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sceneIdxRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const wrap = canvas.parentElement!;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (e) {
      console.warn("TerrainSection: WebGL unavailable", e);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0908, 500, 1100);
    const camera = new THREE.PerspectiveCamera(35, w / h, 1, 2000);
    const group = new THREE.Group();
    scene.add(group);

    const PLANE_SIZE = 600;
    const SEGS = 140;
    const planeGeo = new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE, SEGS, SEGS);
    planeGeo.rotateX(-Math.PI / 2);
    const positions = planeGeo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i) / (PLANE_SIZE / 2);
      const z = positions.getZ(i) / (PLANE_SIZE / 2);
      const y = terrainHeight(x, z);
      positions.setY(i, y);
    }
    positions.needsUpdate = true;
    planeGeo.computeVertexNormals();

    const surfaceMat = new THREE.MeshBasicMaterial({
      color: 0x12110f,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    const surfaceMesh = new THREE.Mesh(planeGeo, surfaceMat);
    group.add(surfaceMesh);

    // Contour bands
    const NUM_CONTOURS = 30;
    const maxH = Math.max(...PEAKS.map((p) => p.height)) * 1.15;
    const elevations: number[] = [];
    for (let i = 1; i <= NUM_CONTOURS; i++) {
      elevations.push((i / NUM_CONTOURS) * maxH * 0.95);
    }
    const cells = SEGS;
    const cellSize = PLANE_SIZE / cells;
    const gridSize = cells + 1;
    const heightGrid = new Float32Array(gridSize * gridSize);
    for (let ix = 0; ix <= cells; ix++) {
      for (let iz = 0; iz <= cells; iz++) {
        const wx = -PLANE_SIZE / 2 + ix * cellSize;
        const wz = -PLANE_SIZE / 2 + iz * cellSize;
        heightGrid[ix * gridSize + iz] = terrainHeight(
          wx / (PLANE_SIZE / 2),
          wz / (PLANE_SIZE / 2)
        );
      }
    }

    const contours: { line: THREE.LineSegments; baseOpacity: number }[] = [];
    elevations.forEach((elev, ei) => {
      const segs: number[] = [];
      for (let ix = 0; ix < cells; ix++) {
        for (let iz = 0; iz < cells; iz++) {
          const x0 = -PLANE_SIZE / 2 + ix * cellSize;
          const x1 = x0 + cellSize;
          const z0 = -PLANE_SIZE / 2 + iz * cellSize;
          const z1 = z0 + cellSize;
          const h00 = heightGrid[ix * gridSize + iz];
          const h10 = heightGrid[(ix + 1) * gridSize + iz];
          const h11 = heightGrid[(ix + 1) * gridSize + (iz + 1)];
          const h01 = heightGrid[ix * gridSize + (iz + 1)];
          const above =
            (h00 >= elev ? 1 : 0) |
            (h10 >= elev ? 2 : 0) |
            (h11 >= elev ? 4 : 0) |
            (h01 >= elev ? 8 : 0);
          if (above === 0 || above === 15) continue;
          const lerpEdge = (
            ha: number,
            hb: number,
            ax: number,
            az: number,
            bx: number,
            bz: number
          ): [number, number, number] => {
            const t = (elev - ha) / (hb - ha);
            return [ax + (bx - ax) * t, elev + 0.4, az + (bz - az) * t];
          };
          const edges: [number, number, number][] = [];
          if (((above & 1) >> 0) !== ((above & 2) >> 1))
            edges.push(lerpEdge(h00, h10, x0, z0, x1, z0));
          if (((above & 2) >> 1) !== ((above & 4) >> 2))
            edges.push(lerpEdge(h10, h11, x1, z0, x1, z1));
          if (((above & 4) >> 2) !== ((above & 8) >> 3))
            edges.push(lerpEdge(h11, h01, x1, z1, x0, z1));
          if (((above & 8) >> 3) !== ((above & 1) >> 0))
            edges.push(lerpEdge(h01, h00, x0, z1, x0, z0));
          for (let i = 0; i + 1 < edges.length; i += 2) {
            segs.push(edges[i][0], edges[i][1], edges[i][2]);
            segs.push(edges[i + 1][0], edges[i + 1][1], edges[i + 1][2]);
          }
        }
      }
      if (segs.length === 0) return;
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(segs), 3)
      );
      const t = ei / elevations.length;
      const opacity = 0.16 + t * 0.55;
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xfbf7ee,
        transparent: true,
        opacity,
      });
      const line = new THREE.LineSegments(lineGeo, lineMat);
      group.add(line);
      contours.push({ line, baseOpacity: opacity });
    });

    // Peak markers (simple dots + vertical pin lines, no labels in v1)
    type PeakMark = {
      dot: THREE.Mesh;
      pin: THREE.Line;
      idx: number;
    };
    const peakMarks: PeakMark[] = [];
    PEAKS.forEach((peak, i) => {
      const wx = peak.x * (PLANE_SIZE / 2);
      const wz = peak.z * (PLANE_SIZE / 2);
      const wy = terrainHeight(peak.x, peak.z);

      const dotGeo = new THREE.SphereGeometry(2.0, 14, 14);
      const dotMat = new THREE.MeshBasicMaterial({
        color: 0x7489a3, // UV blue — Shadow's primary accent
        transparent: true,
        opacity: 0,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(wx, wy + 1, wz);
      group.add(dot);

      const pinPos = new Float32Array([wx, wy + 1, wz, wx, wy + 22, wz]);
      const pinGeo = new THREE.BufferGeometry();
      pinGeo.setAttribute("position", new THREE.BufferAttribute(pinPos, 3));
      const pinMat = new THREE.LineBasicMaterial({
        color: 0x7489a3,
        transparent: true,
        opacity: 0,
      });
      const pin = new THREE.Line(pinGeo, pinMat);
      group.add(pin);
      peakMarks.push({ dot, pin, idx: i });
    });

    // Story path: from a flat far corner to the fintech peak (PEAKS[0])
    const pathStart = { x: 0.7, z: 0.7 };
    const pathEnd = PEAKS[0];
    const pathVias = [
      { x: 0.55, z: 0.45 },
      { x: 0.3, z: 0.2 },
      { x: 0.05, z: 0.05 },
      { x: -0.2, z: -0.05 },
      { x: -0.35, z: -0.15 },
    ];
    const pathSamples: THREE.Vector3[] = [];
    const allWaypoints = [pathStart, ...pathVias];
    for (let i = 0; i < allWaypoints.length - 1; i++) {
      const a = allWaypoints[i];
      const b = allWaypoints[i + 1];
      const subs = 24;
      for (let s = 0; s < subs; s++) {
        const t = s / subs;
        const x = a.x + (b.x - a.x) * t;
        const z = a.z + (b.z - a.z) * t;
        const wx = x * (PLANE_SIZE / 2);
        const wz = z * (PLANE_SIZE / 2);
        const wy = terrainHeight(x, z) + 2.5;
        pathSamples.push(new THREE.Vector3(wx, wy, wz));
      }
    }
    pathSamples.push(
      new THREE.Vector3(
        pathEnd.x * (PLANE_SIZE / 2),
        terrainHeight(pathEnd.x, pathEnd.z) + 2.5,
        pathEnd.z * (PLANE_SIZE / 2)
      )
    );
    const pathPositions = new Float32Array(pathSamples.length * 3);
    pathSamples.forEach((p, i) => {
      pathPositions[i * 3] = p.x;
      pathPositions[i * 3 + 1] = p.y;
      pathPositions[i * 3 + 2] = p.z;
    });
    const pathGeo = new THREE.BufferGeometry();
    pathGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(pathPositions, 3)
    );
    const pathMat = new THREE.LineBasicMaterial({
      color: 0xb27a53, // Lamplight orange
      transparent: true,
      opacity: 0.95,
    });
    const pathLine = new THREE.Line(pathGeo, pathMat);
    pathGeo.setDrawRange(0, 0);
    group.add(pathLine);

    const pulseGeo = new THREE.SphereGeometry(2.4, 12, 12);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xb27a53,
      transparent: true,
      opacity: 0,
    });
    const pulse = new THREE.Mesh(pulseGeo, pulseMat);
    group.add(pulse);

    // Resize
    const ro = new ResizeObserver(() => {
      const w2 = wrap.clientWidth;
      const h2 = wrap.clientHeight;
      if (w2 === 0 || h2 === 0) return;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2, false);
    });
    ro.observe(wrap);

    // Camera state (smoothed toward target)
    const targetCam = { distance: 480, polar: 0.02, azimuth: 0, lookY: 0 };
    const currentCam = { distance: 480, polar: 0.02, azimuth: 0, lookY: 0 };
    let pathProgress = 0;

    // IntersectionObserver to switch scenes
    const io = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
          }
        });
        if (best) {
          const target = (best as IntersectionObserverEntry).target as HTMLElement;
          const idx = parseInt(target.dataset.step ?? "0", 10);
          sceneIdxRef.current = idx;
          const t = SCENE_TARGETS[idx];
          if (t) {
            targetCam.distance = t.distance;
            targetCam.polar = t.polar;
            targetCam.azimuth = t.azimuth;
            targetCam.lookY = t.lookY;
          }
        }
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.5, 1],
      }
    );
    stepRefs.current.forEach((el) => {
      if (el) io.observe(el);
    });

    let raf = 0;
    function animate() {
      raf = requestAnimationFrame(animate);
      const k = 0.045;
      currentCam.distance += (targetCam.distance - currentCam.distance) * k;
      currentCam.polar += (targetCam.polar - currentCam.polar) * k;
      currentCam.azimuth += (targetCam.azimuth - currentCam.azimuth) * k;
      currentCam.lookY += (targetCam.lookY - currentCam.lookY) * k;
      const drift = performance.now() * 0.00004;
      const az = currentCam.azimuth + drift * 0.3;
      const d = currentCam.distance;
      const polar = currentCam.polar;
      const cy = Math.cos(polar) * d;
      const cr = Math.sin(polar) * d;
      camera.position.set(Math.sin(az) * cr, cy + 60, Math.cos(az) * cr);
      camera.lookAt(0, currentCam.lookY, 0);

      const sceneT = SCENE_TARGETS[sceneIdxRef.current];
      if (sceneT) {
        surfaceMat.opacity +=
          (sceneT.surfaceOpacity - surfaceMat.opacity) * k;
        contours.forEach((c) => {
          const target = sceneT.contoursOpacity * (c.baseOpacity / 0.55);
          c.line.material.opacity +=
            (target -
              (c.line.material as THREE.LineBasicMaterial).opacity) *
            k;
        });
        peakMarks.forEach((p) => {
          let target = sceneT.peakLabels;
          if (sceneT.peakHighlight !== -1 && sceneT.peakHighlight !== p.idx)
            target *= 0.35;
          (p.dot.material as THREE.MeshBasicMaterial).opacity +=
            (target - (p.dot.material as THREE.MeshBasicMaterial).opacity) * k;
          (p.pin.material as THREE.LineBasicMaterial).opacity +=
            (target - (p.pin.material as THREE.LineBasicMaterial).opacity) * k;
        });
        pathProgress += (sceneT.pathProgress - pathProgress) * 0.025;
        const total = pathSamples.length;
        pathGeo.setDrawRange(0, Math.floor(pathProgress * total));
        if (pathProgress > 0.02 && pathProgress < 0.98) {
          const idx = Math.floor(pathProgress * (total - 1));
          pulse.position.copy(pathSamples[idx]);
          pulseMat.opacity += (0.95 - pulseMat.opacity) * k;
        } else {
          pulseMat.opacity += (0 - pulseMat.opacity) * k;
        }
      }

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      renderer.dispose();
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh | THREE.LineSegments | THREE.Line;
        if ((m as THREE.Mesh).geometry) (m as THREE.Mesh).geometry.dispose();
        const mat = (m as THREE.Mesh).material;
        if (mat) {
          if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose());
          else mat.dispose();
        }
      });
    };
  }, []);

  return (
    <section className="bg-[#0a0908] text-[#fbf7ee] relative">
      <div className="max-w-[1360px] mx-auto px-8 md:px-16 pt-20 md:pt-28 pb-12 md:pb-16">
        <div
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#fbf7ee]/55 flex items-center gap-3 mb-8"
        >
          <span
            className="inline-block w-7 h-px"
            style={{ background: "rgba(251, 247, 238, 0.3)" }}
          />
          Your firm as terrain
        </div>
        <h2
          className="font-serif font-normal text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.05] tracking-tight max-w-[1100px]"
        >
          Every agency is a landscape.
          <br />
          <em
            className="not-italic"
            style={{
              fontStyle: "italic",
              color: "rgba(251, 247, 238, 0.55)",
              fontWeight: 300,
            }}
          >
            Most AI tools can&apos;t see it.
          </em>
        </h2>
        <p className="mt-8 max-w-[640px] text-[15px] leading-relaxed text-[#fbf7ee]/70">
          Your firm has been building terrain for years. Where you&apos;ve
          worked deepest, peaks rise — twelve years of fintech, six years of
          enterprise AI. Where you&apos;ve barely operated, it&apos;s flatland.
          A horizontal AI sees a request. Shadow sees the request{" "}
          <em>on top of</em> your terrain. That&apos;s the difference between a
          pitch and a placement.
        </p>
      </div>

      <div className="max-w-[1360px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,420px)] gap-12 lg:gap-16 pb-24">
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center">
          <div className="w-full aspect-[5/4] lg:aspect-auto lg:h-[80vh] lg:max-h-[760px]">
            <canvas
              ref={canvasRef}
              className="block w-full h-full"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              data-step={i}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="min-h-[80vh] flex flex-col justify-center py-10"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#fbf7ee]/40">
                {step.num}
              </div>
              {"tag" in step && step.tag && (
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#B27A53]/85">
                  {step.tag}
                </div>
              )}
              <h3 className="font-serif font-normal text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.1] tracking-tight mt-4">
                {step.title}
              </h3>
              <div className="mt-5 text-[14.5px] leading-relaxed text-[#fbf7ee]/65 max-w-[440px]">
                {step.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
