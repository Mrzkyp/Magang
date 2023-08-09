import React, { useState, useEffect } from "react";
import ConfirmationModal from "example/components/ConfirmationModal/confirmation.modal";
// import PageTitle from "example/components/Typography/PageTitle";
import SectionTitle from "example/components/Typography/SectionTitle";
// import CTA from "example/components/CTA";
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
  Card,
  CardBody,
} from "@roketid/windmill-react-ui";
import { EditIcon, TrashIcon } from "icons";

import response, { ITableData } from "utils/demo/tableData";
import Layout from "example/containers/Layout";
import Link from "next/link";
import Modal from "example/components/Modal/modal";
// make a copy of the data, for the second table
const response2 = response.concat([]);


export default function Tabel() {
  const [pageTable2, setPageTable2] = useState(1);

  // setup data for every table
  // const [dataTable1, setDataTable1] = useState<ITableData[]>([]);
  const [dataTable2, setDataTable2] = useState<ITableData[]>([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  //Delete Pengguna
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  // pagination change control
  // function onPageChangeTable1(p: number) {
  //   setPageTable1(p);
  // }

  // pagination change control
  function onPageChangeTable2(p: number) {
    setPageTable2(p);
  }

  //Edit Pengguna
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ITableData | null>(null);

  // Fungsi untuk membuka modal "Edit" dan mengatur data pengguna yang akan diedit
  const openEditModal = (user: ITableData) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  // Fungsi untuk menutup modal "Edit"
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  //edit Pengguna
  const saveEdit = () => {
    // Implementasi aksi menyimpan perubahan disini, misalnya dengan memanggil fungsi saveData(selectedUser)
    alert(`Data dengan ID ${selectedUser?.id} telah diubah`);
    closeEditModal();
  };

  // on page change, load new sliced data
  // here you would make another server request for new data
  // useEffect(() => {
  //   setDataTable1(
  //     response.slice(
  //       (pageTable1 - 1) * resultsPerPage,
  //       pageTable1 * resultsPerPage
  //     )
  //   );
  // }, [pageTable1]);

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(
      response2.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage
      )
    );
  }, [pageTable2]);
  return (
    <div className="flex xl:ml-0 xl:px-3">
      <div className="flex flex-col xl:w-3/5 px-1">
        <Card colored className="h-full text-white bg-blue-200">
          <CardBody>
            <p className="text-center text-black">Antrian Terambil</p>
            <div className="flex">
              <TableContainer>
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>No Antrian</TableCell>
                      <TableCell className="text-center">Aksi</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {dataTable2.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <p className="font-semibold">{user.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex xl:w-24 items-center space-x-2">
                            <Button
                              layout="link"
                              size="small"
                              aria-label="Edit"
                            // onClick={() => openEditModal(user)}
                            >
                              <EditIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                            </Button>
                            <Button
                              layout="link"
                              size="small"
                              aria-label="Delete"
                              onClick={() => {
                                // setSelectedUserId(user.id);
                                // setIsDeleteModalOpen(true);
                              }}
                            >
                              <TrashIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                            </Button>
                            <Button
                              layout="link"
                              size="small"
                              aria-label="Edit"
                            // onClick={() => openEditModal(user)}
                            >
                              <EditIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col xl:w-3/5 px-1">
        <Card colored className="h-full text-white bg-blue-200">
          <CardBody>
            <p className="text-center text-black">Antrian Terlewati</p>
            <div className="flex">
              <TableContainer>
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>No Antrian</TableCell>
                      <TableCell className="text-center">Aksi</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {dataTable2.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <p className="font-semibold">{user.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex xl:w-24 items-center space-x-2">
                            <Button
                              layout="link"
                              size="small"
                              aria-label="Edit"
                            // onClick={() => openEditModal(user)}
                            >
                              <EditIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                            </Button>
                            <Button
                              layout="link"
                              size="small"
                              aria-label="Delete"
                              onClick={() => {
                                // setSelectedUserId(user.id);
                                // setIsDeleteModalOpen(true);
                              }}
                            >
                              <TrashIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                            </Button>
                            <Button
                              layout="link"
                              size="small"
                              aria-label="Delete"
                              onClick={() => {
                                // setSelectedUserId(user.id);
                                // setIsDeleteModalOpen(true);
                              }}
                            >
                              <TrashIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col xl:w-3/5 px-1">
        <Card colored className="h-full text-white bg-blue-200">
          <CardBody>
            <p className="text-center text-black">Status Antrian</p>
            <div className="flex">
              <TableContainer>
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>No Antrian</TableCell>
                      <TableCell className="text-start">Status</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    {dataTable2.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <p className="font-semibold">{user.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <p className="xl:h-6 font-semibold">{user.status}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </CardBody>
        </Card>
      </div>
    </div >
  )
}