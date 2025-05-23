import React from "react";
import "./Modal.css";
import Feature from "./FeatureAchi";
import { motion } from "framer-motion";

const ModalAchi = ({ data, close }) => {
  const {
    imageUrl,
    price,
    address,
    description,
    numBedroom,
  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
    className="modal"
    variants={modalVariants}
    onClick={(e) => e.stopPropagation()}
    >
      <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
        
        <i class="fa-solid fa-xmark modal__close-icon"></i>
        </motion.button>
      <motion.img
        className="modal__image"
        alt="Projects"
        src={imageUrl}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{price}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__address">{address}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <Feature iconName={"FaBed"} iconLabel={numBedroom} />
        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description">{description}</p>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default ModalAchi;