import {
  Button,
  Card,
  CardBody,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
} from "@roketid/windmill-react-ui";
import Display from "example/components/Display/display";
import RoundIcon from "example/components/RoundIcon";
import Layout from "example/containers/Layout";
import { EditIcon, PeopleIcon } from "icons";

function Setting() {
  return (
    <Layout>
      <div className="md:h-full flex flex-col gap-y-2">
        <Display />
        <div className="md:grid px-4 gap-4 mb-4 xl:grid-cols-6">
          <Button layout="link">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-0"
            />{" "}
            Tambah Loket
          </Button>
        </div>
      </div>
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

export default Setting;
