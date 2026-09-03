import { onMounted, onUnmounted, type Ref } from "vue";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function useNetworkBackground(canvasRef: Ref<HTMLCanvasElement | null>) {
  let raf = 0;
  let w = 0;
  let h = 0;
  let nodes: Node[] = [];
  const mouse = { x: -9999, y: -9999 };
  let reduce = false;

  function resize() {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(110, Math.floor((w * h) / 14000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function step() {
    const canvas = canvasRef.value;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, w, h);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;

      const dxm = mouse.x - n.x;
      const dym = mouse.y - n.y;
      const dm = Math.hypot(dxm, dym);
      if (dm < 160) {
        n.x += (dxm / dm) * 0.4;
        n.y += (dym / dm) * 0.4;
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i]!;
        const b = nodes[j]!;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 132) {
          const op = (1 - dist / 132) * 0.5;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(91,149,245,${op})`);
          grad.addColorStop(1, `rgba(139,92,246,${op})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(155,182,230,0.85)";
      ctx.fill();
    }

    if (!reduce) raf = requestAnimationFrame(step);
  }

  function handleMouseMove(e: MouseEvent) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function handleMouseLeave() {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  onMounted(() => {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    if (reduce) step();
    else raf = requestAnimationFrame(step);
  });

  onUnmounted(() => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseleave", handleMouseLeave);
  });
}
