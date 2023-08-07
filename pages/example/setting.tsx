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
import Tabel from "example/components/Table/table";
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
    {/* Tabel */}
    <Tabel />
    </Layout>
  );
}

export default Setting;
