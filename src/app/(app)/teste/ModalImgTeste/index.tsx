'use client'
import { useState } from 'react'

import { X } from '@phosphor-icons/react/dist/ssr'

import { ModalImgContainer, ModalImgContent } from './styles'

type ModalProps = {
  isOpenModal: boolean
  children: JSX.Element
}

export default function ModalImgTeste({ isOpenModal, children }: ModalProps) {
  const [isOpen, setModalOpen] = useState(isOpenModal)
  if (isOpen) {
    return (
      <ModalImgContainer>
        <ModalImgContent>
          <header>
            <X
              size={20}
              color="#2E82F2"
              fontWeight={800}
              onClick={() => setModalOpen(!isOpenModal)}
            >
              x
            </X>
          </header>
          <main>{children}</main>
          <footer>
            <button onClick={() => setModalOpen(!isOpenModal)}>Concluir</button>
          </footer>
        </ModalImgContent>
      </ModalImgContainer>
    )
  }

  return null
}
