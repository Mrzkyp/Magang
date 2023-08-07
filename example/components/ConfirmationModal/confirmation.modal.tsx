import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@roketid/windmill-react-ui";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Hapus Data</ModalHeader>
      <ModalBody>Apakah Anda yakin ingin menghapus data ini?</ModalBody>
      <ModalFooter>
        <Button layout="outline" onClick={onClose}>
          Batal
        </Button>
        <Button layout="primary" onClick={onConfirm}>
          Hapus
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
