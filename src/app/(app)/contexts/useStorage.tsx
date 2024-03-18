'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

type ImageProps = {
  imgRefFullPath: string
  imgUrl: string
}

interface StorageProviderProps {
  // quando as props vao receber qualquer conteúdo do tipo react usa-se ReactNode
  children: ReactNode
}

interface StorageContextProps {
  refImage: ImageProps[]
  updateRefImages: (imgRef: ImageProps) => void
  deleteImgContext: (imgRef: ImageProps[]) => void
}

const StorageContext = createContext<StorageContextProps>(
  {} as StorageContextProps,
)

export const StorageProvider = ({ children }: StorageProviderProps) => {
  const [refImage, setRefImage] = useState<ImageProps[]>([])

  function updateRefImages(refImg: ImageProps) {
    setRefImage((prevState) => [...prevState, refImg])
  }

  function deleteImgContext(refImg: ImageProps[]) {
    setRefImage(refImg)
  }
  return (
    <StorageContext.Provider
      value={{
        refImage,
        updateRefImages,
        deleteImgContext,
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
