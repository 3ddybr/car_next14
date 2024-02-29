'use client'
import { ChangeEvent, FormEvent, useState } from 'react'

import ModalImgTeste from './components/ModalImgTeste'

// import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'

import { VehicleRegistrationForm } from './components/VehicleRegistrationForm'
import { VeiculosContainer } from './styles'
import { useStorage } from '@/app/(app)/hooks/useStorage'
import Image from 'next/image'

export default function Veiculos() {
  const [open, setOpen] = useState(false)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { startUpload, progress, url } = useStorage()
  // const [progress, setProgress] = useState(0)
  // const [urls, setUrls] = useState<string[]>([])

  // const renderTeste = () => {
  //   if (url) {
  //     setUrls([...urls, url])
  //   }
  // }
  // console.log('Console em url: ', url)

  const [files, setFiles] = useState<FileList | null>(null)
  const showModal = () => {
    setOpen(!open)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files)
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (files) {
      for (let i = 0; i < files.length; i++) {
        startUpload(files[i])
      }

      setFiles(null)
      setSelectedFile(null)
    }
    // if (selectedFile) {
    //   startUpload(selectedFile)
    // }
    // setSelectedFile(null)
  }

  return (
    <VeiculosContainer>
      <VehicleRegistrationForm />

      <button onClick={() => showModal()}>Chamar</button>

      {open && (
        <ModalImgTeste isOpenModal={open}>
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
                disabled={!selectedFile}
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
      )}
    </VeiculosContainer>
  )
}

// const metadata = {
//   contentType: 'image/jpeg',
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const handleUpload = async () => {
// for (let index = 0; index < images.length; index++) {
//   const randomName = createId()
//   console.log('Console em randomName: ', randomName)
//   const file = images[index]
//   const storageRef = ref(storage, `imagesCars/${randomName}`)
//   await uploadBytes(storageRef, file, metadata)
// }
// const storageRef = ref(storage, `imagesCars/${randomName}`)
// await uploadBytes(storageRef, images, metadata)
// }
