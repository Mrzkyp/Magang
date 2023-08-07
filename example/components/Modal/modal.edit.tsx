import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
} from "@roketid/windmill-react-ui";
import { ITableData } from "utils/demo/tableData";

function ModalComponent() {
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

  return (
    <div className="mt-4">
      <form>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
            <ModalBody>
              {selectedUser && (
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <Label>
                    <span>Nama</span>
                    <Input className="mt-1" value={selectedUser.name} />
                  </Label>
                  <Label className="mt-4">
                    <span>Email</span>
                    <Input className="mt-1" value={selectedUser.email} />
                  </Label>
                  {/* Tambahkan input dan label lain sesuai dengan data pengguna yang akan di-edit */}
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button layout="outline" onClick={closeEditModal}>
                Batal
              </Button>
              <Button layout="primary" onClick={saveEdit}>
                Simpan
              </Button>
            </ModalFooter>
          </Modal>
          ;
        </div>
      </form>
    </div>
  );
}

export default ModalComponent;
