import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Select } from "@roketid/windmill-react-ui";
import { AddIcon, EditIcon } from "icons";
import React from "react";
import { useState } from "react";

export default function Loket() {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false
  );
  const [modalFormOpen, setModalFormOpen] = React.useState(false);


  // const [isModalOpen, setIsModalOpen] = useState(false);

  // function openModal() {
  //   setIsModalOpen(true);
  // }

  // function closeModal() {
  //   setIsModalOpen(false);
  // }

  return (
    <div className="xl:px-6 xl:py-3">
      <Button
        layout="link"
        size="large"
        aria-label="Edit"
        onClick={() => setModalDefaultOpen(true)}
      >
        <AddIcon className="md:w-4 md:h-4" aria-hidden="true" />
        <p className="xl:p-2">
          Tambah Loket
        </p>
      </Button>
      <Modal isOpen={modalDefaultOpen} onClose={() => setModalDefaultOpen(false)}>
        <ModalHeader>Edit Loket</ModalHeader>
        <ModalBody>
          <Label className="mt-4">
            <span>Nama Lengkap</span>
            <Input className="mt-1" placeholder="Nama Lengkap" />
          </Label>
          <Label className="mt-4">
            <span>Loket</span>
            <Select className="mt-1">
              <option value="loket1">01</option>
              <option value="loket2">02</option>
              <option value="loket1">03</option>
              <option value="loket2">04</option>
            </Select>
          </Label>
          <Label className="mt-4">
            <span>Loket</span>
            <Select className="mt-1">
              <option value="loket1">Loket Umum</option>
              <option value="loket2">Loket BPJS</option>
            </Select>
          </Label>
        </ModalBody>
        <ModalFooter>
          <Button layout="outline" onClick={() => setModalDefaultOpen(false)}>
            Cancel
          </Button>
          <Button layout="primary" onClick={() => setModalDefaultOpen(true)}>
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}