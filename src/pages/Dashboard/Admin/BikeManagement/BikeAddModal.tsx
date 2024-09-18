import { useRef } from "react";

const BikeAddModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal(); // Show modal using native method
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close(); // Close modal using native method
    }
  };

  return (
    <>
      <button className="btn" onClick={openModal}>
        Add New Bike
      </button>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg">Add New Bike</h3>
          <p className="py-4">Form to add new bike details will go here.</p>

          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BikeAddModal;
