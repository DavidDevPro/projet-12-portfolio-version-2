import React from "react";
import { TfiEmail } from "react-icons/tfi";
import PageHead from "../components/PageHead";
import ContactText from "../components/ContactText";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contactPage">
      <PageHead headerText="Contact" icon={<TfiEmail size={45} />} />

      <div className="contactPage__container">
        <ContactText />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
