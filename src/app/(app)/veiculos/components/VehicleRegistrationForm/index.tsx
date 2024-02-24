'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { SelectTipos } from '@/components/SelectTipos'
import { dataTiposCarros } from '@/utils/dataTipoCarros'
import { dataMarcas } from '@/utils/dataMarcas'

import { VeiculosContentForm, VeiculosOpcionais } from './styles'
import { FormProviderBase } from '@/components/FormProviderBase'

// import { useState } from 'react'

// import { firestoreDB } from '../../services/firebase'
// import { addDoc, collection } from 'firebase/firestore'

const schemaFormProduto = yup.object({
  // destaque: yup.boolean(),

  title: yup.string().required('Titulo e obrigatório').min(3),
  // img: yup.string().required(),

  type: yup.string().required('Tipo de veículos obrigatório'),
  brand: yup.string().required('Marca de veículos obrigatório'), // marca

  model: yup.string().required('Modelo e obrigatório'),
  version_car: yup.string().required('Versão e obrigatório'),
  year_model: yup
    .string()
    .min(4)
    .max(4)
    .required('Ano Modelo/ Fabricação e obrigatório'), // ano/model
  mileage: yup.string().required('Quilometragem e obrigatório'), // quilometragem
  // power: yup.string().required("Potencia e obrigatório"), //potencia
  color_car: yup.string().required('Cor e obrigatório'),
  price: yup.string().required('Preço e obrigatório'),
  description: yup.string().required('Descrição e obrigatório'),

  opcionais: yup.object({
    alarme: yup.boolean(),
    som: yup.boolean(),
    airbag: yup.boolean(),
    trava_eletrica: yup.boolean(),
    vidro_eletrico: yup.boolean(),
    direcao_hidraulica: yup.boolean(),
    ar_condicionado: yup.boolean(),
  }),
})

export function VehicleRegistrationForm() {
  // const [refIdDocDB, setRefIdDocDB] = useState('')
  // const [open, setOpen] = useState(false)
  type FormData = yup.InferType<typeof schemaFormProduto>

  const useFormReturn = useForm<FormData>({
    resolver: yupResolver(schemaFormProduto),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormReturn

  console.log('log de erros veicyulou', errors)
  const handleSubmitForm = (data: FormData) => {
    // event.preventDefault()
    // const vehiclesCol = collection(firestoreDB, 'vehicles')
    console.log('Console em data: ', data)
    try {
      // const docRef = await addDoc(vehiclesCol, { data })
      // setRefIdDocDB(docRef.id)
      // funcao de abrir o modal
      // showModal()
      // console.log("Documento escrito com id: ", docRef.id);
    } catch (error) {
      // console.log('Console em data: ', data)
      // console.error('Error adding document: ', error)
    }
  }
  return (
    <FormProviderBase useFormReturn={useFormReturn}>
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
              // control={control}
              // {...register('type')}
              name="type"
            />
            <p>{errors.type?.message}</p>
          </section>
          <section>
            <label>Marcas</label>
            <SelectTipos
              dataOptions={dataMarcas}
              // control={control}
              // {...register('brand')}
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
              type="text"
              placeholder="Informe a km"
              {...register('mileage')}
              id="mileage"
            />
            <p>{errors.mileage?.message}</p>
          </section>
          <section>
            <label>Ano - Modelo / Fabricação</label>
            <input
              type="text"
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
    </FormProviderBase>
  )
}
