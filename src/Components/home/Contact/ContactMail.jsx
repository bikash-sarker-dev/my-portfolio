import React from "react";

const ContactMail = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className="card  w-full rounded-none  ">
        <form className="card-body">
          <div className="lg:flex gap-5">
            <div className="form-control lg:flex-1">
              <label className="label">
                <span className="label-text font-semibold">User Name</span>
              </label>
              <input
                type="text"
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
              className="textarea textarea-bordered textarea-lg w-full lg:h-[200px]"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-accent w-52 rounded-none">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMail;
