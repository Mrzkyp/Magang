import React, { useState, useEffect } from "react";

import InfoCard from "example/components/Cards/InfoCard";
import ChartCard from "example/components/Chart/ChartCard";
import PageTitle from "example/components/Typography/PageTitle";
import RoundIcon from "example/components/RoundIcon";
import Layout from "example/containers/Layout";
import response, { ITableData } from "utils/demo/tableData";
import { PeopleIcon } from "icons";

import {
  Card,
  CardBody,
  Button,
} from "@roketid/windmill-react-ui";

import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Link from "next/link";

function Dashboard() {
  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [page, setPage] = useState(1);
  const [data, setData] = useState<ITableData[]>([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p: number) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <Layout>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* <!-- Cards --> */}
      <div className="gap-x-4 flex mb-4 px-2 xl:px-4">
        <div className="grid w-3/4 h-13 xl:h-48">
          <Card colored className="text-white bg-blue-600">
            <CardBody>
              <p className="text-xl xl:text-4xl mb-4 font-semibold">
                Selamat Datang di Aplikasi Antrian Laboratorium
              </p>
              <Link href="/example/antrian" passHref>
                <Button size="large">Lihat Antrian</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div className="grid w-1/4 h-13 xl:h-48">
          <Card colored className="text-white bg-blue-600">
            <CardBody>
              <p className="mb-4 text-center text-4xl font-semibold">Halo !!</p>
              <p className="mb-4 text-center text-6xl">Loket 1</p>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="grid px-4 gap-2 xl:grid-cols-7">
        <InfoCard title="Aktif">
          {/* @ts-ignore */}
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Tidak Aktif">
          {/* @ts-ignore */}
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-red-500 dark:text-red-100"
            bgColorClass="bg-red-100 dark:bg-red-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Istirahat">
          {/* @ts-ignore */}
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-yellow-500 dark:text-yellow-100"
            bgColorClass="bg-yellow-100 dark:bg-yellow-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <PageTitle>LOKET</PageTitle>

      <div className="grid w-auto xl:px-4 xl:gap-4 xl:grid-cols-2">
        <div className="w-auto h-auto">
          <p className="text-center text-xl text-blue-800"> Loket 1</p>
          <img
            className="rounded-full scale-50"
            src="/assets/img/Gear5.jpeg"
            alt=""
          />
        </div>
        <div className="w-auto h-auto">
          <p className="text-center text-xl text-blue-800"> Loket 1</p>
          <img
            className="rounded-full scale-50"
            src="/assets/img/Gear5.jpeg"
            alt=""
          />
        </div>
        <div className="w-auto h-auto">
          <p className="text-center text-xl text-blue-800"> Loket 1</p>
          <img
            className="rounded-full scale-50"
            src="/assets/img/Gear5.jpeg"
            alt=""
          />
        </div>
        <div className="w-auto h-auto">
          <p className="text-center text-xl text-blue-800"> Loket 1</p>
          <img
            className="rounded-full scale-50"
            src="/assets/img/Gear5.jpeg"
            alt=""
          />
        </div>
        <div className="w-auto h-auto">
          <p className="text-center text-xl text-blue-800"> Loket 1</p>
          <img
            className="rounded-full scale-50"
            src="/assets/img/Gear5.jpeg"
            alt=""
          />
        </div>
        <div className="w-auto h-auto">
          <p className="text-center text-xl text-blue-800"> Loket 1</p>
          <img
            className="rounded-full scale-50"
            src="/assets/img/Gear5.jpeg"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
