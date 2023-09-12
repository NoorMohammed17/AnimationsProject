import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible : { opacity: 1, y: 0 }
      }}
        initial="hidden" //opacity'0' means inivisble
        animate="visible"
        exit="hidden"
        // initial={{ opacity: 0, y: 30 }} //opacity'0' means inivisble
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: 30 }}
        open
        className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
