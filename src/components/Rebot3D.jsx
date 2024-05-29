import React, { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

const Rebot3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const app = new Application(canvas);
        await app.load("https://prod.spline.design/PBNh2Y1RrellrtRb/scene.splinecode");
      }
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadModel();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const canvas = canvasRef.current;
    if (canvas) {
      observer.observe(canvas);
    }

    return () => {
      if (canvas) {
        observer.unobserve(canvas);
      }
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Rebot3D;
