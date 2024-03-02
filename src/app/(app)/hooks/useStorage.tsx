import { useState } from 'react'
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

export const useStorage = () => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<Error | null>(null)
  const [url, setUrl] = useState<string[]>([])
  const [refImage, setRefImage] = useState<ImageProps[] | []>([])

  const startUpload = async (file: File) => {
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
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
        console.log('Upload is ' + progress + '% done')
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
          setUrl((prevState) => [...prevState, downloadURL])
          setRefImage((prevState) => [...prevState, refImg])
          setProgress(progress)
          // console.log(refImg)
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

  return {
    progress,
    error,
    url,
    refImage,
    startUpload,
    deleteImg,
  }
}
