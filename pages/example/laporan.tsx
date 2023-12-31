import React, { useState, useEffect } from "react";

import PageTitle from "example/components/Typography/PageTitle";
import SectionTitle from "example/components/Typography/SectionTitle";
import CTA from "example/components/CTA";
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
} from "@roketid/windmill-react-ui";
import { EditIcon, TrashIcon } from "icons";

import response, { ITableData } from "utils/demo/tableData";
import Layout from "example/containers/Layout";
// make a copy of the data, for the second table
const response2 = response.concat([]);

function Pengguna() {
  const [pageTable1, setPageTable1] = useState(1);
  const [pageTable2, setPageTable2] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState<ITableData[]>([]);
  const [dataTable2, setDataTable2] = useState<ITableData[]>([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChangeTable1(p: number) {
    setPageTable1(p);
  }

  // pagination change control
  function onPageChangeTable2(p: number) {
    setPageTable2(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(
      response.slice(
        (pageTable1 - 1) * resultsPerPage,
        pageTable1 * resultsPerPage
      )
    );
  }, [pageTable1]);

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
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Laporan</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <SectionTitle>Laporan</SectionTitle>
      <TableContainer className="px-4 mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Tanggal</TableCell>
              <TableCell>Waktu</TableCell>
              <TableCell>Penjaga Loket</TableCell>
              <TableCell>Sisa Antrian</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/* <Avatar
                      className="hidden mr-3 md:block"
                      src={user.avatar}
                      alt="User avatar"
                    /> */}
                    <div>
                      <p className="font-semibold">{user.date}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.time}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.name}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.sisaAntrian}</span>
                </TableCell>
                {/* <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="small" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="small" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
