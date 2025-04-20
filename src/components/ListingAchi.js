import React from "react";
import Feature from "./FeatureAchi";
import "./Listing.css";
import { motion } from "framer-motion";

const ListingAchi = ({ data, open }) => {
  const { imageUrl, price, address, numBedroom } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
        </div>
        <div className="listing__details">
          <div className="listing__row">
            <span className="listing__price">{price}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">{address}</span>
          </div>
          <div className="listing__row">
            <Feature iconLabel={numBedroom} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingAchi;