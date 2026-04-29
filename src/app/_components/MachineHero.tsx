"use client";

/**
 * MachineHero
 *
 * Atmospheric exploded-view topographic landscape rendered with Three.js.
 * Ported from shadow-demo.html. As the user scrolls into the section, each
 * contour band lifts vertically away from its true elevation — high bands
 * fly far, valley bands barely move — so the terrain decomposes into
 * floating geological strata.
 *
 * The section is taller than the viewport (220vh) and the inner stage is
 * sticky, which is what gives the scroll its scrubbing behavior.
 */

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

type Part = {
  mesh: THREE.Group;
  basePos: THREE.Vector3;
  offset: THREE.Vector3;
  baseRot: { x: number; y: number; z: number };
  rotAxis: THREE.Vector3;
  rotSpeed: number;
};

export function MachineHero() {
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
    // Tighter fog that pulls distant terrain into the dark backdrop,
    // creating an infinite-horizon feel.
    scene.fog = new THREE.Fog(0x0a0908, 220, 620);
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
      // Wider, brighter opacity range so the bands read clearly against
      // the dark backdrop. Peaks really pop; valleys are still present
      // but quieter.
      const opacity = 0.22 + Math.pow(t, 0.7) * 0.5;

      const geo = new THREE.BufferGeometry();
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(segs), 3)
      );
      const mat = new THREE.LineBasicMaterial({
        color: 0xfbf7ee,
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

    // -------- ACCENT PEAKS --------
    // Pick the highest peak in each of the four xz quadrants. Pairs are then
    // wired across opposite diagonals so the connecting paths intersect at
    // the center of the composition.
    type QuadPeak = { x: number; y: number; z: number };
    function highestInQuadrant(xSign: number, zSign: number): QuadPeak {
      let bestY = 0,
        bestX = 0,
        bestZ = 0;
      for (let ix = 0; ix <= SEGS; ix++) {
        const wx = -PLANE_SIZE / 2 + ix * cellSize;
        if (Math.sign(wx) !== xSign) continue;
        for (let iz = 0; iz <= SEGS; iz++) {
          const wz = -PLANE_SIZE / 2 + iz * cellSize;
          if (Math.sign(wz) !== zSign) continue;
          const hh = heightGrid[ix * gridSize + iz];
          if (hh > bestY) {
            bestY = hh;
            bestX = wx;
            bestZ = wz;
          }
        }
      }
      return { x: bestX, y: bestY, z: bestZ };
    }
    const qBackLeft = highestInQuadrant(-1, -1);   // pair-1 endpoint A
    const qFrontRight = highestInQuadrant(1, 1);    // pair-1 endpoint B
    const qBackRight = highestInQuadrant(1, -1);    // pair-2 endpoint C
    const qFrontLeft = highestInQuadrant(-1, 1);    // pair-2 endpoint D

    // peakA stays the dominant anchor (used for the vertical anchor line).
    const peakX = qBackLeft.x;
    const peakY = qBackLeft.y;
    const peakZ = qBackLeft.z;
    const accentGeo = new THREE.SphereGeometry(1.3, 14, 14);
    const accentMat = new THREE.MeshBasicMaterial({
      color: 0x7489a3, // UV (blue)
      transparent: true,
      opacity: 0.95,
    });
    (accentMat as unknown as { userData: { baseOp: number } }).userData = {
      baseOp: 0.95,
    };
    const accent = new THREE.Mesh(accentGeo, accentMat);
    const accentGroup = new THREE.Group();
    accentGroup.add(accent);
    (accentGroup.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = accentMat;
    (accentGroup.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = accentMat;
    machineParts.push({
      mesh: accentGroup,
      basePos: new THREE.Vector3(peakX, peakY - maxH * 0.45 + 1.5, peakZ),
      offset: new THREE.Vector3(0, 220, 0),
      baseRot: { x: 0, y: 0, z: 0 },
      rotAxis: new THREE.Vector3(0, 1, 0),
      rotSpeed: 0,
    });
    machineGroup.add(accentGroup);

    // Pair-1 endpoints sit on the back-left ↔ front-right diagonal.
    const yCenter = maxH * 0.45;
    const peakA = new THREE.Vector3(
      qBackLeft.x,
      qBackLeft.y - yCenter + 1.5,
      qBackLeft.z
    );
    const peakB = new THREE.Vector3(
      qFrontRight.x,
      qFrontRight.y - yCenter + 1.5,
      qFrontRight.z
    );

    const accent2Geo = new THREE.SphereGeometry(1.3, 14, 14);
    const accent2Mat = new THREE.MeshBasicMaterial({
      color: 0xb27a53, // Lamplight (orange)
      transparent: true,
      opacity: 0.95,
    });
    (accent2Mat as unknown as { userData: { baseOp: number } }).userData = {
      baseOp: 0.95,
    };
    const accent2 = new THREE.Mesh(accent2Geo, accent2Mat);
    const accent2Group = new THREE.Group();
    accent2Group.add(accent2);
    (accent2Group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = accent2Mat;
    (accent2Group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = accent2Mat;
    machineParts.push({
      mesh: accent2Group,
      basePos: peakB.clone(),
      offset: new THREE.Vector3(0, 220, 0),
      baseRot: { x: 0, y: 0, z: 0 },
      rotAxis: new THREE.Vector3(0, 1, 0),
      rotSpeed: 0,
    });
    machineGroup.add(accent2Group);

    // -------- CONNECTING PATH (terrain-hugging) --------
    // Straight line in XZ from peakA to peakB, with Y snapped to the
    // terrain height at each sample so the path rides up and over the
    // mountains. Draws on, pulses, then resets in a loop.
    // Sample the terrain at coarse density, then smooth via Catmull-Rom for
    // a continuous curve. Render as a TubeGeometry — a real mesh — to avoid
    // the per-segment cap "dots" that show up with line-quad shaders.
    const COARSE = 60;
    const coarsePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= COARSE; i++) {
      const u = i / COARSE;
      const wx = peakA.x + (peakB.x - peakA.x) * u;
      const wz = peakA.z + (peakB.z - peakA.z) * u;
      const nx = wx / (PLANE_SIZE / 2);
      const nz = wz / (PLANE_SIZE / 2);
      const surfaceY = heroHeight(nx, nz) - yCenter + 1.2;
      coarsePoints.push(new THREE.Vector3(wx, surfaceY, wz));
    }
    const smoothCurve = new THREE.CatmullRomCurve3(coarsePoints, false, "catmullrom", 0.5);
    const PATH_SAMPLES = 220;
    const RADIAL = 8;
    const pathGeo = new THREE.TubeGeometry(
      smoothCurve,
      PATH_SAMPLES,
      0.18,
      RADIAL,
      false
    );
    pathGeo.setDrawRange(0, 0);
    const pathMat = new THREE.MeshBasicMaterial({
      color: 0xb27a53, // Lamplight (orange)
      transparent: true,
      opacity: 0,
    });
    (pathMat as unknown as { userData: { baseOp: number } }).userData = {
      baseOp: 0.55,
    };
    const pathLine = new THREE.Mesh(pathGeo, pathMat);

    const arcGrp = new THREE.Group();
    arcGrp.add(pathLine);
    (arcGrp.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = pathMat;
    (arcGrp.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = pathMat;
    machineParts.push({
      mesh: arcGrp,
      basePos: new THREE.Vector3(0, 0, 0),
      offset: new THREE.Vector3(0, 0, 0),
      baseRot: { x: 0, y: 0, z: 0 },
      rotAxis: new THREE.Vector3(0, 1, 0),
      rotSpeed: 0,
    });
    machineGroup.add(arcGrp);

    // -------- SECOND PAIR: green + pink, on the OPPOSITE diagonal --------
    // back-right ↔ front-left so its line crosses pair-1's line at the
    // center of the terrain.
    const peakC = new THREE.Vector3(
      qBackRight.x,
      qBackRight.y - yCenter + 1.5,
      qBackRight.z
    );
    const peakD = new THREE.Vector3(
      qFrontLeft.x,
      qFrontLeft.y - yCenter + 1.5,
      qFrontLeft.z
    );

    // accent3 — green dot
    const accent3Mat = new THREE.MeshBasicMaterial({
      color: 0x88a374, // brand green (used for Social in the layer chips)
      transparent: true,
      opacity: 0.95,
    });
    (accent3Mat as unknown as { userData: { baseOp: number } }).userData = {
      baseOp: 0.95,
    };
    const accent3 = new THREE.Mesh(new THREE.SphereGeometry(1.3, 14, 14), accent3Mat);
    const accent3Group = new THREE.Group();
    accent3Group.add(accent3);
    (accent3Group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = accent3Mat;
    (accent3Group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = accent3Mat;
    machineParts.push({
      mesh: accent3Group,
      basePos: peakC.clone(),
      offset: new THREE.Vector3(0, 220, 0),
      baseRot: { x: 0, y: 0, z: 0 },
      rotAxis: new THREE.Vector3(0, 1, 0),
      rotSpeed: 0,
    });
    machineGroup.add(accent3Group);

    // accent4 — pink (Dusk) dot
    const accent4Mat = new THREE.MeshBasicMaterial({
      color: 0x977ba1, // Dusk (pink/purple)
      transparent: true,
      opacity: 0.95,
    });
    (accent4Mat as unknown as { userData: { baseOp: number } }).userData = {
      baseOp: 0.95,
    };
    const accent4 = new THREE.Mesh(new THREE.SphereGeometry(1.3, 14, 14), accent4Mat);
    const accent4Group = new THREE.Group();
    accent4Group.add(accent4);
    (accent4Group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = accent4Mat;
    (accent4Group.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = accent4Mat;
    machineParts.push({
      mesh: accent4Group,
      basePos: peakD.clone(),
      offset: new THREE.Vector3(0, 220, 0),
      baseRot: { x: 0, y: 0, z: 0 },
      rotAxis: new THREE.Vector3(0, 1, 0),
      rotSpeed: 0,
    });
    machineGroup.add(accent4Group);

    // Pair-2 connecting tube (terrain-hugging)
    const coarsePoints2: THREE.Vector3[] = [];
    for (let i = 0; i <= COARSE; i++) {
      const u = i / COARSE;
      const wx = peakC.x + (peakD.x - peakC.x) * u;
      const wz = peakC.z + (peakD.z - peakC.z) * u;
      const nx = wx / (PLANE_SIZE / 2);
      const nz = wz / (PLANE_SIZE / 2);
      const surfaceY = heroHeight(nx, nz) - yCenter + 1.2;
      coarsePoints2.push(new THREE.Vector3(wx, surfaceY, wz));
    }
    const smoothCurve2 = new THREE.CatmullRomCurve3(coarsePoints2, false, "catmullrom", 0.5);
    const pathGeo2 = new THREE.TubeGeometry(
      smoothCurve2,
      PATH_SAMPLES,
      0.18,
      RADIAL,
      false
    );
    pathGeo2.setDrawRange(0, 0);
    const pathMat2 = new THREE.MeshBasicMaterial({
      color: 0xb27a53, // Lamplight (orange) — both pair lines orange
      transparent: true,
      opacity: 0,
    });
    (pathMat2 as unknown as { userData: { baseOp: number } }).userData = {
      baseOp: 0.55,
    };
    const pathLine2 = new THREE.Mesh(pathGeo2, pathMat2);

    const arcGrp2 = new THREE.Group();
    arcGrp2.add(pathLine2);
    (arcGrp2.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = pathMat2;
    (arcGrp2.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = pathMat2;
    machineParts.push({
      mesh: arcGrp2,
      basePos: new THREE.Vector3(0, 0, 0),
      offset: new THREE.Vector3(0, 0, 0),
      baseRot: { x: 0, y: 0, z: 0 },
      rotAxis: new THREE.Vector3(0, 1, 0),
      rotSpeed: 0,
    });
    machineGroup.add(arcGrp2);

    // Animation registry — both paths share the same cycle math, with a
    // phase offset so they're not in sync.
    type AnimPath = {
      geo: THREE.TubeGeometry;
      mat: THREE.MeshBasicMaterial;
      phaseOffset: number;
    };
    const animPaths: AnimPath[] = [
      { geo: pathGeo, mat: pathMat, phaseOffset: 0 },
      { geo: pathGeo2, mat: pathMat2, phaseOffset: 0.42 },
    ];

    // Anchor line
    const anchorPositions = [
      peakX,
      peakY - maxH * 0.45 + 1.5,
      peakZ,
      peakX,
      -maxH * 0.45 - 5,
      peakZ,
    ];
    const anchorGeo = new THREE.BufferGeometry();
    anchorGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(anchorPositions), 3)
    );
    const anchorMat = new THREE.LineBasicMaterial({
      color: 0xc9a86a,
      transparent: true,
      opacity: 0.45,
    });
    (anchorMat as unknown as { userData: { baseOp: number } }).userData = {
      baseOp: 0.45,
    };
    const anchorLine = new THREE.LineSegments(anchorGeo, anchorMat);
    const anchorGrp = new THREE.Group();
    anchorGrp.add(anchorLine);
    (anchorGrp.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).fillMat = anchorMat;
    (anchorGrp.userData as { fillMat?: THREE.Material; edgeMat?: THREE.Material }).edgeMat = anchorMat;
    machineParts.push({
      mesh: anchorGrp,
      basePos: new THREE.Vector3(0, 0, 0),
      offset: new THREE.Vector3(0, 0, 0),
      baseRot: { x: 0, y: 0, z: 0 },
      rotAxis: new THREE.Vector3(0, 1, 0),
      rotSpeed: 0,
    });
    machineGroup.add(anchorGrp);

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
    let machineProgress = 0;
    let machineTargetProgress = 0;
    function update() {
      const rect = section!.getBoundingClientRect();
      const sectionHeight = section!.offsetHeight;
      const scrolled = -rect.top;
      const progressRaw = scrolled / (sectionHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, progressRaw));
      machineTargetProgress = progress;
      if (overlay) {
        const overlayOpacity = Math.max(0, 1 - progress * 2.2);
        overlay.style.opacity = overlayOpacity.toFixed(3);
      }
    }
    window.addEventListener("scroll", update, { passive: true });
    update();

    // Animate
    let lastTime = 0;
    let raf = 0;
    const _q = new THREE.Quaternion();
    const _baseQ = new THREE.Quaternion();
    const _e = new THREE.Euler();

    function animate() {
      raf = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = lastTime === 0 ? 0 : (now - lastTime) / 1000;
      lastTime = now;

      machineProgress += (machineTargetProgress - machineProgress) * 0.08;

      const ambientSpin = (1 - machineProgress * 0.5) * 0.1;
      machineGroup.rotation.y += ambientSpin * dt;
      machineGroup.rotation.x = Math.sin(now * 0.0001) * 0.08;

      machineParts.forEach((p) => {
        const rawT = machineProgress;
        const t = rawT * rawT;
        p.mesh.position.set(
          p.basePos.x + p.offset.x * t,
          p.basePos.y + p.offset.y * t,
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

      // Path animation: draw → pulse → reset, looping.
      // Cycle: 0–55% draw on, 55–88% pulse, 88–100% fade out.
      const CYCLE_MS = 5200;
      const cycleT = (now % CYCLE_MS) / CYCLE_MS;
      // Drive both connecting paths with the same draw → pulse → reset
      // cycle, but offset their phases so they aren't in lockstep.
      const INDICES_PER_SEG = RADIAL * 6;
      const TOTAL_INDICES = PATH_SAMPLES * INDICES_PER_SEG;
      const sceneFade = Math.max(0, 1 - machineProgress * 2.6);
      animPaths.forEach((ap) => {
        const pT = ((cycleT + ap.phaseOffset) % 1 + 1) % 1;
        let drawSegs = 0;
        let pathOp = 0;
        const baseOp = (ap.mat.userData as { baseOp: number }).baseOp;
        if (pT < 0.55) {
          const dt2 = pT / 0.55;
          const eased = dt2 * dt2 * (3 - 2 * dt2);
          drawSegs = Math.floor(eased * PATH_SAMPLES);
          pathOp = baseOp * 0.65;
        } else if (pT < 0.88) {
          drawSegs = PATH_SAMPLES;
          const pt = (pT - 0.55) / 0.33;
          pathOp =
            baseOp * (0.5 + 0.5 * Math.sin(pt * Math.PI * 4 - Math.PI / 2));
          pathOp = Math.max(baseOp * 0.55, pathOp);
        } else {
          drawSegs = PATH_SAMPLES;
          const ft = (pT - 0.88) / 0.12;
          pathOp = baseOp * (1 - ft);
        }
        ap.geo.setDrawRange(
          0,
          Math.min(TOTAL_INDICES, drawSegs * INDICES_PER_SEG)
        );
        ap.mat.opacity = pathOp * sceneFade;
      });

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
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
      className="machine-section relative w-full bg-[#0a0908] text-[#f5f1ea]"
      style={{ height: "140vh" }}
      id="machine-hero"
    >
      <div className="machine-stage-pin sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          id="machineCanvas"
          className="absolute inset-0 w-full h-full block"
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 55% 42% at 50% 42%, rgba(10, 9, 8, 0.65) 0%, rgba(10, 9, 8, 0.3) 45%, transparent 75%), linear-gradient(to bottom, rgba(10, 9, 8, 0.25) 0%, transparent 22%, transparent 78%, rgba(10, 9, 8, 0.5) 100%)",
          }}
        />
        {/* Overlay text */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-[2] transition-opacity duration-500"
        >
          <div
            className="font-mono text-xs uppercase mb-8 flex items-center gap-3.5"
            style={{ letterSpacing: "0.2em", color: "rgba(245, 241, 234, 0.55)" }}
          >
            <span
              className="inline-block w-9 h-px"
              style={{ background: "rgba(245, 241, 234, 0.3)" }}
            />
            Shadow
            <span
              className="inline-block w-9 h-px"
              style={{ background: "rgba(245, 241, 234, 0.3)" }}
            />
          </div>
          <h1
            className="font-serif font-normal mb-7 max-w-[920px]"
            style={{
              fontSize: "clamp(48px, 6vw, 88px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#f5f1ea",
            }}
          >
            Narrative intelligence
            <br />
            and program execution
            <br />
            <em
              className="not-italic"
              style={{
                fontStyle: "italic",
                color: "rgba(245, 241, 234, 0.55)",
                fontWeight: 300,
              }}
            >
              powered by AI agents
            </em>
          </h1>
          <p
            className="font-serif mb-11 max-w-[600px]"
            style={{
              fontSize: "clamp(18px, 1.4vw, 22px)",
              lineHeight: 1.5,
              color: "rgba(245, 241, 234, 0.78)",
            }}
          >
            Shadow is a narrative intelligence platform built on real-time
            data across media, search, social, and AI. AI agents identify the
            positions you can own and help run the programs that take them.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-medium text-[15px] no-underline transition-colors"
              style={{ background: "#f5f1ea", color: "#2a2520" }}
            >
              Book a demo →
            </a>
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 px-2 py-3.5 font-medium text-[15px] no-underline border-b"
              style={{ color: "#f5f1ea", borderColor: "#f5f1ea" }}
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
