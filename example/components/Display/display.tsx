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
        // content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Setting Display</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="flex flex-col px-8 py-6 bg-blue-300 w-full h-screen">
        <div className="flex flex-row-reverse mb-2 ">
          <div className="h-full px-2">
            <Card>
              <VideoPlayer />
            </Card>
          </div>
          <div className="flex flex-col pr-2 text-center">
            <Card
              colored
              className="text-white bg-blue-500 mb-2 w-full h-36"
            >
              <CardBody>
                <p className="text-left text-xs font-bold text-1xl mb-1 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Selamat Datang di Aplikasi Antrian PT Applimetis
                </p>
                <p className="text-left text-xs sm:text-sm mb:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  Grand Galaxy City, Ruko Rose Garden No.7 Jl. Rose Garden 1,
                  Jaka Setia, Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat,
                  17148
                </p>
              </CardBody>
            </Card>
            <Card colored className="h-20 sm:h-28 md:h-32 lg:h-44 xl:h-60 w-full text-white grid place-items-center bg-green-500">
              <div>
                <p className="text-sm font-bold sm:text-lg md:text-2xl lg:text-4xl ">
                  Antrian Selanjutnya
                </p>
                <p className="text-sm sm:text-xl md:text-3xl lg:text-6xl ">
                  A 01
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex h-full pb-4 ">
          <div className="w-32 pr-2 flex-col sm:w-44 md:w-52 lg:w-64 xl:w-96">
            <Card colored className="h-full grid place-items-center text-white bg-blue-500">
              <CardBody>
                <p className="text-center text-5xl">Loket 1</p>
                <p className="text-center text-6xl">A 01</p>
              </CardBody>
            </Card>
          </div>
          <div className=" w-32 pr-2 flex-col sm:w-44 md:w-52 lg:w-64 xl:w-96">
            <Card colored className="h-full grid place-items-center text-white bg-blue-500">
              <CardBody>
                <p className="text-center text-5xl">Loket 1</p>
                <p className="text-center text-6xl">A 01</p>
              </CardBody>
            </Card>
          </div>
          <div className=" w-32 pr-2 flex-col sm:w-44 md:w-52 lg:w-64 xl:w-96">
            <Card colored className="h-full grid place-items-center text-white bg-blue-500">
              <CardBody>
                <p className="text-center text-5xl">Loket 1</p>
                <p className="text-center text-6xl">A 01</p>
              </CardBody>
            </Card>
          </div>
          <div className=" w-32 pr-2 flex-col sm:w-44 md:w-52 lg:w-64 xl:w-96">
            <Card colored className="h-full grid place-items-center text-white bg-blue-500">
              <CardBody>
                <p className="text-center text-5xl">Loket 1</p>
                <p className="text-center text-6xl">A 01</p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex ml-1 px-4 bg-blue-300 mb-1">
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
