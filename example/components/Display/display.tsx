import { Button, Card, CardBody } from "@roketid/windmill-react-ui";
import RoundIcon from "../RoundIcon";
import { PeopleIcon } from "icons";
import VideoPlayer from "../Video/video";

export default function Display() {
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

      <div className="flex flex-col mb-4">
        <div className="flex md:flex-row-reverse p-2 flex-wrap">
          <div className="md:w-8/12 md:h-4/4">
            <Card>
              <VideoPlayer />
            </Card>
          </div>
          <div className="flex flex-col gap-y-2 px-3 md:w-1/3 md:h-3/4 text-center">
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
            <Card colored className="h-full text-black bg-blue-500">
              <CardBody>
                <p className="text-center text-8xl">
                  20.00 WIB
                </p>
              </CardBody>
            </Card>
            <Card colored className="h-full text-white bg-green-500">
              <CardBody>
                <p className="text-center text-3xl">
                  Antrian Selanjutnya
                </p>
                <p className="text-center text-6xl">
                  A 01
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="flex md:ml-3 md:px-1">
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
      </div>
    </>
  );
}
