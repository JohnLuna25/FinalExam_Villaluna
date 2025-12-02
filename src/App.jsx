import React, { useState, useEffect } from "react";
import Home from "./pages/Home";

import hammerPng from "./assets/hammer.png";
import handsawPng from "./assets/handsaw.png";
import pvcPipeCutterPng from "./assets/pvc-pipe-cutter.png";
import tapeMeasurePng from "./assets/tape-measure.png";
import nailsPng from "./assets/nails.png";
import screwsPng from "./assets/screws.png";
import paintPng from "./assets/paint.png";
import paintBrushPng from "./assets/paint-brush.png";
import electricalTapePng from "./assets/electrical-tape.png";
import teflonTape from "./assets/teflon-tape.png";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hammer",
      category: "Tools",
      price: 250,
      stock: 34,
      image: hammerPng,
      description: "Durable hammer suitable for carpentry and home repairs.",
    },
    {
      id: 2,
      name: "Handsaw",
      category: "Tools",
      price: 180,
      stock: 26,
      image: handsawPng,
      description:
        "Sharp handsaw for cutting wood and light construction work.",
    },
    {
      id: 3,
      name: "PVC Pipe Cutter",
      category: "Tools",
      price: 740,
      stock: 7,
      image: pvcPipeCutterPng,
      description:
        "Heavy-duty cutter for PVC pipes, ideal for plumbing projects.",
    },
    {
      id: 4,
      name: "Tape Measure",
      category: "Tools",
      price: 120,
      stock: 72,
      image: tapeMeasurePng,
      description: "5-meter tape measure for precise measurements.",
    },
    {
      id: 5,
      name: "Nails (100 pcs)",
      category: "Hardware",
      price: 80,
      stock: 800,
      image: nailsPng,
      description: "Pack of 100 steel nails for general construction use.",
    },
    {
      id: 6,
      name: "Screws (100 pcs)",
      category: "Hardware",
      price: 70,
      stock: 600,
      image: screwsPng,
      description: "Pack of 100 multipurpose screws for wood and metal.",
    },
    {
      id: 7,
      name: "Paint (1L)",
      category: "Painting",
      price: 450,
      stock: 12,
      image: paintPng,
      description: "High-quality wall paint for indoor and outdoor projects.",
    },
    {
      id: 8,
      name: "Paint Brush",
      category: "Painting",
      price: 35,
      stock: 4,
      image: paintBrushPng,
      description: "Small paint brush for detailed work or touch-ups.",
    },
    {
      id: 9,
      name: "Electrical Tape",
      category: "Hardware",
      price: 25,
      stock: 50,
      image: electricalTapePng,
      description: "Insulating tape for wiring and electrical repairs.",
    },
    {
      id: 10,
      name: "Teflon Tape",
      category: "Hardware",
      price: 20,
      stock: 50,
      image: teflonTape,
      description: "Thread sealing tape for plumbing connections.",
    },
  ]);

  return <Home products={products} setProducts={setProducts} />;
};

export default App;
