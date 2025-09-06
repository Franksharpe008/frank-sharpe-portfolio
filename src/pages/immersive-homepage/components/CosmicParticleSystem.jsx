import React, { useEffect, useRef, useState } from 'react';

const CosmicParticleSystem = ({ isActive = true, intensity = 1 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas?.getContext('2d');
    const updateDimensions = () => {
      const rect = canvas?.getBoundingClientRect();
      canvas.width = rect?.width * window.devicePixelRatio;
      canvas.height = rect?.height * window.devicePixelRatio;
      ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
      setDimensions({ width: rect?.width, height: rect?.height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.floor(50 * intensity);
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef?.current?.push({
          x: Math.random() * dimensions?.width,
          y: Math.random() * dimensions?.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.5 ? '#00D9FF' : '#FF6B35',
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02
        });
      }
    };

    initParticles();

    const animate = () => {
      if (!isActive) return;

      ctx?.clearRect(0, 0, dimensions?.width, dimensions?.height);
      
      particlesRef?.current?.forEach((particle, index) => {
        // Update position
        particle.x += particle?.vx;
        particle.y += particle?.vy;
        
        // Mouse interaction
        const dx = mouseRef?.current?.x - particle?.x;
        const dy = mouseRef?.current?.y - particle?.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += dx * force * 0.001;
          particle.vy += dy * force * 0.001;
        }
        
        // Boundary wrapping
        if (particle?.x < 0) particle.x = dimensions?.width;
        if (particle?.x > dimensions?.width) particle.x = 0;
        if (particle?.y < 0) particle.y = dimensions?.height;
        if (particle?.y > dimensions?.height) particle.y = 0;
        
        // Update pulse
        particle.pulse += particle?.pulseSpeed;
        const pulseFactor = Math.sin(particle?.pulse) * 0.3 + 0.7;
        
        // Draw particle
        ctx?.beginPath();
        ctx?.arc(particle?.x, particle?.y, particle?.size * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = particle?.color + Math.floor(particle?.opacity * 255)?.toString(16)?.padStart(2, '0');
        ctx?.fill();
        
        // Draw connections
        particlesRef?.current?.slice(index + 1)?.forEach(otherParticle => {
          const dx = particle?.x - otherParticle?.x;
          const dy = particle?.y - otherParticle?.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const opacity = (80 - distance) / 80 * 0.2;
            ctx?.beginPath();
            ctx?.moveTo(particle?.x, particle?.y);
            ctx?.lineTo(otherParticle?.x, otherParticle?.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx?.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas?.getBoundingClientRect();
      mouseRef.current = {
        x: e?.clientX - rect?.left,
        y: e?.clientY - rect?.top
      };
    };

    canvas?.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      canvas?.removeEventListener('mousemove', handleMouseMove);
      if (animationRef?.current) {
        cancelAnimationFrame(animationRef?.current);
      }
    };
  }, [isActive, intensity, dimensions?.width, dimensions?.height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CosmicParticleSystem;