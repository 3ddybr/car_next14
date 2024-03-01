'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
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
  const [files, setFiles] = useState<FileList | null>(null)
  const { startUpload, progress, url } = useStorage()
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(e.target.files)
      // setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (files) {
      for (let i = 0; i < files.length; i++) {
        startUpload(files[i])
      }
      setFiles(null)
    }
  }
  return (
    <StepsInsertImgContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          name="image"
          onChange={handleFileChange}
          accept=".gif, .jpg, .jpeg, .png"
        />
        <button
          type="submit"
          className={`${Boolean(progress) && 'loading'}`}
          disabled={!files}
        >
          Adicionar
        </button>
      </form>

      <StepsInsertImgContentImage>
        {url &&
          url.map((url) => (
            <StepsInsertImgMiniature key={url}>
              <X
                size={25}
                color="#fc0404"
                cursor="pointer"
                onClick={() => {
                  console.log('exclui foto')
                }}
              >
                x
              </X>
              <Image
                key={url + 1}
                src={url}
                width={150}
                height={150}
                alt={url.length.toString()}
              />
            </StepsInsertImgMiniature>
          ))}
      </StepsInsertImgContentImage>
    </StepsInsertImgContainer>
  )
}

// {
/* <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />

        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        />
        <Image
          src={CarImg}
          width={150}
          height={150}
          alt={url.length.toString()}
        /> */
// }
