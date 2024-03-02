'use client'

import { ChangeEvent } from 'react'
import Image from 'next/image'
import { useStorage } from '@/app/(app)/hooks/useStorage'

import {
  StepsInsertImgContainer,
  StepsInsertImgContentImage,
  StepsInsertImgMiniature,
} from './styles'

// import CarImg from '../../../../../../public/assets/ImgCarro.png'
import { X } from '@phosphor-icons/react/dist/ssr'

export function StepsInsertImg() {
  // const [files, setFiles] = useState<FileList | null>(null)
  const { startUpload, progress, url, deleteImg, refImage } = useStorage()
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // setFiles(e.target.files)
      const fileTeste = e.target.files
      if (fileTeste) {
        for (let i = 0; i < fileTeste.length; i++) {
          startUpload(fileTeste[i])
        }
        // setFiles(null)
        // e.target.value = ''
      }
    }
  }
  // console.log('files', files, setFiles)
  return (
    <StepsInsertImgContainer>
      <input
        type="file"
        multiple
        name="image"
        onChange={handleFileChange}
        accept=".gif, .jpg, .jpeg, .png"
      />

      <StepsInsertImgContentImage>
        {refImage &&
          refImage.map((refImage) => (
            <StepsInsertImgMiniature key={refImage.imgRefFullPath}>
              {progress ? (
                // <input
                //   type="range"
                //   // defaultValue={progress}
                //   value={progress}
                //   // step={progress}
                //   min={0}
                //   max={100}
                // />
                <span>{progress}%</span>
              ) : (
                <>
                  <X
                    size={25}
                    color="#fc0404"
                    cursor="pointer"
                    onClick={() => {
                      deleteImg(refImage.imgRefFullPath)
                    }}
                  >
                    x
                  </X>
                  <Image
                    key={refImage.imgRefFullPath}
                    src={refImage.imgUrl}
                    width={150}
                    height={150}
                    alt={url.length.toString()}
                    priority
                  />
                </>
              )}
            </StepsInsertImgMiniature>
          ))}
      </StepsInsertImgContentImage>
    </StepsInsertImgContainer>
  )
}
