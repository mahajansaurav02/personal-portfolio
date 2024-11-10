import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = ({ contact }) => (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="my-16 text-center"
  >
    <h2 className="text-4xl font-bold mb-4 text-teal-300">Contact</h2>
    <p className="text-lg mb-8 text-yellow-100">
    Feel free to reach out for collaboration, inquiries, or just to say hello!    </p>
    <div className="flex flex-col md:flex-row justify-center gap-8 mt-6">
      {/* Address Section */}
      <div className="flex items-center p-6  rounded-lg shadow-md text-center md:text-left">
        <div className="icon-container">
          <FaMapMarkerAlt className="text-4xl text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">Address</h3>
          <p className="text-teal-300">Koregaon Park,Pune</p>
        </div>
      </div>
      {/* Phone Section */}
      <div className="flex items-center p-6  rounded-lg shadow-md text-center md:text-left">
        <div className="icon-container">
          <FaPhoneAlt className="text-4xl text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">Call Me</h3>
          <p className="text-teal-300">+91 9960718207</p>
        </div>
      </div>
      {/* Email Section */}
      <div className="flex items-center p-6  rounded-lg shadow-md text-center md:text-left">
        <div className="icon-container">
          <FaEnvelope className="text-4xl text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">Email Me</h3>
          <p className="text-gray-500">
            <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">
              {contact.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Contact;
