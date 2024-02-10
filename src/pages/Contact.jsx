import React from "react";
import { TfiEmail } from "react-icons/tfi";
import PageHead from "../components/PageHead";

const Contact = () => {
  return (
    <section id="contact" className="contactPage">
      <PageHead headerText="Contact" icon={<TfiEmail size={45} />} />
    </section>
  );
};

export default Contact;
