import React, { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import ContactUsImg from "../../assets/ContactUsPageGraphic.png";
import evolveText from "../../assets/EvolveText.png";
import HText from "../../Components/HTxt.tsx";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name ? "This field is required" : "",
      email: !formData.email
        ? "This field is required"
        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ? "Invalid email address"
        : "",
      message: !formData.message ? "This field is required" : "",
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/baran.vahhab.2002@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        alert("Your message has been sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="Contact" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div>
        <motion.div
          className="md:w-3/4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">Join now</span>
          </HText>

          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            architecto accusamus accusantium asperiores eligendi amet iusto
            optio, eius nulla quos distinctio illum suscipit in ab quas.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              {errors.name && (
                <p className="mt-1 text-primary-500">{errors.name}</p>
              )}

              <input
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />

              {errors.email && (
                <p className="mt-1 text-primary-500">{errors.email}</p>
              )}

              <textarea
                rows={4}
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
              />

              {errors.message && (
                <p className="mt-1 text-primary-500">{errors.message}</p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <img
              className="absolute -bottom-20 -right-10 -z-10 w-full"
              src={evolveText}
              alt=""
            />

            <img className="w-full" src={ContactUsImg} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}