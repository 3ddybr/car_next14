'use client'
import { useState } from 'react'
import { Modal } from 'antd'
import { ModalImgContainer } from './styles'

interface ModalProps {
  openModal: boolean
  children?: JSX.Element
}

export function ModalInsertImg({ openModal }: ModalProps) {
  // const openModalActive = openModal;
  // const [openModalActive, setOpenModalActive] = useState(openModal);
  const [open, setOpen] = useState(openModal)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  return (
    <>
      <ModalImgContainer>
        <Modal
          centered
          title="Insira as imagens"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <>
            <form method="POST" onSubmit={() => {}}>
              <input type="file" name="image" />
              {/* <input type="text" name="name" placeholder="nome do arquivo"/> */}
              <button>Enviar </button>
            </form>
            <p> carregar nini img</p>
          </>
        </Modal>
      </ModalImgContainer>
    </>
  )
}
