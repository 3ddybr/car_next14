'use client'

import { ChangeEvent } from 'react'
import Image from 'next/image'

import {
  StepsInsertImgContainer,
  StepsInsertImgContentImage,
  StepsInsertImgMiniature,
} from './styles'

import { X } from '@phosphor-icons/react/dist/ssr'
import { useFirebase } from '@/app/(app)/hooks/useFirebase'

export function InsertImg() {
  const { startUpload, refImage, progress, deleteImg } = useFirebase()
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileTeste = e.target.files
      if (fileTeste) {
        for (let i = 0; i < fileTeste.length; i++) {
          startUpload(fileTeste[i])
        }
      }
    }
  }
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
              {progress < 100 ? (
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
                    alt={refImage.imgUrl}
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
