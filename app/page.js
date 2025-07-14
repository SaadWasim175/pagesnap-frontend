"use client";
import React from "react";
import HeroSection from "@/pagecomponents/HeroSection";
import HowItWorks from "@/pagecomponents/Working";
import RevealSlider from "@/pagecomponents/RevealSlider";
import PricingPlans from "@/pagecomponents/Pricing";
import "@/styles/Home.css"
import Navbar from "@/components/Navbar";
import FeatureSection from "@/pagecomponents/FeatureSection";
import BetaBanner from "@/components/BetaBanner";

export default function Home(){
  return(
    <>
    <div className="glow-bg"></div>
    <BetaBanner/>
    <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <hr className="hrline" />
      <FeatureSection/>
      <hr className="hrline" />
      <RevealSlider/>
      <hr className="hrline" />
      <PricingPlans/>
    </>
  )
}