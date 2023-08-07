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

const response2 = response.concat([]);

const resultsPerPage = 10;
const totalResults = response.length;

function Antrian() {
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
      <div className="flex px-4 gap-6 items-center mb-6 md:grid-cols-2 xl:grid-cols-4 mt-4">
        <div className="gap-5 items-center">
          <Card colored className="h-2/4 mb-6 text-white bg-blue-600">
            <CardBody>
              <p className="text-3xl text-center mb-4 font-bold">
                Jumlah Antrian
              </p>
              <p className="text-5xl text-center">36</p>
            </CardBody>
          </Card>
          <Card colored className="gap-5 text-white bg-blue-600">
            <CardBody>
              <p className="text-center text-3xl mb-4 font-bold">
                Sisa Antrian
              </p>
              <p className="text-center text-5xl">25</p>
            </CardBody>
          </Card>
        </div>
        <div className="gap-50 flex items-center">
          <Card colored className="text-white bg-blue-600">
            <CardBody>
              <p className="text-center text-3xl mb-4 font-semibold">
                Antrian Sekarang
              </p>
              <p className="text-center text-6xl">01</p>
            </CardBody>
          </Card>
        </div>
        <div className="gap-50 flex items-center">
          <Card colored className="text-white bg-blue-600">
            <CardBody>
              <p className="mb-4 text-center text-3xl font-semibold">
                Antrian Selanjutnya
              </p>
              <p className="text-center text-6xl">02</p>
            </CardBody>
          </Card>
        </div>
        <div className="md:gap-50 md:flex items-center">
          <Card colored className=" text-white bg-blue-600">
            <CardBody>
              <p className="text-center text-3xl md:mb-4 font-semibold">
                Selamat Datang
              </p>
              <p className="text-center text-6xl">Dzikri</p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Refresh */}
      <div className="md:grid md:px-4 md:mb-4 xl:grid-cols-6">
        <Button layout="link">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="md:mr-0"
          />{" "}
          loading
        </Button>
      </div>

      {/* card data */}
      <div className="px-1">
        <div className="flex mx-2">
          <div className="w-2/3 px-2">
            <div className="w-[200px] px-2 py-4">
              <Card>
                <div className="mb-4 font-semibold">
                  <p className="text-center text-white">Antrian Terambil</p>
                </div>
                <div>
                  <TableContainer className="mb-8">
                    <Table>
                      <TableHeader>
                        <tr>
                          <TableCell>No Antrian</TableCell>
                          <TableCell>Aksi</TableCell>
                        </tr>
                      </TableHeader>
                      <TableBody>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <div className="ml-3">
                              <div className="text-sm font-medium text-blue-900">
                                #1
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            layout="link"
                            size="small"
                            aria-label="Edit"
                            // onClick={() => openEditModal(user)}
                          >
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </TableCell>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Card>
            </div>
          </div>
          <div className="w-2/3 px-2">
            <div className="w-[400px] px-2 py-4">
              <Card>
                <div className="mb-4 font-semibold">
                  <p className="text-center text-white">Antrian Terlewati</p>
                </div>
                <div>
                  <TableContainer className="mb-8">
                    <Table>
                      <TableHeader>
                        <tr>
                          <TableCell>No Antrian</TableCell>
                          <TableCell>Aksi</TableCell>
                        </tr>
                      </TableHeader>
                      <TableBody>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <div className="ml-3">
                              <div className="text-sm font-medium text-blue-900">
                                #1
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            layout="link"
                            size="small"
                            aria-label="Edit"
                            // onClick={() => openEditModal(user)}
                          >
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </TableCell>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Card>
            </div>
          </div>
          <div className="w-2/3 px-2">
            <div className="w-[400px] px-2 py-4">
              <Card>
                <div className="mb-4 font-semibold">
                  <p className="text-center text-white">Status Antrian</p>
                </div>
                <div>
                  <TableContainer className="mb-8">
                    <Table>
                      <TableHeader>
                        <tr>
                          <TableCell>No Antrian</TableCell>
                          <TableCell>Aksi</TableCell>
                        </tr>
                      </TableHeader>
                      <TableBody>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <div className="ml-3">
                              <div className="text-sm font-medium text-blue-900">
                                #1
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            layout="link"
                            size="small"
                            aria-label="Edit"
                            // onClick={() => openEditModal(user)}
                          >
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </TableCell>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Antrian;
