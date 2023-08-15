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

      <div className="flex h-fullsm:h-full xl:h-full 2xl:h-screen flex-col bg-gradient-to-br from-blue-200 to-blue-400 relative">
        <div className="flex flex-row-reverse flex-wrap">
          <div className="flex w-full">
            <header className="w-full 2xl:h-36">
              <Card colored className="flex h-16 2xl:h-24 justify-between bg-transparent">
                <CardBody className="flex">
                  <Avatar
                    className="align-middle"
                    size="large"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2000px-Flag_of_Indonesia.svg.png"
                    alt=""
                    aria-hidden="true"
                  />
                  <p className="xl:ml-2 2xl:ml-4 text-3xl">IN</p>
                </CardBody>
                <CardBody>
                  <p className="text-xl 2xl:text-4xl align-middle">Layanan Panggilan <span className="text-blue-600">+0225 (150) 2225</span></p>
                </CardBody>
                <Link href="/example/login" passHref>
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-pink-500 hover:to-red-500 text-white text-xl">Login Admin
                  </Button>
                </Link>
              </Card>
            </header>
          </div>
        </div>
        <div className="flex flex-row-reverse p-2 flex-wrap">
          <div className="flex px-6 sm:px-16 xl:px-60 2xl:px-80 w-full">
            <Card colored className="flex flex-col w-full mb-4 h-48 2xl:h-72 bg-blue-300 rounded-bl-full">
              <CardBody className="flex">
                <Avatar
                  className="align-middle"
                  size="large"
                  src="/assets/img/logo.jpeg"
                  alt=""
                  aria-hidden="true"
                />
                <p className="text-lg 2xl:text-5xl xl:text-3xl 2xl:mb-7 font-semibold">Selamat Datang Di PT.Applimetis Parama Solusi Bekasi</p>
              </CardBody>
              <CardBody>
                <p className="w-full 2xl:text-3xl xl:text-xl text-sm pl-32">Kami adalah Tim Profesional yang terdiri dari Pengembang berbakat untuk membuat Solusi Perangkat Lunak yang Komprehensif</p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex gap-20 flex-row-reverse p-2 2xl:p-10 flex-wrap">
          <div className="w-2/5 h-3/4 2xl:h-5/6 2xl:w-5/12">
            <div className="flex px-4 gap-8 items-center 2xl:grid-cols-4 grid-cols-2">
              <div className="gap-5 items-center">
                <img
                  className="xl:h-52 xl:w-44 2xl:h-60 2xl:w-52"
                  src="/assets/img/medical1.png"
                  alt=""></img>
                <img
                  className="xl:h-52 xl:w-44 2xl:h-60 2xl:w-52"
                  src="/assets/img/medical2.png"
                  alt=""></img>
              </div>
              <div className="gap-50 flex items-center">
                <img
                  className="xl:h-52 xl:w-44 2xl:h-60 2xl:w-52"
                  src="/assets/img/medical3.png"
                  alt=""></img>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:gap-y-2 gap-y-4 xl:px-3 xl:w-2/4 xl:mb-40 xl:h-3/4 text-center">
            <div className="h-full mb-4 rounded-3xl text-white bg-transparent">
              <p className="text-center xl:text-4xl 2xl:text-5xl font-semibold">
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