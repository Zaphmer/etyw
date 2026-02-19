 import { useEffect, useRef } from 'react';
 
 const FilmGrain = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
     
     const ctx = canvas.getContext('2d');
     if (!ctx) return;
     
     const resize = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
     
     resize();
     window.addEventListener('resize', resize);
     
     let animationId: number;
     
     const drawGrain = () => {
       const imageData = ctx.createImageData(canvas.width, canvas.height);
       const data = imageData.data;
       
       for (let i = 0; i < data.length; i += 4) {
         const grain = Math.random() * 30;
         data[i] = grain;
         data[i + 1] = grain;
         data[i + 2] = grain;
         data[i + 3] = 15; // Low opacity for subtle effect
       }
       
       ctx.putImageData(imageData, 0, 0);
       animationId = requestAnimationFrame(drawGrain);
     };
     
     // Use interval for performance (update grain less frequently)
     const intervalId = setInterval(() => {
       const imageData = ctx.createImageData(canvas.width, canvas.height);
       const data = imageData.data;
       
       for (let i = 0; i < data.length; i += 4) {
         const grain = Math.random() * 25;
         data[i] = grain;
         data[i + 1] = grain;
         data[i + 2] = grain;
         data[i + 3] = 12;
       }
       
       ctx.putImageData(imageData, 0, 0);
     }, 80);
     
     return () => {
       window.removeEventListener('resize', resize);
       clearInterval(intervalId);
       if (animationId) cancelAnimationFrame(animationId);
     };
   }, []);
   
   return (
     <canvas
       ref={canvasRef}
       className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.035]"
       style={{ mixBlendMode: 'overlay' }}
     />
   );
 };
 
 export default FilmGrain;