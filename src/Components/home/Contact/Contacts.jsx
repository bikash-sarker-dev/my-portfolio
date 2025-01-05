import React from "react";
import ContactAddress from "./ContactAddress";
import ContactMail from "./ContactMail";

const Contacts = () => {
  return (
    <section id="contact" className="my-32">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">Contact Us</h2>
        </div>
        <div className="flex mt-20">
          <div className="w-2/3">
            <ContactMail />
          </div>
          <div className="w-1/3">
            <ContactAddress />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
