import React from "react";
import { IoMdMail } from "react-icons/io";
import PageHead from "../components/PageHead";

const Contact = () => {
  return (
    <section id="contact" className="contactPage">
      <PageHead headerText="Contact" icon={<IoMdMail size={45} />} />
    </section>
  );
};

export default Contact;
