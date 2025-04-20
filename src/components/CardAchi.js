import React, { useState } from "react";
import Listing from "./ListingAchi";
import Overlay from "./OverlayAchi";
import Modal from "./ModalAchi";
import { AnimatePresence } from "framer-motion";

const CardAchi = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <Listing data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={data} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardAchi;