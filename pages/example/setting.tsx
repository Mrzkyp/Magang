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
import { EditIcon, PeopleIcon, TrashIcon } from "icons";

import response, { ITableData } from "utils/demo/tableData";
import Layout from "example/containers/Layout";
// import Link from "next/link";
// import Modal from "example/components/Modal/modal";
// import EditModal from "example/components/Modal/modal.edit";
// import Display from "example/components/Display/display";
// import RoundIcon from "example/components/RoundIcon";
import Loket from "example/components/Modal/modal.loket";
import LoketAdd, { Loket2 } from "example/components/Modal/modal.add";

// make a copy of the data, for the second table
const response2 = response.concat([]);

function Setting() {
  const [pageTable2, setPageTable2] = useState(1);

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
      <div className="m flex flex-col gap-y-2">
        {/* <Display /> */}
        <LoketAdd />
      </div>
      {/* Tabel */}


      {/* Table Pengguna */}
      <SectionTitle>Daftar Pengguna</SectionTitle>
      <TableContainer className="h-full px-4 mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>No Loket</TableCell>
              <TableCell>Penjaga Lokets</TableCell>
              <TableCell>Nama Loket</TableCell>
              <TableCell className="text-center">Aksi</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex xl:m-4 items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.name}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.loket}</span>
                </TableCell>
                <TableCell>
                  <div className="flex xl:w-8 items-center space-x-2">
                    <Loket />
                    <Button
                      layout="link"
                      size="small"
                      aria-label="Delete"
                      onClick={() => {
                        // setSelectedUserId(user.id);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <TrashIcon className="md:w-4 md:h-4" aria-hidden="true" />
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
              alert(`Data dengan Loket ${selectedUserId} telah dihapus`);
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

    </Layout >
  );
}

export default Setting;
