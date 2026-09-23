import React, { type JSX } from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "../../Components/HTxt.tsx";
import BenefitsCard from "./BenefitCard/index.tsx";
import abstractWave from "../../assets/AbstractWaves.png";
import sparkles from "../../assets/Sparkles.png";
import benefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import { useNavigate } from "react-router-dom";
interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Benefits() {
  const navigate = useNavigate();
  return (
    <section id="benefuts" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>More Than Just a Gym.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers are and classes
            to get you to your ultimate fitness goals with ease. We provide true
            care into each and every member .
          </p>
        </motion.div>
        {/* benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefits: BenefitType) => (
            <BenefitsCard
              key={benefits.title}
              icon={benefits.icon}
              title={benefits.title}
              description={benefits.description}
            />
          ))}
        </motion.div>

        <div className="mt-16 md:flex items-center justify-between gap-20 md:mt-28">
          <img
            className="mx-auto"
            src={benefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          <div>
            {/* title */}
            <div className="relative">
              <img
                className="absolute -top-20 z-[1]"
                src={abstractWave}
                alt=""
              />
              <motion.div
                className="flex "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  Millions of Happy Member
                  <span className="text-primary-500">Fit</span>
                </HText>
              </motion.div>
            </div>
            {/* desc */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay:0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>
            {/* btn */}
            <div className="relative mt-16">
              <img
                src={sparkles}
                alt=""
                className="absolute -bottom-20 right-40 z-[-1]"
              />
              <button
                className=" md:w-auto bg-secondary-500 py-2 px-7 rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-500 cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
