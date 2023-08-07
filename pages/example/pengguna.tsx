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
} from "@roketid/windmill-react-ui";
import { EditIcon, TrashIcon } from "icons";

import response, { ITableData } from "utils/demo/tableData";
import Layout from "example/containers/Layout";
import Link from "next/link";
import Modal from "example/components/Modal/modal";
// make a copy of the data, for the second table
const response2 = response.concat([]);

function Pengguna() {
  // const [pageTable1, setPageTable1] = useState(1);
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
    <Layout>
      {/* Nama di Website nya */}
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Pengguna</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* Tambah Data */}
      <div>
        <div>
          <Modal />
        </div>
      </div>

      {/* Table Pengguna */}
      <SectionTitle>Daftar Pengguna</SectionTitle>
      <TableContainer className="px-4 mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Nama</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={user.avatar}
                      alt="User avatar"
                    />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.email}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button
                      layout="link"
                      size="small"
                      aria-label="Edit"
                      onClick={() => openEditModal(user)}
                    >
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button
                      layout="link"
                      size="small"
                      aria-label="Delete"
                      onClick={() => {
                        // setSelectedUserId(user.id);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <ConfirmationModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={() => {
              // Implementasi aksi penghapusan data disini, misalnya dengan memanggil fungsi deleteData(selectedUserId)
              alert(`Data dengan ID ${selectedUserId} telah dihapus`);
              setIsDeleteModalOpen(false);
            }}
          />
        </Table>

        {/* Pagination Table */}
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </Layout>
  );
}

export default Pengguna;
