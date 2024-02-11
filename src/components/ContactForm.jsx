import React from "react";
import { PiArrowElbowDownRightBold } from "react-icons/pi";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const firstname = formData.get("firstname");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const message = formData.get("message");

    form.reset();

    alert(
      `Firstname: ${firstname} Surname: ${surname}Email: ${email} Message: ${message} `
    );
  };

  return (
    <div className="contactPage__form">
      <form onSubmit={handleSubmit}>
        <div className="contactPage__form__container">
          <div className="contactPage__form__container__content">
            <label htmlFor="firstname">
              {" "}
              <PiArrowElbowDownRightBold size={30} className="icons" /> Votre
              prénom
            </label>
            <input name="firstname" type="text" id="firstname" />
          </div>

          <div className="contactPage__form__container__content">
            <label htmlFor="surname">
              <PiArrowElbowDownRightBold size={30} className="icons" /> Votre
              nom
            </label>
            <input name="surname" type="text" id="surname" />
          </div>
        </div>
        <label htmlFor="email">
          <PiArrowElbowDownRightBold size={30} className="icons" /> Votre e-mail
        </label>
        <input name="email" type="text" id="email" />
        <label htmlFor="message">
          <PiArrowElbowDownRightBold size={30} className="icons" /> Entrez votre
          message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Votre message . . ."
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
