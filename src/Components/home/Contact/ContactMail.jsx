import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const ContactMail = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_q3x1vpv", "template_h33ebdp", form.current, {
        publicKey: "l6uTuhHd4DcBfA7gg",
      })
      .then(
        (res) => {
          console.log("SUCCESS!", res);
          setLoading(false);
          toast.success("Your Message Successfully Send.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className="card  w-full rounded-none  ">
        <form ref={form} onSubmit={sendEmail} className="card-body">
          <div className="lg:flex gap-5">
            <div className="form-control lg:flex-1">
              <label className="label">
                <span className="label-text font-semibold">User Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your user Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control lg:flex-1">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your  email"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Subject</span>
            </label>
            <input
              type="text"
              name="user_subject"
              placeholder="Enter Your subject"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">Message</span>
            </label>
            <textarea
              placeholder="Enter Your Message"
              name="message"
              className="textarea textarea-bordered textarea-lg w-full lg:h-[200px]"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-accent w-52 rounded-none">
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-md"></span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMail;
