import { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { v4 as createId } from 'uuid'
import { storage } from '../../services/firebase'

export const useStorage = () => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<Error | null>(null)
  const [url, setUrl] = useState<string | null>(null)

  const startUpload = (file: File) => {
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
      },
      (error) => {
        setError(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL)
          setProgress(progress)
        })
      },
    )
  }

  return {
    progress,
    error,
    url,
    startUpload,
  }
}
