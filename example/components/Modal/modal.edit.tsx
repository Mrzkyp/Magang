import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Select } from "@roketid/windmill-react-ui";
import { EditIcon } from "icons";
import React from "react";
import { useState } from "react";

export default function EditModal() {
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
    <div className="md:px-4 md:py-3">
      <Button
        layout="link"
        size="small"
        aria-label="Edit"
        onClick={() => setModalDefaultOpen(true)}
      >
        <EditIcon className="md:w-4 md:h-4" aria-hidden="true" />
      </Button>
      <Modal isOpen={modalDefaultOpen} onClose={() => setModalDefaultOpen(false)}>
        <ModalHeader>Edit Pengguna</ModalHeader>
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