import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const Rebot3D = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/PBNh2Y1RrellrtRb/scene.splinecode");
    }
  }, []);

  return (
    <div>
      <canvas id="canvas3d" style={{ width: "100%", height: "100vh" }}></canvas>
    </div>
  );
};

export default Rebot3D;
