import * as React from "react";
import { Reveal } from "@/src/components/ui/FramerMotion/onReveal";
import { ContactForm } from "@/src/components/Molecules/Forms/ContactForm";

// Komponen untuk judul halaman
const ContactTitle = () => (
  <div className="font-ghaly px-5 lg:px-0 mt-6 md:mt-12">
    <Reveal delay={0.2} duration={0.5}>
      <h2 className="text-3xl lg:text-5xl font-bold pb-3 text-transparent bg-clip-text gradient-tosca-biru">
        Contact Me
      </h2>
    </Reveal>
    <Reveal delay={0.3} duration={0.5}>
      <p className="text-base lg:text-md pb-3 text-gray-600 dark:text-[#d3d4d6]">
        Have a question or want to work together? Leave a message below!
      </p>
    </Reveal>
  </div>
);

export default function ContactPage() {
  return (
    <section id="contact" className="pb-20">
      <ContactTitle />
      <ContactForm />
    </section>
  );
}
