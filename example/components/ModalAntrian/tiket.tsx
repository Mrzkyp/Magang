import { Avatar, ModalBody, ModalHeader } from "@roketid/windmill-react-ui";
import React, { forwardRef, useEffect } from "react";

interface ComponentTiketProps {
  // Define your additional props here
  isHide: boolean;
}

const ComponentTiket = forwardRef<HTMLDivElement, ComponentTiketProps>((props, ref) => {
  const { isHide } = props;
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <div ref={ref}>
      {/* Konten yang ingin dicetak */}
      {
        isHide ? (
          <ModalHeader className="text-center xl:mb-4 2xl:mb-6 2xl:text-3xl">Berhasil Mengambil Antrian BPJS</ModalHeader>
        ) : ''
      }
      {
        isHide ? (
          <ModalBody>
            <div className="grid place-items-center ">
              <p className="text-center text-4xl font-semibold 2xl:text-6xl">B </p>
            </div>
          </ModalBody>

        ) : ''
      }
      {/* Anda dapat menambahkan elemen lain untuk dicetak di sini */}
    </div>
  );
});

export default ComponentTiket;

