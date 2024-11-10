// src/components/Profile.js
import React from 'react';
import profilePic from '../assets/profile.jpg'; // Update with your actual profile picture path
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section className="profile-section py-16 px-6 lg:px-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="profile-container max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="profile-info text-center lg:text-left lg:mr-10 text-white"
        >
          <h1 className="profile-name text-4xl lg:text-5xl font-bold mb-4">Saurav S. Mahajan</h1>
          <p className="profile-intro text-lg lg:text-xl max-w-md leading-relaxed">
          I'm a Full Stack Developer with 2+ years of experience building scalable, user-focused web applications. I excel in both front-end and back-end development, crafting efficient code and intuitive interfaces. Passionate about clean design and seamless functionality, I thrive on creating solutions that are as beautiful as they are functional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="profile-pic-container relative shadow-2xl rounded-full overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-2"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="profile-pic w-56 h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg"
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Profile;
