'use client'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { VehiclesDataProps } from '@/app/types/vehiclesDataProps'

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
  dataCar: (data: VehiclesDataProps) => void
  vehicle: VehiclesDataProps
}

const StorageContext = createContext<StorageContextProps>(
  {} as StorageContextProps,
)

export const StorageProvider = ({ children }: StorageProviderProps) => {
  const [refImage, setRefImage] = useState<ImageProps[]>([])
  const [vehicle, setVehicle] = useState<VehiclesDataProps>(
    {} as VehiclesDataProps,
  )

  const updateRefImages = useCallback((refImg: ImageProps) => {
    setRefImage((prevState) => [...prevState, refImg])
  }, [])

  const deleteImgContext = useCallback((refImg: ImageProps[]) => {
    setRefImage(refImg)
  }, [])

  const dataCar = useCallback((data: VehiclesDataProps) => {
    setVehicle(data)
    setRefImage(data.refImage)
  }, [])

  return (
    <StorageContext.Provider
      value={{
        refImage,
        updateRefImages,
        deleteImgContext,
        vehicle,
        dataCar,
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
