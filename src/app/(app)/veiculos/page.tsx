'use client'
import React, { useState } from 'react'
// import { ModalInsertImg } from "./components/ModalInsertImg";

import { VehicleRegistrationForm } from './components/VehicleRegistrationForm'

import { Modal as ModalImg } from 'antd'
import { VeiculosContainer } from './styles'

export default function Veiculos() {
  // Modal Imagens -----------------------------------------------------
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Insira')

  // const showModal = () => {
  //   setOpen(true)
  // }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
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

  // Modal Imagens fim------------------------------------------------------------

  // console.log('referencia do ir na tabela: ', refIdDocDB)
  return (
    <VeiculosContainer>
      <VehicleRegistrationForm />

      {/* <button onClick={() => showModal()}>Chamar</button> */}

      <ModalImg
        title={`Insira as imagens`}
        open={open}
        // visible={open}
        // open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form method="POST" onSubmit={() => {}}>
          <input type="file" name="image" />
          {/* <input type="text" name="name" placeholder="nome do arquivo"/> */}
          <button>Enviar</button>
        </form>
        <p>{modalText}</p>
      </ModalImg>
    </VeiculosContainer>
  )
}
