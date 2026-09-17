"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * DROMMER HQ rotating media ring.
 *
 * A port of the custom Framer code component on /about-us. The maths below is
 * read from the site's compiled source, not approximated:
 *
 *   speed        30      seconds for one full rotation -> 360/30 = 12 deg/s
 *   imageWidth   300     tile width; aspectRatio 1 so height matches
 *   imageRadius  10
 *   scaleStep    z = innerWidth <= 480 ? 0.4 : innerWidth <= 768 ? 0.6 : 1
 *   H            max(count * (tile + 20) / (2 * PI), 200 * z)   horizontal radius
 *   U            H * 0.85                                       depth radius
 *   bob          40 * z                                         vertical travel
 *   pad          innerWidth <= 768 ? 80 : 100
 *   stage        H * 2 + tile + pad  by  bob * 2 + tile + pad
 *
 * Per tile, at angle n = (rotation + 360/count * i):
 *   x         = sin(n) * H
 *   y         = -cos(n) * bob
 *   z         = cos(n) * U
 *   depthNorm = (z + U) / (2U)          0 at the back, 1 at the front
 *   scale     = 0.35 + depthNorm * 0.65
 *   zIndex    = round(depthNorm * 100)
 * and tiles are painted back-to-front by z.
 *
 * Verified against the live page at 1920px: stage 1011x480, and the four
 * distinct scales 0.35 / 0.5125 / 0.8375 / 1 at 60-degree increments.
 *
 * Dragging rotates the ring at 0.3 deg per pixel and keeps momentum, decaying
 * by 0.92 per frame until it rejoins the idle spin.
 */

const SHARED = "/sites/first-rose-853260-framer-app-21051feb/shared";

type Media =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string };

/**
 * Slot order is the live component's. Note slots 1 and 2 are videos — their
 * image sources exist in the source but are never rendered.
 */
const MEDIA: readonly Media[] = [
  { kind: "video", src: `${SHARED}/videos/alSHItmqtSUkRprMTTpDWQY4utY.mp4` },
  { kind: "video", src: `${SHARED}/videos/qnqGys529ygGdzaSURPPRjKSvWQ.mp4` },
  { kind: "image", src: `${SHARED}/images/EjURn1ncA5ogB6ogvh2kSzrfKM0.webp` },
  { kind: "image", src: `${SHARED}/images/fUYvTkLXEB3POTIQF9rQ6ofIu2g.webp` },
  { kind: "image", src: `${SHARED}/images/kzoqCssl66YuZIpzxEq3JrwGYec.webp` },
  { kind: "image", src: `${SHARED}/images/kfJ3Afnbu7MDM23gfqTEdEXb4wE.webp` },
];

const SPEED_SECONDS = 30;
const TILE = 300;
const RADIUS = 10;
const DRAG_DEGREES_PER_PX = 0.3;
const MOMENTUM_DECAY = 0.92;

/**
 * Chrome normalises inline transform values to three decimals when it parses
 * them, so full-precision output makes React's hydration check compare
 * "-264.6378698024601px" against the "-264.638px" the DOM actually holds.
 * Rounding here makes both sides agree.
 */
const round3 = (value: number) => Math.round(value * 1000) / 1000;

export function HqCarousel() {
  const [viewport, setViewport] = useState(1200);
  // Rotation is mirrored into state so render never reads a ref; the ref is what
  // the rAF loop and the drag handlers mutate.
  const [rotation, setRotation] = useState(0);

  const rotationRef = useRef(0);
  const frame = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const idleFactor = useRef(1);
  const momentum = useRef(0);

  useEffect(() => {
    const onResize = () => setViewport(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const degreesPerSecond = 360 / SPEED_SECONDS;
    let previous: number | null = null;

    const tick = (now: number) => {
      if (previous === null) previous = now;
      const delta = (now - previous) / 1000;
      previous = now;

      if (!dragging.current) {
        if (Math.abs(momentum.current) > 0.1) {
          rotationRef.current = (rotationRef.current + momentum.current) % 360;
          momentum.current *= MOMENTUM_DECAY;
        } else {
          momentum.current = 0;
          rotationRef.current =
            (rotationRef.current +
              degreesPerSecond * delta * idleFactor.current) %
            360;
        }
      }

      setRotation(rotationRef.current);
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const startDrag = useCallback((clientX: number) => {
    dragging.current = true;
    lastX.current = clientX;
    idleFactor.current = 0;
    momentum.current = 0;
  }, []);

  const moveDrag = useCallback((clientX: number) => {
    if (!dragging.current) return;
    const travelled = clientX - lastX.current;
    lastX.current = clientX;
    const step = travelled * DRAG_DEGREES_PER_PX;
    rotationRef.current = (rotationRef.current + step) % 360;
    momentum.current = step;
    setRotation(rotationRef.current);
  }, []);

  const endDrag = useCallback(() => {
    dragging.current = false;
    idleFactor.current = 1;
  }, []);

  const scaleStep = viewport <= 480 ? 0.4 : viewport <= 768 ? 0.6 : 1;
  const tile = TILE * scaleStep;
  const count = MEDIA.length;
  const horizontalRadius = Math.max(
    (count * (tile + 20)) / (2 * Math.PI),
    200 * scaleStep,
  );
  const depthRadius = horizontalRadius * 0.85;
  const bob = 40 * scaleStep;
  const pad = viewport <= 768 ? 80 : 100;

  const tiles = MEDIA.map((media, index) => {
    const angle =
      (((rotation + (360 / count) * index) % 360) * Math.PI) / 180;
    const z = Math.cos(angle) * depthRadius;
    const depthNorm = (z + depthRadius) / (2 * depthRadius);
    return {
      media,
      index,
      x: round3(Math.sin(angle) * horizontalRadius),
      y: round3(-Math.cos(angle) * bob),
      z,
      scale: round3(0.35 + depthNorm * 0.65),
      depthNorm,
    };
  }).sort((a, b) => a.z - b.z);

  return (
    <div
      className="flex h-full w-full cursor-grab touch-pan-y select-none items-center justify-center active:cursor-grabbing"
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      <div
        className="relative"
        style={{
          width: `${horizontalRadius * 2 + tile + pad}px`,
          height: `${bob * 2 + tile + pad}px`,
        }}
      >
        {tiles.map((item) => (
          <div
            key={item.index}
            className="absolute left-1/2 top-1/2 flex items-center justify-center will-change-transform"
            style={{
              transform: `translate(-50%, -50%) translateX(${item.x}px) translateY(${item.y}px) scale(${item.scale})`,
              zIndex: Math.round(item.depthNorm * 100),
            }}
          >
            {item.media.kind === "video" ? (
              <video
                src={item.media.src}
                autoPlay
                loop
                muted
                playsInline
                className="block object-cover"
                style={{
                  width: `${tile}px`,
                  height: `${tile}px`,
                  borderRadius: `${RADIUS}px`,
                  pointerEvents: "none",
                }}
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={item.media.src}
                alt=""
                className="block object-cover"
                style={{
                  width: `${tile}px`,
                  height: `${tile}px`,
                  borderRadius: `${RADIUS}px`,
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
