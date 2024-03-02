"use client"

import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section 
      id="contact" 
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-4">Please contact me directly at{" "}
        <a className="underline" href="mailto:joybrar2001@gmail.com">
          joybrar2001@gmail.com
        </a>
      </p>

      <form 
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if(error){
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!")
        }}
      >
        <input 
          className="h-14 px-4 rounded-lg border border-black/10" 
          name="senderEmail"
          type="email"
          placeholder="Your Email"
          required
          maxLength={500}
        />
        <textarea 
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
