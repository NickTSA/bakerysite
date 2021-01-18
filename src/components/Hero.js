import React from "react";
import heroStyles from "./hero.module.css";
import heroCake from "../assets/images/cake.jpg";

export default function Hero() {
  return (
    <div className={heroStyles.container}>
      <div className={heroStyles.heroText}>
        <div className={heroStyles.title}>ABOUT</div>
        <div className={heroStyles.title}>US</div>
        <div>social icons</div>
        <div>
          We bring the season’s best mix of organic produce and hand-crafted
          farm products conveniently to your door by growing and partnering with
          local farms and artisans in your area.
        </div>
        <div>compony logo</div>
      </div>
      <div className={heroStyles.heroImage}>
        <img src={heroCake} alt="olive oil cake" />
      </div>
    </div>
  );
}
