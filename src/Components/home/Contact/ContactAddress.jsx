import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const ContactAddress = () => {
  return (
    <div className="space-y-14 mt-14 lg:ml-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-400 flex justify-center items-center rounded-sm">
          <IoLocation className="text-2xl text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Address</h3>
          <p className="text-gray-600">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-400 flex justify-center items-center rounded-sm">
          <LuPhoneCall className="text-2xl text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Phone</h3>
          <p className="text-gray-600">+8801759061600</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-400 flex justify-center items-center rounded-sm">
          <IoMdMail className="text-2xl text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Email</h3>
          <p className="text-gray-600">bikash.webdeveloper5@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
