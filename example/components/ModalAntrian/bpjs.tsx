import React, { useEffect, useRef, useState } from "react";
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
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import ComponentTiket from "./tiket";

function ModalBPJS() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  // let componentRef = useRef<HTMLElement | null>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current || null,
  });


  const closeModal = () => {
    setIsOpen(false);
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setCount(count + 1);
  };

  return (
    <div>
      <div className="h-full xl:mb-8 w-full rounded-3xl text-white bg-transparent">
        <p className="text-center xl:text-2xl 2xl:text-5xl">Loket BPJS</p>
        <Button className="xl:w-4/5 h-1/5 2xl:w-10/12 2xl:h-3/5 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-pink-500 hover:to-red-500 text-white text-xl" onClick={handlePrint}>
          <p className="font-semibold align-middle xl:text-2xl 2xl:text-5xl">klik Disini</p>
        </Button>
      </div>
      <ComponentTiket ref={componentRef} isHide={isOpen} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader className="text-center xl:mb-4 2xl:mb-6 2xl:text-3xl">Berhasil Mengambil Antrian BPJS</ModalHeader>
        <ModalBody>
          <div className="grid place-items-center ">
            <Avatar
              className="hidden mr-3 md:block xl:mb-4"
              size="large"
              src="https://freepngimg.com/download/success/6-2-success-png-image.png"
              alt=""
            />
            <p className="text-center text-4xl font-semibold 2xl:text-6xl">B {count}</p>
            <div>
              {/* <ComponentTiket ref={(el: React.MutableRefObject<HTMLElement | null>) => (componentRef = el)} /> */}

              <Button className="grid place-items-center mt-2 2xl:mt-3" onClick={handlePrint}><p className="2xl:text-2xl"> Cetak !!! </p></Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalBPJS;
