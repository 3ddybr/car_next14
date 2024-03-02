'use client'
// import { ChangeEvent, FormEvent, useState } from 'react'

// import ModalImgTeste from './components/ModalImgTeste'

import { VehicleRegistrationForm } from './components/VehicleRegistrationForm'
import { VeiculosContainer } from './styles'
// import { useStorage } from '@/app/(app)/hooks/useStorage'
// import Image from 'next/image'
// import { StepsComponent } from './components/StepsComponent'

export default function Veiculos() {
  // const [open, setOpen] = useState(false)
  // const [files, setFiles] = useState<FileList | null>(null)
  // const { startUpload, progress, url } = useStorage()
  // const showModal = () => {
  //   setOpen(!open)
  // }

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFiles(e.target.files)
  //     // setSelectedFile(e.target.files[0])
  //   }
  // }

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   if (files) {
  //     for (let i = 0; i < files.length; i++) {
  //       startUpload(files[i])
  //     }
  //     setFiles(null)
  //   }
  // }

  return (
    <VeiculosContainer>
      {/* <StepsComponent /> */}
      <VehicleRegistrationForm />

      {/* <button onClick={() => showModal()}>Chamar</button> */}

      {/* {open && (
        <ModalImgTeste isOpenModal={true}>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                multiple
                name="image"
                onChange={handleFileChange}
              />
              <button
                type="submit"
                className={`${Boolean(progress) && 'loading'}`}
                disabled={!files}
              >
                Enviar
              </button>
            </form>
            {url &&
              url.map((url) => (
                <Image
                  key={url + 1}
                  src={url}
                  width={100}
                  height={100}
                  alt={url.length.toString()}
                />
              ))}
          </div>
        </ModalImgTeste>
      )} */}
    </VeiculosContainer>
  )
}
