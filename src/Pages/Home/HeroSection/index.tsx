import React from "react";
import HomePageText from "../../../assets/HomePageText.png";
import HomePageGraphic from "../../../assets/HomePageGraphic.png";
import SponserRedBull from "../../../assets/SponsorRedBull.png";
import SponserForbes from "../../../assets/SponsorForbes.png";
import SponserFortune from "../../../assets/SponsorFortune.png";
import EvolveText from "../../../assets/EvolveText.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      id="HeroSection"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 "
    >
      {/* img and main header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* heading */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <img
                className="hidden md:block absolute z-0 -top-10 -left-20 "
                src={EvolveText}
                alt=""
              />
              <div className="relative z-10">
                <img src={HomePageText} alt="home-page-tag" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Unirivaled Gym . Unparalled Training Fittnes Classes.World Classes
              Studies to get the Body Shapes That you Dream Of ... Get Started
              Now.
            </p>
          </motion.div>
          {/* action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay:0.2 ,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center gap-8 mt-8"
          >
            <button
              className=" md:w-auto bg-secondary-500 py-2 px-7 rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-500 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Join Now
            </button>
            <p className="text-center justify-center px-3 py-2 text-primary-500 font-semibold hover:text-secondary-500 transition-all duration-300 cursor-pointer">
              Learn More
            </p>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {/* sponsers */}
      <div className="h-30 w-full bg-primary-100 py-10">
        <div className="mx-auto">
          <div className="flex  items-center justify-around gap-8">
            <img src={SponserRedBull} alt="red-bull-sponser" />
            <img src={SponserForbes} alt="red-bull-forbes" />
            <img src={SponserFortune} alt="red-fortune-sponser" />
          </div>
        </div>
      </div>
    </section>
  );
}
