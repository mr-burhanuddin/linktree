import React from 'react';
import './App.css';
import { motion } from 'framer-motion/dist/framer-motion';

function Links({ path, logo, alt }) {
  return (
    <>
      <motion.div
        className='link'
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <a href={path}>
          <div className='link__container'>
            <img className='link__logo' src={logo} alt={alt} />
            <div className='link__name'>{alt}</div>
          </div>
        </a>
      </motion.div>
    </>
  );
}

export default Links;
