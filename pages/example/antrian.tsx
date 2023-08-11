import InfoCard from "example/components/Cards/InfoCard";
import Layout from "example/containers/Layout";
import RoundIcon from "example/components/RoundIcon";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon, EditIcon } from "icons";
import { Card, CardBody } from "@roketid/windmill-react-ui";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Select,
  Textarea,
} from "@roketid/windmill-react-ui";
import { useEffect, useState } from "react";
import response, { ITableData } from "utils/demo/tableData";
import SectionTitle from "example/components/Typography/SectionTitle";
import Tabel from "example/components/Table/table.antrian";


function Antrian() {

  const handleRefreshClick = () => {
    window.location.reload();
  };

  const response2 = response.concat([]);

  const resultsPerPage = 10;
  const totalResults = response.length;

  return (
    <Layout>
      {/* ini nama di atas itu */}
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Antrian</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* isi card */}
      <div className="flex px-3 gap-2 mb-4 grid-cols-2 xl:px-3 xl:gap-6 items-center xl:mb-4 xl:grid-cols-4 xl:mt-4">
        <div className="xl:gap-5 items-center">
          <Card colored className="h-2/4 xl:mb-6 mb-2 text-white bg-blue-300">
            <CardBody>
              <p className="text-sm xl:text-2xl text-center mb-2 xl:mb-4 font-bold">
                Jumlah Antrian
              </p>
              <p className="text-LG xl:text-5xl text-center">36</p>
            </CardBody>
          </Card>
          <Card colored className="xl:gap-5 text-white bg-blue-300">
            <CardBody>
              <p className="text-center text-sm xl:text-2xl xl:mb-4 font-bold">
                Sisa Antrian
              </p>
              <p className="text-center text-lg xl:text-5xl">25</p>
            </CardBody>
          </Card>
        </div>
        <div className="xl:gap-52 flex items-center">
          <Card colored className="text-white bg-blue-300">
            <CardBody>
              <p className="text-center text-sm xl:text-3xl mb-2 xl:mb-4 font-semibold">
                Antrian Sekarang
              </p>
              <p className="text-center text-lg xl:text-6xl">01</p>
            </CardBody>
          </Card>
        </div>
        <div className="xl:gap-52 flex items-center">
          <Card colored className="text-white bg-blue-300">
            <CardBody>
              <p className="mb-2 xl:mb-4 text-center text-sm xl:text-3xl font-semibold">
                Antrian Selanjutnya
              </p>
              <p className="text-center text-lg xl:text-6xl">02</p>
            </CardBody>
          </Card>
        </div>
        <div className="xl:gap-52 flex items-center">
          <Card colored className=" text-white bg-blue-300">
            <CardBody>
              <p className="text-center text-sm mb-2 xl:text-3xl xl:mb-4 font-semibold">
                Selamat Datang
              </p>
              <p className="text-center text-lg xl:text-6xl">Dzikri</p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Refresh */}
      <div className="grid px-2 xl:px-5 mb-2 xl:mb-4 grid-cols-7 xl:grid-flow-col-8">

        <Card colored className="flex md:h-16 xl:w-32 justify-between bg-transparent">
          <CardBody className="flex">
            <Avatar onClick={handleRefreshClick}
              className="hidden md:block scale:50 xl:scale-75 items-center"
              size="large"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqfM-tI_LxAPrZRmxVTw92XxKAxg0N-3-zg&usqp=CAU"
              alt=""
            /><p className="text-center items-center ml-2">Refresh</p>
          </CardBody>
        </Card>
      </div>
      {/* card data */}
      <Tabel />
    </Layout>
  );
}

export default Antrian;
