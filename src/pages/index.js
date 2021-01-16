import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Tagline from "../components/Tagline";
import FeaturedHero from "../components/FeaturedHero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Tagline />
      <FeaturedHero />
    </Layout>
  );
}
