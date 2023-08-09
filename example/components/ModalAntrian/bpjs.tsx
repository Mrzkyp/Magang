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
  Avatar,
} from "@roketid/windmill-react-ui";

export default function ModalBPJS() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="h-full xl:mb-8 w-full rounded-3xl text-white bg-transparent">
        <p className="text-center text-2xl">Loket BPJS</p>
        <Button className="md:w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-pink-500 hover:to-red-500 text-white text-xl" onClick={toggleModal}>
          <p className="font-semibold align-middle text-2xl">klik Disini</p>
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <ModalHeader className="text-center xl:mb-4">Berhasil Mengambil Antrian BPJS</ModalHeader>
        <ModalBody>
          <div className="grid place-items-center">
            <Avatar
              className="hidden mr-3 md:block xl:mb-4"
              size="large"
              src="https://freepngimg.com/download/success/6-2-success-png-image.png"
              alt=""
            />
            <p className="text-center text-4xl font-semibold">A 01</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}