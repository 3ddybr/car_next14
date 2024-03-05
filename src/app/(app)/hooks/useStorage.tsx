'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { v4 as createId } from 'uuid'
import { storage } from '../../services/firebase'

type ImageProps = {
  imgRefFullPath: string
  imgUrl: string
}

interface StorageProviderProps {
  // quando as props vao receber qualquer conteúdo do tipo react usa-se ReactNode
  children: ReactNode
}

interface StorageContextProps {
  progress: number
  error: Error | null
  startUpload: (file: File) => void
  deleteImg: (refImg: string | undefined) => void
  refImage: ImageProps[]
  setRefImage: (refImage: ImageProps[]) => void
}

const StorageContext = createContext<StorageContextProps>(
  {} as StorageContextProps,
)

export const StorageProvider = ({ children }: StorageProviderProps) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<Error | null>(null)
  // const [url, setUrl] = useState<string[]>([])
  const [refImage, setRefImage] = useState<ImageProps[] | []>([])

  function startUpload(file: File) {
    if (!file) {
      return
    }
    const fileId = createId()
    const formatFile = file.type.split('/')[1]

    const storageRef = ref(storage, `imagesCars/${fileId}.${formatFile}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress1 =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress1)
      },
      (error) => {
        setError(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const refImg = {
            imgRefFullPath: uploadTask.snapshot.ref.fullPath,
            imgUrl: downloadURL,
          }
          const progress2 =
            (uploadTask.snapshot.bytesTransferred /
              uploadTask.snapshot.totalBytes) *
            100
          // setUrl((prevState) => [...prevState, downloadURL])
          setRefImage((prevState) => [...prevState, refImg])
          setProgress(progress2)
          // console.log('Upload is ' + progress + '% done')
          // console.log(uploadTask.snapshot.)
        })
      },
    )
  }
  // console.log('ImagRef', progress)
  const deleteImg = async (refImg: string | undefined) => {
    const imgRef = ref(storage, refImg)

    await deleteObject(imgRef)
      .then(() => {
        const refFilter = refImage.filter(
          (ref) => ref.imgRefFullPath !== refImg,
        )

        setRefImage(refFilter)
        // File deleted successfully
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  return (
    <StorageContext.Provider
      value={{ progress, error, startUpload, deleteImg, refImage, setRefImage }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage() {
  const context = useContext(StorageContext)
  return context
}
