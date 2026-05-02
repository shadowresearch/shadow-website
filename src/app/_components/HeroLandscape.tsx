"use client";

/**
 * HeroLandscape
 *
 * Atmospheric exploded-view topographic landscape rendered with Three.js,
 * tuned for a light-mode hero. Scroll-driven contour bands lift apart so
 * the terrain decomposes into floating geological strata. The section is
 * sticky-pinned and accepts children rendered as a fading overlay on top
 * of the canvas.
 */

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ----- Noise helpers (from the demo) -----
function valueNoise(x: number, z: number): number {
  function hash(ix: number, iz: number): number {
    let h = ix * 374761393 + iz * 668265263;
    h = (h ^ (h >>> 13)) * 1274126177;
    h = h ^ (h >>> 16);
    return ((h >>> 0) % 100000) / 100000;
  }
  function smooth(t: number): number {
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

const HILLS: { x: number; z: number; h: number; r: number }[] = [
  // Downtown core — tall, dense
  { x: 0.05, z: 0.03, h: 70, r: 0.1 },
  { x: -0.1, z: 0.12, h: 64, r: 0.09 },
  { x: 0.13, z: -0.08, h: 58, r: 0.09 },
  { x: -0.05, z: -0.1, h: 52, r: 0.08 },
  { x: 0.18, z: 0.1, h: 48, r: 0.08 },
  { x: -0.15, z: -0.04, h: 44, r: 0.08 },
  { x: 0.02, z: 0.18, h: 56, r: 0.09 },
  { x: -0.2, z: 0.14, h: 38, r: 0.08 },
  { x: 0.22, z: -0.13, h: 42, r: 0.08 },
  // Inner ring — medium hills
  { x: -0.32, z: 0.05, h: 36, r: 0.1 },
  { x: 0.3, z: 0.2, h: 40, r: 0.09 },
  { x: -0.34, z: -0.18, h: 34, r: 0.1 },
  { x: 0.34, z: -0.25, h: 32, r: 0.09 },
  { x: -0.2, z: 0.32, h: 38, r: 0.1 },
  { x: 0.12, z: 0.34, h: 30, r: 0.09 },
  { x: 0.06, z: -0.32, h: 28, r: 0.08 },
  { x: -0.1, z: -0.34, h: 32, r: 0.09 },
  { x: -0.42, z: 0.2, h: 26, r: 0.1 },
  { x: 0.4, z: 0.06, h: 30, r: 0.1 },
  { x: -0.12, z: 0.42, h: 24, r: 0.09 },
  // Mid-ring
  { x: -0.55, z: 0.12, h: 28, r: 0.11 },
  { x: 0.52, z: 0.32, h: 30, r: 0.1 },
  { x: 0.5, z: -0.42, h: 26, r: 0.1 },
  { x: -0.52, z: -0.36, h: 24, r: 0.1 },
  { x: -0.32, z: 0.48, h: 22, r: 0.1 },
  { x: 0.22, z: 0.52, h: 24, r: 0.1 },
  { x: 0.58, z: -0.06, h: 28, r: 0.11 },
  { x: -0.62, z: -0.1, h: 22, r: 0.11 },
  { x: 0.32, z: -0.56, h: 20, r: 0.1 },
  { x: -0.2, z: -0.52, h: 22, r: 0.1 },
  { x: 0.05, z: 0.62, h: 18, r: 0.1 },
  { x: -0.45, z: 0.42, h: 20, r: 0.1 },
  { x: 0.45, z: -0.58, h: 18, r: 0.1 },
  // Outer ring
  { x: -0.75, z: 0.3, h: 18, r: 0.13 },
  { x: 0.78, z: 0.12, h: 22, r: 0.13 },
  { x: -0.05, z: 0.78, h: 18, r: 0.12 },
  { x: 0.1, z: -0.8, h: 16, r: 0.12 },
  { x: -0.5, z: -0.6, h: 18, r: 0.12 },
  { x: 0.65, z: -0.55, h: 16, r: 0.12 },
  { x: 0.78, z: -0.3, h: 14, r: 0.12 },
  { x: -0.78, z: -0.42, h: 16, r: 0.12 },
  { x: 0.42, z: 0.7, h: 14, r: 0.12 },
  { x: -0.4, z: 0.72, h: 16, r: 0.12 },
  { x: -0.72, z: 0.62, h: 12, r: 0.12 },
  { x: 0.72, z: 0.55, h: 14, r: 0.12 },
  // Far outskirts
  { x: -0.85, z: 0.05, h: 10, r: 0.13 },
  { x: 0.88, z: 0.4, h: 8, r: 0.13 },
  { x: -0.3, z: 0.9, h: 8, r: 0.13 },
  { x: 0.3, z: -0.92, h: 8, r: 0.13 },
  { x: -0.9, z: -0.2, h: 10, r: 0.13 },
  { x: 0.9, z: -0.1, h: 10, r: 0.13 },
];

function heroHeight(x: number, z: number): number {
  // Skip the central plateau — keep the center quieter so the hero copy
  // sits over flatter terrain.
  let h = 0;
  for (const hill of HILLS) {
    const dx = x - hill.x;
    const dz = z - hill.z;
    const d2 = (dx * dx + dz * dz) / (hill.r * hill.r);
    h += hill.h * Math.exp(-d2 * 1.4);
  }
  const envelope = Math.min(1, h / 50);
  h += ridgedFbm(x * 4.0 + 5.1, z * 4.0 - 1.7, 4) * (8 + envelope * 14);
  h += ridgedFbm(x * 9.0 - 2.0, z * 9.0 + 4.4, 3) * (4 + envelope * 7);
  h += ridgedFbm(x * 18.0 + 11, z * 18.0 - 6, 2) * (2 + envelope * 4);
  // Stronger noise contribution for more bristly, dense surface detail.
  h += fbm(x * 6.0 + 7, z * 6.0 - 3) * 2.4;
  h += valueNoise(x * 32, z * 32) * 3.2;
  h += valueNoise(x * 64, z * 64) * 1.6;
  // Bias elevation toward the edges: U-shaped weight in x so the center
  // is muted and the left/right are amplified.
  const xWeight = 0.35 + 1.3 * x * x;
  h *= xWeight;
  // Soft edge attenuation — keeps terrain bounded but allows fog to pull
  // distant peaks into the dark instead of a hard circle.
  const r2 = x * x + z * z;
  const edgeFade = Math.max(0, 1 - Math.max(0, r2 - 1.0) * 1.4);
  h *= edgeFade;
  return Math.max(0, h);
}

// Marching squares spits out short, disconnected segments that join at hard
// cell-aligned corners. Chain them into continuous polylines, then apply two
// Chaikin smoothing passes so the contours read as flowing curves instead of
// stepped zigzags. xz only — y is layered in at render time per band.
function buildSmoothContourGeometry(segs: number[]): THREE.BufferGeometry | null {
  if (segs.length === 0) return null;
  const SNAP = 1000;
  const ptKey = (x: number, z: number) =>
    `${Math.round(x * SNAP)}|${Math.round(z * SNAP)}`;
  type Pt = [number, number];
  const pts: Pt[] = [];
  const ptIndex = new Map<string, number>();
  const adj: number[][] = [];
  const addPt = (x: number, z: number): number => {
    const k = ptKey(x, z);
    let idx = ptIndex.get(k);
    if (idx === undefined) {
      idx = pts.length;
      pts.push([x, z]);
      ptIndex.set(k, idx);
      adj.push([]);
    }
    return idx;
  };
  for (let i = 0; i < segs.length; i += 6) {
    const a = addPt(segs[i], segs[i + 2]);
    const b = addPt(segs[i + 3], segs[i + 5]);
    if (a === b) continue;
    adj[a].push(b);
    adj[b].push(a);
  }

  const visited = new Set<string>();
  const eKey = (a: number, b: number) => (a < b ? `${a}|${b}` : `${b}|${a}`);
  const polylines: number[][] = [];

  const walk = (start: number) => {
    const line = [start];
    let prev = -1;
    let cur = start;
    while (true) {
      let next = -1;
      for (const n of adj[cur]) {
        if (n === prev) continue;
        if (visited.has(eKey(cur, n))) continue;
        next = n;
        break;
      }
      if (next < 0) break;
      visited.add(eKey(cur, next));
      line.push(next);
      prev = cur;
      cur = next;
      if (cur === start) break; // closed loop
    }
    if (line.length >= 2) polylines.push(line);
  };

  // Open chains first so endpoints are walked from their natural starting
  // point; closed loops fall out as a second pass.
  for (let i = 0; i < pts.length; i++) {
    if (adj[i].length === 1) walk(i);
  }
  for (let i = 0; i < pts.length; i++) {
    let hasUnvisited = false;
    for (const n of adj[i]) {
      if (!visited.has(eKey(i, n))) {
        hasUnvisited = true;
        break;
      }
    }
    if (hasUnvisited) walk(i);
  }

  const chaikin = (line: Pt[], closed: boolean, iters: number): Pt[] => {
    let cur = line;
    for (let k = 0; k < iters; k++) {
      const n = cur.length;
      const next: Pt[] = [];
      if (!closed) next.push(cur[0]);
      const last = closed ? n : n - 1;
      for (let i = 0; i < last; i++) {
        const p0 = cur[i];
        const p1 = cur[(i + 1) % n];
        next.push([
          0.75 * p0[0] + 0.25 * p1[0],
          0.75 * p0[1] + 0.25 * p1[1],
        ]);
        next.push([
          0.25 * p0[0] + 0.75 * p1[0],
          0.25 * p0[1] + 0.75 * p1[1],
        ]);
      }
      if (!closed) next.push(cur[n - 1]);
      cur = next;
    }
    return cur;
  };

  const out: number[] = [];
  for (const line of polylines) {
    const closed = line[0] === line[line.length - 1];
    const linePts: Pt[] = line.map((idx) => pts[idx]);
    if (closed) linePts.pop();
    const smoothed = chaikin(linePts, closed, 2);
    const m = smoothed.length;
    const stop = closed ? m : m - 1;
    for (let i = 0; i < stop; i++) {
      const a = smoothed[i];
      const b = smoothed[(i + 1) % m];
      out.push(a[0], 0, a[1]);
      out.push(b[0], 0, b[1]);
    }
  }
  if (out.length === 0) return null;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(out), 3)
  );
  return geo;
}

