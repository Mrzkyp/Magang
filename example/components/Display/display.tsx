import { Button, Card, CardBody } from "@roketid/windmill-react-ui";
import RoundIcon from "../RoundIcon";
import { PeopleIcon } from "icons";
import VideoPlayer from "../Video/video";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Display() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
        <title>Setting Display</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="flex flex-col mb-4 bg-blue-300 h-full">
        <div className="flex md:flex-row-reverse p-2 flex-wrap">
          <div className="md:w-8/12 md:h-4/4 px-3">
            <Card>
              <VideoPlayer />
            </Card>
          </div>
          <div className="flex flex-col gap-y-2 px-2 md:w-1/3 md:h-3/4 text-center">
            <Card
              colored
              className="h-full text-white bg-blue-500"
            >
              <CardBody>
                <p className="text-left text-1xl mb-2 font-semibold">
                  Selamat Datang di Aplikasi Antrian PT Applimetis
                </p>
                <p className="text-left">
                  Grand Galaxy City, Ruko Rose Garden No.7 Jl. Rose Garden 1,
                  Jaka Setia, Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat,
                  17148
                </p>
              </CardBody>
            </Card>
            <Card colored className="xl:h-80 text-white grid place-items-center bg-green-500">
              <div>
                <p className="text-3xl">
                  Antrian Selanjutnya
                </p>
                <p className="text-8xl">
                  A 01
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex md:px-3 xl:mb-2">
          <div className="flex flex-col md:w-3/5 px-1">
            <Card colored className="text-white bg-blue-500">
              <CardBody>
                <p className="text-xl text-center mb-1 font-semibold">Loket 1</p>
                <p className="text-xl text-center mb-1 font-semibold">A 01</p>
              </CardBody>
            </Card>
          </div>
          <div className="flex flex-col md:w-3/5 px-1">
            <Card colored className="text-white bg-blue-500">
              <CardBody>
                <p className="text-xl text-center mb-1 font-semibold">Loket 1</p>
                <p className="text-xl text-center mb-1 font-semibold">A 01</p>
              </CardBody>
            </Card>
          </div>
          <div className="flex flex-col md:w-3/5 px-1">
            <Card colored className="text-white bg-blue-500">
              <CardBody>
                <p className="text-xl text-center mb-1 font-semibold">Loket 1</p>
                <p className="text-xl text-center mb-1 font-semibold">A 01</p>
              </CardBody>
            </Card>
          </div>
          <div className="flex flex-col md:w-3/5 px-1">
            <Card colored className="text-white bg-blue-500">
              <CardBody>
                <p className="text-xl text-center mb-1 font-semibold">Loket 1</p>
                <p className="text-xl text-center mb-1 font-semibold">A 01</p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex xl:ml-1 xl:px-4 bg-blue-300 xl:mb-2">
          <p className="text-center xl:w-32 text-xl">
            <p>{currentTime.toLocaleTimeString()}</p>
          </p>
          <Marquee speed={120} direction="left">
            <p className="xl:w-auto">
              Grand Galaxy City, Ruko Rose Garden No.7 Jl. Rose Garden 1,
              Jaka Setia, Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat,
              17148
            </p>
          </Marquee>
        </div>
      </div>
    </>
  );
}
