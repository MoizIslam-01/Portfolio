"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  alpha: number;
  flicker: number;
};

const SPRITE_SIZE = 16;

function createEmberSprite(): HTMLCanvasElement {
  const sprite = document.createElement("canvas");
  sprite.width = SPRITE_SIZE;
  sprite.height = SPRITE_SIZE;
  const sctx = sprite.getContext("2d")!;
  const center = SPRITE_SIZE / 2;
  const gradient = sctx.createRadialGradient(
    center,
    center,
    0,
    center,
    center,
    center
  );
  gradient.addColorStop(0, "rgba(240, 207, 124, 0.9)");
  gradient.addColorStop(0.4, "rgba(201, 162, 75, 0.55)");
  gradient.addColorStop(1, "rgba(201, 162, 75, 0)");
  sctx.fillStyle = gradient;
  sctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
  return sprite;
}

export default function FogBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sprite = createEmberSprite();

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const emberCount = Math.min(40, Math.floor((width * height) / 35000));
    const embers: Ember[] = Array.from({ length: emberCount }, () =>
      spawnEmber(width, height, true)
    );

    function spawnEmber(w: number, h: number, randomY = false): Ember {
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + 10,
        r: Math.random() * 3 + 2,
        speed: Math.random() * 0.4 + 0.15,
        drift: Math.random() * 0.6 - 0.3,
        alpha: Math.random() * 0.5 + 0.2,
        flicker: Math.random() * Math.PI * 2,
      };
    }

    let animationId: number;

    function handleResize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    function tick() {
      ctx!.clearRect(0, 0, width, height);
      for (const ember of embers) {
        ember.y -= ember.speed;
        ember.x += ember.drift;
        ember.flicker += 0.05;

        if (ember.y < -10) Object.assign(ember, spawnEmber(width, height));

        const flickerAlpha =
          ember.alpha * (0.6 + 0.4 * Math.sin(ember.flicker));

        ctx!.globalAlpha = flickerAlpha;
        const size = ember.r * 2;
        ctx!.drawImage(sprite, ember.x - ember.r, ember.y - ember.r, size, size);
      }
      ctx!.globalAlpha = 1;
      animationId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
