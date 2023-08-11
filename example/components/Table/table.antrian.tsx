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
  TableContainer,
  Button,
  Card,
  CardBody,
} from "@roketid/windmill-react-ui";
import { ArrowRight, CallIcon, CloseIcon, NextIcon, SuccessIcon, } from "icons";

import response, { ITableData } from "utils/demo/tableData";
// make a copy of the data, for the second table
const response2 = response.concat([]);
interface QueueItem {
  id: number;
  name: string;
}


export default function Tabel() {
  const [pageTable2, setPageTable2] = useState(1);
  const [dataTable2, setDataTable2] = useState<ITableData[]>([]);
  const resultsPerPage = 10;
  const totalResults = response.length;

  //Delete Pengguna
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  // pagination change control
  // function onPageChangeTable2(p: number) {
  //   setPageTable2(p);
  // }

  //Edit Pengguna
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ITableData | null>(null);
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

  useEffect(() => {
    setDataTable2(
      response2.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage
      )
    );
  }, [pageTable2]);

  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [currentCustomer, setCurrentCustomer] = useState<QueueItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const enqueueCustomer = () => {
    const newCustomer: QueueItem = {
      id: queue.length + 1,
      name: `Pelanggan ${queue.length + 1}`,
    };
    setQueue((prevQueue) => [...prevQueue, newCustomer]);
  };

  const dequeueCustomer = () => {
    if (queue.length === 0) {
      alert("Antrian kosong");
      return;
    }

    const [dequeuedCustomer, ...remainingQueue] = queue;
    setCurrentCustomer(dequeuedCustomer);
    setQueue(remainingQueue);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCustomer(null);
  };

  return (
    <div className="flex">
      <div className="w-3/5 px-2">
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
                        >
                          <CallIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          layout="link"
                          size="small"
                          aria-label="Delete"
                          onClick={() => {
                          }}
                        >
                          <NextIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                        </Button>
                        <Button
                          layout="link"
                          size="small"
                          aria-label="Edit"
                        >
                          <ArrowRight className="xl:w-4 xl:h-4" aria-hidden="true" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="w-3/5">
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
                          <CallIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
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
                          <SuccessIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
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
                          <CloseIcon className="xl:w-4 xl:h-4" aria-hidden="true" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="w-3/5 px-2">
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
      </div>
    </div >
  )
}