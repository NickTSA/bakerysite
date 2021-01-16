import React from "react";
import featuredHero from "./featuredHero.module.css";
import heroCake from "../assets/images/cake.jpg";
import { Link } from "gatsby";

export default function FeaturedHero() {
  return (
    <div className={featuredHero.container}>
      <div className={featuredHero.heroText}>
        <div style={{ textAlign: "center", margin: "auto" }}>
          We bring the season’s best mix of organic produce and hand-crafted
          farm products conveniently to your door by growing and partnering with
          local farms and artisans in your area.
        </div>
        <Link className={featuredHero.btn} to="/products">
          Order Now
        </Link>
      </div>
      <div className={featuredHero.heroImage}>
        <img src={heroCake} alt="olive oil cake" />
      </div>
    </div>
  );
}
