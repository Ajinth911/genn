import { useEffect, useRef, useCallback } from 'react';

/**
 * High-performance parallax hook using requestAnimationFrame + lerp.
 * Tracks cursor position and applies translate3d/rotate transforms
 * to registered layers at different depth speeds.
 * 
 * Automatically disables on mobile/touch devices.
 */
export default function useParallax(containerRef) {
  const mouse = useRef({ x: 0.5, y: 0.5 }); // normalized 0–1
  const current = useRef({ x: 0.5, y: 0.5 }); // lerped position
  const layers = useRef([]);
  const rafId = useRef(null);
  const isMobile = useRef(false);

  // Register a layer element with its config
  const registerLayer = useCallback((el, config = {}) => {
    if (!el) return;
    const {
      speed = 1,       // parallax movement intensity
      tilt = false,     // enable 3D tilt rotation
      tiltMax = 8,      // max rotation degrees
      shadow = false,   // dynamic shadow shift
    } = config;

    // Set GPU hints
    el.style.willChange = 'transform';
    el.style.backfaceVisibility = 'hidden';

    layers.current.push({ el, speed, tilt, tiltMax, shadow });

    // Cleanup function
    return () => {
      layers.current = layers.current.filter(l => l.el !== el);
    };
  }, []);

  useEffect(() => {
    // Detect mobile
    isMobile.current = window.matchMedia('(max-width: 768px)').matches
      || 'ontouchstart' in window;

    if (isMobile.current) return;

    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };

    // Lerp helper
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      // Smooth interpolation (0.08 = buttery, 0.15 = responsive)
      current.current.x = lerp(current.current.x, mouse.current.x, 0.08);
      current.current.y = lerp(current.current.y, mouse.current.y, 0.08);

      const cx = current.current.x;
      const cy = current.current.y;

      // Offset from center (-0.5 to 0.5)
      const ox = cx - 0.5;
      const oy = cy - 0.5;

      layers.current.forEach(({ el, speed, tilt, tiltMax, shadow }) => {
        const moveX = ox * speed * 30; // max ~15px at speed=1
        const moveY = oy * speed * 30;

        let transform = `translate3d(${moveX}px, ${moveY}px, 0)`;

        if (tilt) {
          const rotY = ox * tiltMax;  // rotate around Y based on X offset
          const rotX = -oy * tiltMax; // rotate around X based on Y offset
          transform += ` rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }

        el.style.transform = transform;

        if (shadow) {
          const shadowX = ox * 15;
          const shadowY = oy * 15;
          el.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.25)`;
        }
      });

      rafId.current = requestAnimationFrame(animate);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [containerRef]);

  return { registerLayer };
}
