import React from "react";
import { Button, Modal, Form } from "antd";


const BookingHubModal = ({ children, isOpenModal, setIsOpenModal , formBookingHub }) => {
  const handleCancelModal = () => {
    setIsOpenModal(false);
    formBookingHub.resetFields()
  };

  return (
    <Modal
      visible={isOpenModal}
      onCancel={handleCancelModal}
      footer={
        <div className="modal-footer">
          <Button onClick={handleCancelModal}>Cancel</Button>
          <Button onClick={() => formBookingHub.submit()} className="bg-blue-500">OK</Button>
        </div>
      }
    >
      {children}
    </Modal>
  );
};

export default BookingHubModal;
