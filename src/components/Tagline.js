import React from "react";
import tagline from "./tagline.module.css";

export default function Tagline() {
  return (
    <div className={tagline.container}>
      <h4>ABOUT OUR CAKES</h4>
      <p>
        Exclusive restaurant in Paris, the ultimate way to get amazing food from
        the best chefs in the city. Great atmosphere included.
      </p>
    </div>
  );
}
