import { useState } from 'react'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { v4 as createId } from 'uuid'
import { firestoreDB, storage } from '../../services/firebase'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
} from 'firebase/firestore'
import { VehiclesDataProps } from '@/app/types/vehiclesDataProps'
import { useStorage } from '../contexts/useStorage'

type ImageProps = {
  imgRefFullPath: string
  imgUrl: string
}

export function useFirebase() {
  const [progress, setProgress] = useState(0)
  // const [] = useState<ImageProps[]>([])
  const { refImage, updateRefImages, deleteImgContext } = useStorage()

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
        return progress1
      },
      (error) => {
        console.log('Error on upload image', error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const refImg: ImageProps = {
            imgRefFullPath: uploadTask.snapshot.ref.fullPath,
            imgUrl: downloadURL,
          }
          const progress2 =
            (uploadTask.snapshot.bytesTransferred /
              uploadTask.snapshot.totalBytes) *
            100
          // setRefImage((prevState: ImageProps[]) => [...prevState, refImg])
          // setRefImage((prevState) => [...prevState, refImg])
          updateRefImages(refImg)
          // setRefImage(refImg)
          setProgress(progress2)
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

        deleteImgContext(refFilter)
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
    return vehiclesList
  }

  // getVehicles por id
  const getVehicle = async (id: string) => {
    const vehiclesCol = doc(firestoreDB, 'vehicles', id)
    const vehiclesSnapshot = await getDoc(vehiclesCol)
    const data = { ...vehiclesSnapshot.data(), id: vehiclesSnapshot.id }
    return data as VehiclesDataProps
  }

  // get limit Vehicles
  const getLimitVehicles = async (quant: number) => {
    const vehiclesCol = collection(firestoreDB, 'vehicles')
    const q = query(vehiclesCol, limit(quant))
    const vehiclesSnapshot = await getDocs(q)
    const vehiclesList = vehiclesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as VehiclesDataProps[]

    // const arraysJuntos = vehiclesList.map((array) => {
    //   return array.reduce((obj1, obj2) => {
    //     return { ...obj1, ...obj2 }
    //   }, {})
    // }) as VehiclesDataProps[]

    return vehiclesList
  }

  const InsertVehicle = async (data: object) => {
    const vehiclesCol = collection(firestoreDB, 'vehicles')
    const docRef = await addDoc(vehiclesCol, { ...data, refImage })

    return docRef
  }

  const UpdateVehicle = async (data: object, id: string) => {
    const vehiclesCol = doc(firestoreDB, 'vehicles', id)
    await updateDoc(vehiclesCol, data)
  }

  return {
    refImage,
    startUpload,
    progress,
    deleteImg,
    getAllVehicles,
    getVehicle,
    getLimitVehicles,
    InsertVehicle,
    UpdateVehicle,
  }
}
