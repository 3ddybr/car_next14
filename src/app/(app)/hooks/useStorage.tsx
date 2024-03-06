'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { v4 as createId } from 'uuid'
import { firestoreDB, storage } from '../../services/firebase'
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  query,
} from 'firebase/firestore'

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
  getAllVehicles: () => void
  docAllVehicles: DocumentData[] | []
  getLimitVehicles: (quant: number) => void
  docLimitVehicles: DocumentData[] | []
}

const StorageContext = createContext<StorageContextProps>(
  {} as StorageContextProps,
)

export const StorageProvider = ({ children }: StorageProviderProps) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<Error | null>(null)
  const [refImage, setRefImage] = useState<ImageProps[] | []>([])
  const [docAllVehicles, setDocAllVehicles] = useState<DocumentData[] | []>([])
  const [docLimitVehicles, setDocLimitVehicles] = useState<DocumentData[] | []>(
    [],
  )
  // Insert images to firebase and get the image url.
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
  // deletar imagem da lista de images e do firebase
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

  // getAll Vehicles
  const getAllVehicles = async () => {
    const vehiclesCol = collection(firestoreDB, 'vehicles')
    const vehiclesSnapshot = await getDocs(vehiclesCol)
    const vehiclesList = vehiclesSnapshot.docs.map((doc) => doc.data())
    setDocAllVehicles(vehiclesList)
  }

  // get limit Vehicles
  const getLimitVehicles = async (quant: number) => {
    const vehiclesCol = collection(firestoreDB, 'vehicles')
    const q = query(vehiclesCol, limit(quant))
    const vehiclesSnapshot = await getDocs(q)
    const vehiclesList = vehiclesSnapshot.docs.map((doc) => doc.data())
    setDocLimitVehicles(vehiclesList)
  }

  return (
    <StorageContext.Provider
      value={{
        progress,
        error,
        startUpload,
        deleteImg,
        refImage,
        setRefImage,
        getAllVehicles,
        docAllVehicles,
        docLimitVehicles,
        getLimitVehicles,
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export function useStorage() {
  const context = useContext(StorageContext)
  return context
}
