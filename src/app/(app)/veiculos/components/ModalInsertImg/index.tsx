import { useState } from 'react'
import { Modal } from 'antd'

interface ModalProps {
  openModal: boolean
  children: JSX.Element
}

export function ModalInsertImg({ openModal, children }: ModalProps) {
  // const openModalActive = openModal;
  // const [openModalActive, setOpenModalActive] = useState(openModal);
  const [open, setOpen] = useState(openModal)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')

  // const showModal = () => {
  //   setOpen(true);
  // };

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

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button> */}

      {open === true ? (
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
        </Modal>
      ) : (
        ''
      )}
      {children}
    </>
  )
}

// export default ModalInsertImg;
