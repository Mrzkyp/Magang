import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
} from "@roketid/windmill-react-ui";

function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="md:px-4 md:py-3 mb-8">
      <Button onClick={openModal}>Tambah Pengguna</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Tambah Pengguna</ModalHeader>
        <ModalBody>
          <Label className="mt-4">
            <span>Nama Lengkap</span>
            <Input className="mt-1" placeholder="Nama Lengkap" />
          </Label>
          <Label className="mt-4">
            <span>Email</span>
            <Input className="mt-1" placeholder="Email" />
          </Label>
          <Label className="mt-4">
            <span>Loket</span>
            <Select className="mt-1">
              <option value="loket1">Loket 1</option>
              <option value="loket2">Loket 2</option>
              <option value="loket3">Loket 3</option>
              <option value="loket4">Loket 4</option>
            </Select>
          </Label>
          <Label className="mt-4">
            <input className="mt-1" type="file" />
          </Label>
        </ModalBody>
        <ModalFooter>
          <Button layout="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button layout="primary" onClick={closeModal}>
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