type Part = {
  mesh: THREE.Group;
  basePos: THREE.Vector3;
  offset: THREE.Vector3;
  baseRot: { x: number; y: number; z: number };
  rotAxis: THREE.Vector3;
  rotSpeed: number;
};

export function HeroLandscape({ children }: { children?: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !section) return;

    const wrap = canvas.parentElement!;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;

    const scene = new THREE.Scene();
    // Light fog tuned to the page's bg-card so distant terrain dissolves
    // into the page background.
    scene.fog = new THREE.Fog(0xfaf7f0, 220, 620);
    const camera = new THREE.PerspectiveCamera(52, w / h, 0.1, 2000);
    camera.position.set(95, 80, 200);
    camera.lookAt(0, 35, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
    } catch (e) {
      // No WebGL — leave overlay visible without the 3D backdrop
      console.warn("MachineHero: WebGL unavailable", e);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    renderer.setClearColor(0x000000, 0);

    const machineGroup = new THREE.Group();
    scene.add(machineGroup);

    const machineParts: Part[] = [];

    // -------- PRECOMPUTE HEIGHT GRID --------
    // Pulled in from the wider experiment — denser cluster, fog still
    // pulls the back into the dark for an open-horizon feel.
    const PLANE_SIZE = 540;
    const SEGS = 180;
    const cellSize = PLANE_SIZE / SEGS;
    const gridSize = SEGS + 1;
    const heightGrid = new Float32Array(gridSize * gridSize);
    let maxH = 0;
    for (let ix = 0; ix <= SEGS; ix++) {
      for (let iz = 0; iz <= SEGS; iz++) {
        const wx = -PLANE_SIZE / 2 + ix * cellSize;
        const wz = -PLANE_SIZE / 2 + iz * cellSize;
        const hh = heroHeight(
          wx / (PLANE_SIZE / 2),
          wz / (PLANE_SIZE / 2)
        );
        heightGrid[ix * gridSize + iz] = hh;
        if (hh > maxH) maxH = hh;
      }
    }

    // -------- BUILD CONTOUR BANDS --------
    // More bands → tighter contour spacing, denser stratified read.
    const NUM_BANDS = 88;
    const bandHeights: number[] = [];
    for (let i = 1; i <= NUM_BANDS; i++) {
      bandHeights.push((i / NUM_BANDS) * maxH * 0.96);
    }

    bandHeights.forEach((elev, bandIdx) => {
      const segs: number[] = [];
      for (let ix = 0; ix < SEGS; ix++) {
        for (let iz = 0; iz < SEGS; iz++) {
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
            return [ax + (bx - ax) * t, 0, az + (bz - az) * t];
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

      const t = bandIdx / NUM_BANDS;
      // Opacity range tuned for dark contour lines on the light page bg.
      // Peaks land near full ink; distant valleys stay airy.
      const opacity = 0.18 + Math.pow(t, 0.7) * 0.38;

      const geo = buildSmoothContourGeometry(segs);
      if (!geo) return;
      const mat = new THREE.LineBasicMaterial({
        color: 0x5a4f42,
        transparent: true,
        opacity,
      });
      (mat as unknown as { userData: { baseOp: number } }).userData = {
        baseOp: opacity,
      };
      const lines = new THREE.LineSegments(geo, mat);
      const group = new THREE.Group();
      group.add(lines);
      (group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = mat;
      (group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = mat;

      const yCenter = maxH * 0.45;
      const baseY = elev - yCenter;
      const tNorm = elev / maxH;
      const verticalLift = tNorm * tNorm * 200 + tNorm * 60;
      const seed = bandIdx * 12.9898;
      const driftAngle = seed % (Math.PI * 2);
      const driftMag = 18 + (1 - tNorm) * 12;
      const driftX = Math.cos(driftAngle) * driftMag;
      const driftZ = Math.sin(driftAngle) * driftMag;

      machineParts.push({
        mesh: group,
        basePos: new THREE.Vector3(0, baseY, 0),
        offset: new THREE.Vector3(driftX, verticalLift, driftZ),
        baseRot: { x: 0, y: 0, z: 0 },
        rotAxis: new THREE.Vector3(
          (Math.random() - 0.5) * 0.15,
          1,
          (Math.random() - 0.5) * 0.15
        ).normalize(),
        rotSpeed: 0.05 + tNorm * 0.15,
      });
      machineGroup.add(group);
    });

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

    // Scroll
    // Static landscape — no scroll-driven decomposition or overlay fade.
    // Bands stay at base elevation; ambient rotation (set below) provides
    // the only motion.
    let machineProgress = 0;
    const machineTargetProgress = 0;
    void overlay;

    // Animate
    let lastTime = 0;
    let raf = 0;
    let introStart = 0;
    // Flat → 3D intro: bands start collapsed at y=0 (a 2D topographic map)
    // and ease up to their elevations.
    const INTRO_DELAY_MS = 150;
    const INTRO_DURATION_MS = 2400;
    const _q = new THREE.Quaternion();
    const _baseQ = new THREE.Quaternion();
    const _e = new THREE.Euler();

    function animate() {
      raf = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = lastTime === 0 ? 0 : (now - lastTime) / 1000;
      lastTime = now;
      if (introStart === 0) introStart = now;

      const introRaw = Math.min(
        1,
        Math.max(0, (now - introStart - INTRO_DELAY_MS) / INTRO_DURATION_MS)
      );
      // ease-in-out cubic
      const introProgress =
        introRaw < 0.5
          ? 4 * introRaw * introRaw * introRaw
          : 1 - Math.pow(-2 * introRaw + 2, 3) / 2;

      machineProgress += (machineTargetProgress - machineProgress) * 0.08;

      const ambientSpin = (1 - machineProgress * 0.5) * 0.005;
      machineGroup.rotation.y += ambientSpin * dt;
      machineGroup.rotation.x = Math.sin(now * 0.00003) * 0.02;

      machineParts.forEach((p) => {
        const rawT = machineProgress;
        const t = rawT * rawT;
        p.mesh.position.set(
          p.basePos.x + p.offset.x * t,
          p.basePos.y * introProgress + p.offset.y * t,
          p.basePos.z + p.offset.z * t
        );
        const angle = p.rotSpeed * t * 4.0;
        _q.setFromAxisAngle(p.rotAxis, angle);
        _e.set(p.baseRot.x, p.baseRot.y, p.baseRot.z);
        _baseQ.setFromEuler(_e);
        _baseQ.multiply(_q);
        p.mesh.quaternion.copy(_baseQ);

        const distFromBase = p.offset.length() * t;
        const fade = Math.max(0, 1 - distFromBase / 260);
        const ud = p.mesh.userData as {
          fillMat?: THREE.Material & { opacity: number; userData: { baseOp: number } };
          edgeMat?: THREE.Material & { opacity: number; userData: { baseOp: number } };
        };
        if (ud.fillMat) {
          ud.fillMat.opacity = ud.fillMat.userData.baseOp * fade;
        }
        if (ud.edgeMat && ud.edgeMat !== ud.fillMat) {
          ud.edgeMat.opacity = ud.edgeMat.userData.baseOp * fade;
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh | THREE.LineSegments;
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
    <section
      ref={sectionRef}
      className="hero-landscape-section relative w-full min-h-screen overflow-hidden bg-card text-foreground"
      id="hero-landscape"
    >
      {/* Canvas fills the full section — text overlay sits on top of it */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 45%, rgba(251, 250, 246, 0.35) 0%, rgba(251, 250, 246, 0.12) 45%, transparent 75%), linear-gradient(to bottom, rgba(251, 250, 246, 0.25) 0%, transparent 22%, transparent 58%, rgba(251, 250, 246, 0.35) 75%, rgba(251, 250, 246, 0.78) 90%, rgba(251, 250, 246, 1) 100%)",
        }}
      />
      {/* Text overlay — children control their own vertical placement via padding */}
      <div ref={overlayRef} className="relative z-[2]">
        {children}
      </div>
    </section>
  );
}
