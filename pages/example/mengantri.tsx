import { Alert, Avatar, Button, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from "@roketid/windmill-react-ui";
import ModalBPJS from "example/components/ModalAntrian/bpjs";
import ModalUmum from "example/components/ModalAntrian/umum";
import RoundIcon from "example/components/RoundIcon";
import { SuccessIcon } from "icons";
import Link from "next/link";
import React, { useState } from "react";

export default function Mengantri() {

  // const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   setShowAlert(!showAlert);
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Mengantri</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="xl:flex xl:h-full xl:flex-col xl:bg-gradient-to-br from-blue-200 to-blue-400 relative">
        <div className="flex md:flex-row-reverse flex-wrap">
          <div className="flex w-full">
            <header className="w-full">
              <Card colored className="flex md:h-16 justify-between bg-transparent">
                <CardBody className="flex">
                  <Avatar
                    className="align-middle"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2000px-Flag_of_Indonesia.svg.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <p className="xl:ml-2">IN</p>
                </CardBody>
                <CardBody>
                  <p className="text-xl align-middle">Layanan Panggilan <span className="text-blue-600">+0225 (150) 2225</span></p>
                </CardBody>
                <Link href="/example/login" passHref>
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-pink-500 hover:to-red-500 text-white text-xl">Login Admin
                  </Button>
                </Link>
              </Card>
            </header>
          </div>
        </div>
        <div className="flex md:flex-row-reverse p-2 flex-wrap">
          <div className="flex md:px-60 w-full">
            <Card colored className="flex flex-col md:w-full xl:mb-4 md:h-48 bg-blue-300 md:rounded-bl-full">
              <CardBody className="flex">
                <Avatar
                  className="align-middle"
                  src="/assets/img/logo.jpeg"
                  alt=""
                  aria-hidden="true"
                />
                <p className="text-4xl font-semibold">Selamat Datang Di PT.Applimetis Parama Solusi Bekasi</p>
              </CardBody>
              <CardBody>
                <p className="md:w-full md:pl-32">Kami adalah Tim Profesional yang terdiri dari Pengembang berbakat untuk membuat Solusi Perangkat Lunak yang Komprehensif</p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex gap-20 md:flex-row-reverse p-2 flex-wrap">
          <div className="md:w-2/5 md:h-3/4">
            <div className="flex px-4 gap-8 items-center md:grid-cols-2 xl:grid-cols-4">
              <div className="gap-5 items-center">
                <img
                  className="xl:h-52 xl:w-44"
                  src="/assets/img/medical1.png"
                  alt=""></img>
                <img
                  className="xl:h-52 xl:w-44"
                  src="/assets/img/medical2.png"
                  alt=""></img>
              </div>
              <div className="gap-50 flex items-center">
                <img
                  className="xl:h-52 xl:w-44"
                  src="/assets/img/medical3.png"
                  alt=""></img>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 px-3 md:w-2/4 md:mb-40 md:h-3/4 text-center">
            <div className="md:h-full xl:mb-8 rounded-3xl text-white bg-transparent">
              <p className="text-center text-4xl xl:mt-2 font-semibold">
                Silahkan Ambil Antrian
              </p>
            </div>
            <ModalUmum />
            <ModalBPJS />
          </div>
        </div>

        {/* {showAlert && (
          <div
            aria-modal="true"
            role="dialog"
            className="absolute z-10 w-full h-full flex justify-center items-center">
            <Alert
              className="fixed inset-0"
              type="success" onClose={toggleAlert}>
              Ini adalah contoh pesan alert. <strong>Sukses!</strong>
            </Alert>
          </div>
        )} */}
      </div >


    </>
  );
};