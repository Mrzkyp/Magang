import { Avatar, Button, Card, CardBody } from "@roketid/windmill-react-ui";
import Display from "example/components/Display/display";
import VideoPlayer from "example/components/Video/video";
import Link from "next/link";
import React, { useState } from "react";

export default function Mengantri() {
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

      <div className="flex h-screen flex-col mb-4 bg-blue-200">
        <div className="flex md:flex-row-reverse p-2 flex-wrap">
          <div className="flex w-full">
            <header className="w-full">
              <Card colored className="flex md:h-16 justify-between bg-blue-200">
                <CardBody>
                  <Avatar
                    className="align-middle"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2000px-Flag_of_Indonesia.svg.png"
                    alt=""
                    aria-hidden="true"
                  />{"IN"}
                </CardBody>
                <CardBody>
                  <p className="text-xl align-middle">Layanan Panggilan <span className="text-blue-600">+0225 (150) 2225</span></p>
                </CardBody>
                <Link href="/example/login" passHref>
                  <Button size="large">Login Admin</Button>
                </Link>
              </Card>
            </header>
          </div>
        </div>
        <div className="flex md:flex-row-reverse p-2 flex-wrap">
          <div className="flex md:px-60 w-full">
            <Card colored className="flex w-full md:h-44 bg-blue-300">
              <CardBody className="flex">
                <Avatar
                  className="align-middle"
                  src="/assets/img/logo.jpeg"
                  alt=""
                  aria-hidden="true"
                />
                <p className="text-4xl align-middle mb-1 font-semibold">Selamat Datang Di PT.Applimetis Parama Solusi Bekasi</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};