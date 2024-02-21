'use client'
import { NextPage } from 'next'
import React, { useState } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'

import { ProductsData } from '../../models/products.models'

// import { ModalInsertImg } from "./components/ModalInsertImg";

// import { firestoreDB } from '../../services/firebase'
// import { addDoc, collection } from 'firebase/firestore'

import {
  VeiculosContainer,
  VeiculosContentForm,
  VeiculosOpcionais,
} from './styles'

import { Modal as ModalImg } from 'antd'
import { SelectTipos } from '@/components/SelectTipos'
import { dataTiposCarros } from '@/utils/dataTipoCarros'
import { dataMarcas } from '@/utils/dataMarcas'

// const schemaFormProduto = yup.object().shape({
//   // destaque: yup.boolean(),

//   title: yup.string().required('Titulo e obrigatório').min(3),
//   // img: yup.string().required(),

//   type: yup.string().required('Tipo de veículos obrigatório'),
//   brand: yup.string().required('Marca de veículos obrigatório'), // marca

//   model: yup.string().required('Modelo e obrigatório'),
//   version_car: yup.string().required('Versão e obrigatório'),
//   year_model: yup
//     .number()
//     .positive()
//     .min(4)
//     .max(4)
//     .required('Ano Modelo/ Fabricação e obrigatório'), // ano/model
//   mileage: yup.number().positive().required('Quilometragem e obrigatório'), // quilometragem
//   // power: yup.string().required("Potencia e obrigatório"), //potencia
//   color_car: yup.string().required('Cor e obrigatório'),
//   price: yup.string().required('Preço e obrigatório'),
//   description: yup.string().required('Descrição e obrigatório'),

//   alarme: yup.boolean(),
//   trava_eletrica: yup.boolean(),
//   som: yup.boolean(),
//   direcao_hidraulica: yup.boolean(),
//   vidro_eletrico: yup.boolean(),
//   airbag: yup.boolean(),
//   ar_condicionado: yup.boolean(),
// })

const Veiculos: NextPage = () => {
  // const [refIdDocDB, setRefIdDocDB] = useState('')

  // Modal Imagens
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Insira')

  const showModal = () => {
    setOpen(true)
  }

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

  // Modal Imagens fim

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductsData>({
    // resolver: yupResolver(schemaFormProduto),
  })

  // console.log(errors);
  const handleSubmitForm: SubmitHandler<ProductsData> = async () => {
    // console.log("Console em data: ", data);
    // const vehiclesCol = collection(firestoreDB, 'vehicles')

    try {
      // const docRef = await addDoc(vehiclesCol, { data })
      // setRefIdDocDB(docRef.id)
      // funcao de abrir o modal
      showModal()
      // console.log("Documento escrito com id: ", docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }

  // console.log('referencia do ir na tabela: ', refIdDocDB)
  return (
    <VeiculosContainer>
      <VeiculosContentForm onSubmit={handleSubmit(handleSubmitForm)}>
        <h1>Cadastro de veículos</h1>
        <div>
          <section>
            <label>
              Titulo <small>(Breve descrição)</small>
            </label>
            <input
              id="title"
              {...register('title')}
              placeholder="ex: Gol G3 Power 1.0 16v"
            />
            <p>{errors.title?.message}</p>
          </section>
          <section>
            <label>Tipo</label>
            <SelectTipos
              dataOptions={dataTiposCarros}
              control={control}
              {...register('type')}
              name="type"
            />
            <p>{errors.type?.message}</p>
          </section>
          <section>
            <label>Marcas</label>
            <SelectTipos
              dataOptions={dataMarcas}
              control={control}
              {...register('brand')}
              name="brand"
            />
            <p>{errors.brand?.message}</p>
          </section>
          <section>
            <label>Versão</label>

            <input
              placeholder="Informe a Versão"
              id="version_car"
              {...register('version_car')}
            />
            <p>{errors.version_car?.message}</p>
          </section>
          <section>
            <label>Modelo</label>
            <input
              placeholder="Informe a Modelo"
              {...register('model')}
              id="model"
            />
            <p>{errors.model?.message}</p>
          </section>
          <section>
            <label>Quilometragem</label>
            <input
              type="number"
              placeholder="Informe a km"
              {...register('mileage')}
              id="mileage"
            />
            <p>{errors.mileage?.message}</p>
          </section>
          <section>
            <label>Ano - Modelo / Fabricação</label>
            <input
              type="number"
              placeholder="Informe a Ano/Fabricação"
              {...register('year_model')}
              id="year_model"
            />
            <p>{errors.year_model?.message}</p>
          </section>
          <section>
            <label>Cor</label>
            <input
              placeholder="Informe a Cor no DOC"
              {...register('color_car')}
              id="color_car"
            />
            <p>{errors.color_car?.message}</p>
          </section>
        </div>

        <legend>Opcionais</legend>
        <VeiculosOpcionais>
          <section>
            <input
              type="checkbox"
              id="alarme"
              {...register('opcionais.alarme')}
            />
            <label>ALARME</label>
          </section>
          <section>
            <input type="checkbox" id="som" {...register('opcionais.som')} />
            <label>SOM</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="airbag"
              {...register('opcionais.airbag')}
            />
            <label>AIR BAG</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="trava-eletrica"
              {...register('opcionais.trava_eletrica')}
            />
            <label>TRAVA ELÉTRICA</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="vidro_eletrico"
              {...register('opcionais.vidro_eletrico')}
            />
            <label>VIDRO ELÉTRICO</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="direcao_hidraulica"
              {...register('opcionais.direcao_hidraulica')}
            />
            <label>DIREÇÃO HIDRÁULICA</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="ar_condicionado"
              {...register('opcionais.ar_condicionado')}
            />
            <label>AR CONDICIONADO</label>
          </section>
        </VeiculosOpcionais>

        <div>
          <section>
            <label>Preço</label>
            <input type="number" id="price" {...register('price')} />
            <p>{errors.price?.message}</p>
          </section>

          <section>
            <legend>Descrição</legend>
            <textarea
              placeholder="Mensagem"
              id="description"
              {...register('description')}
            />
            <p>{errors.description?.message}</p>
          </section>
        </div>
        <button type="submit">Cadastrar</button>
      </VeiculosContentForm>

      <button onClick={() => showModal()}>Chamar</button>

      <ModalImg
        title={`Insira as imagens`}
        open={open}
        visible={open}
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

export default Veiculos
