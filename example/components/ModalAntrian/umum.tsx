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

export default function ModalUmum() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setCount(count + 1);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="h-full xl:mb-4 2xl:mb-6  w-full rounded-3xl text-white bg-transparent">
        <p className="text-center xl:text-2xl 2xl:text-5xl">Loket Umum</p>
        <Button className="xl:w-4/5 h-1/5 2xl:w-10/12 2xl:h-3/5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-pink-500 hover:to-red-500 text-white text-xl" onClick={toggleModal}>
          <p className="font-semibold align-middle xl:text-2xl 2xl:text-5xl">klik Disini</p>
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader className="text-center xl:mb-4 2xl:mb-6 2xl:text-3xl">Berhasil Mengambil Antrian Umum</ModalHeader>
        <ModalBody>
          <div className="grid place-items-center">
            <Avatar
              className="hidden mr-3 md:block xl:mb-4"
              size="large"
              src="https://freepngimg.com/download/success/6-2-success-png-image.png"
              alt=""
            />
            <p className="text-center text-4xl 2xl:text-6xl font-semibold">A {count}</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}