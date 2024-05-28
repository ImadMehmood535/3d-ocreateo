import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const Rebot = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/47UON1b6byRBWbY6/scene.splinecode");
    }
  }, []);

  return (
    <div>
      <canvas id="canvas3d" style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
};

export default Rebot;
