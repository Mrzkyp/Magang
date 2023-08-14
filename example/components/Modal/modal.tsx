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
  Alert,
} from "@roketid/windmill-react-ui";
import { AddIcon } from "icons";

function ModalComponent() {
  const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false
  );
  const [modalFormOpen, setModalFormOpen] = React.useState(false);

  const openNotificationModal = () => {
    setModalNotificationOpen(true);
  };

  const closeNotificationModal = () => {
    setModalNotificationOpen(false);
  };

  return (
    <div className="px-2 py-1 xl:px-4 xl:py-3 mb-8">
      <Button
        layout="link"
        size="large"
        aria-label="Edit"
        onClick={() => setModalDefaultOpen(true)}
      >
        <AddIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
        <p className="xl:p-2">
          Tambah Loket
        </p>
      </Button>
      <Modal isOpen={modalDefaultOpen} onClose={() => setModalDefaultOpen(false)}>
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
          <Button layout="outline" onClick={() => setModalDefaultOpen(false)}>
            Cancel
          </Button>
          <Button layout="primary" onClick={openNotificationModal}>
            Accept
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalNotificationOpen} onClose={closeNotificationModal}>
        <ModalHeader>Notifikasi</ModalHeader>
        <ModalBody>
          <p>Ini adalah modal notifikasi.</p>
        </ModalBody>
        <ModalFooter>
          <Button layout="primary" onClick={closeNotificationModal}>
            Tutup
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;
