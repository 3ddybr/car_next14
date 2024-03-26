'use client'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { SelectTipos } from '@/components/SelectTipos'
import { dataTypesVehicles } from '@/utils/dataTypesVehicles'
import {
  dataBrandCars,
  dataExchangeCars,
  dataFuelCars,
  dataVersionCars,
} from '@/utils/dataCars'

import { FormProviderBase } from '@/components/FormProviderBase'

import { VeiculosContentForm, VeiculosOpcionais } from './styles'
import { InsertImg } from '../InsertImg'
import { useFirebase } from '@/app/(app)/hooks/useFirebase'
import { useStorage } from '@/app/(app)/contexts/useStorage'
import { dataCores } from '@/utils/dataColors'
import { VehiclesDataProps } from '@/app/types/vehiclesDataProps'

const schemaFormProduto = yup.object({
  title: yup.string().required('Titulo e obrigatório').min(3),

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
  color_car: yup.string().required('Cor e obrigatório'),
  exchange_car: yup.string().required('Câmbio obrigatório'),
  fuel_car: yup.string().required('Tipo de Combustível obrigatório'),
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
    camera_re: yup.boolean(),
    sensor_re: yup.boolean(),
    kit_gas: yup.boolean(),
    armored: yup.boolean(), // blindado
  }),
})

export function VehicleRegistrationForm() {
  const { InsertVehicle } = useFirebase()
  const { refImage, vehicle } = useStorage()
  const [refIdDocDB, setRefIdDocDB] = useState('')
  type FormData = yup.InferType<typeof schemaFormProduto>

  // console.log(vehicle)
  // if (vehicle) {
  //   console.log(vehicle.refImage)
  // }

  const useFormReturn = useForm<FormData>({
    resolver: yupResolver(schemaFormProduto),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormReturn

  const handleSubmitForm = async (data: FormData) => {
    if (refImage.length === 0) {
      alert('Insira pelo menos uma imagem')
      return
    }
    try {
      const ref = await InsertVehicle({ ...data, refImage })
      setRefIdDocDB(ref.id)
      console.log('Document written with ID cadastrado: ', ref.id, refIdDocDB)

      reset() // limpa o formulário
      alert('Cadastrado com sucesso!')
    } catch (error) {
      console.error(
        'Error adding document: (Erro ao cadastrar Veiculo) ',
        error,
      )
    }
  }

  return (
    <FormProviderBase useFormReturn={useFormReturn}>
      <VeiculosContentForm onSubmit={handleSubmit(handleSubmitForm)}>
        <h1>Cadastro de veículos</h1>
        <div>
          <section>
            <label>Tipo</label>
            <SelectTipos
              dataOptions={dataTypesVehicles}
              name="type"
              value={vehicle.type}
            />
            <p>{errors.type?.message}</p>
          </section>
          <section>
            <label>
              Titulo <small>(Breve descrição)</small>
            </label>
            <input
              id="title"
              {...register('title')}
              placeholder="ex: Gol G3 Power 1.0 16v"
              defaultValue={vehicle.title}
            />
            <p>{errors.title?.message}</p>
          </section>

          <section>
            <label>Marcas</label>
            <SelectTipos
              dataOptions={dataBrandCars}
              name="brand"
              value={vehicle.brand}
            />
            <p>{errors.brand?.message}</p>
          </section>
          <section>
            <label>Versão</label>
            <SelectTipos
              dataOptions={dataVersionCars}
              name="version_car"
              value={vehicle?.version_car}
            />
            <p>{errors.version_car?.message}</p>
          </section>
          <section>
            <label>Modelo</label>
            <input
              placeholder="Informe a Modelo"
              {...register('model')}
              id="model"
              defaultValue={vehicle.model}
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
              defaultValue={vehicle.mileage}
            />
            <p>{errors.mileage?.message}</p>
          </section>
          <section>
            <label>Ano ou Modelo</label>
            <input
              type="text"
              placeholder="Informe a Ano/Fabricação"
              {...register('year_model')}
              id="year_model"
              defaultValue={vehicle?.year_model}
            />
            <p>{errors.year_model?.message}</p>
          </section>
          <section>
            <label>Cor</label>
            <SelectTipos
              dataOptions={dataCores}
              name="color_car"
              value={vehicle?.color_car}
            />
            <p>{errors.color_car?.message}</p>
          </section>
          <section>
            <label>Câmbio</label>
            <SelectTipos
              dataOptions={dataExchangeCars}
              name="exchange_car"
              value={vehicle.exchange_car}
            />
            <p>{errors.exchange_car?.message}</p>
          </section>
          <section>
            <label>Combustível</label>
            <SelectTipos
              dataOptions={dataFuelCars}
              name="fuel_car"
              value={vehicle.fuel_car}
            />
            <p>{errors.fuel_car?.message}</p>
          </section>
        </div>

        <legend>Opcionais</legend>
        <VeiculosOpcionais>
          <section>
            <input
              type="checkbox"
              id="alarme"
              {...register('opcionais.alarme')}
              defaultChecked={vehicle.opcionais?.alarme}
            />
            <label>ALARME</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="som"
              {...register('opcionais.som')}
              defaultChecked={vehicle.opcionais?.som}
            />
            <label>SOM</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="airbag"
              {...register('opcionais.airbag')}
              defaultChecked={vehicle.opcionais?.airbag}
            />
            <label>AIR BAG</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="trava-eletrica"
              {...register('opcionais.trava_eletrica')}
              defaultChecked={vehicle.opcionais?.trava_eletrica}
            />
            <label>TRAVA ELÉTRICA</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="vidro_eletrico"
              {...register('opcionais.vidro_eletrico')}
              defaultChecked={vehicle.opcionais?.vidro_eletrico}
            />
            <label>VIDRO ELÉTRICO</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="direcao_hidraulica"
              {...register('opcionais.direcao_hidraulica')}
              defaultChecked={vehicle.opcionais?.direcao_hidraulica}
            />
            <label>DIREÇÃO HIDRÁULICA</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="ar_condicionado"
              {...register('opcionais.ar_condicionado')}
              defaultChecked={vehicle.opcionais?.ar_condicionado}
            />
            <label>AR CONDICIONADO</label>
          </section>

          <section>
            <input
              type="checkbox"
              id="camera_re"
              {...register('opcionais.camera_re')}
              defaultChecked={vehicle.opcionais?.camera_re}
            />
            <label>CAMERA DE RE</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="sensor_re"
              {...register('opcionais.sensor_re')}
              defaultChecked={vehicle.opcionais?.sensor_re}
            />
            <label>SENSOR DE RE</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="kit_gas"
              {...register('opcionais.kit_gas')}
              defaultChecked={vehicle.opcionais?.kit_gas}
            />
            <label>KIT GAS</label>
          </section>
          <section>
            <input
              type="checkbox"
              id="armored"
              {...register('opcionais.armored')}
              defaultChecked={vehicle.opcionais?.armored}
            />
            <label>BLINDADO</label>
          </section>
        </VeiculosOpcionais>
        <section>
          <InsertImg />
        </section>

        <div>
          <section>
            <label>Preço</label>
            <input
              type="number"
              id="price"
              {...register('price')}
              defaultValue={vehicle.price}
            />
            <p>{errors.price?.message}</p>
          </section>

          <section>
            <legend>Descrição</legend>
            <textarea
              placeholder="Mensagem"
              id="description"
              {...register('description')}
              defaultValue={vehicle.description}
            />
            <p>{errors.description?.message}</p>
          </section>
        </div>
        {vehicle !== ({} as VehiclesDataProps) ? (
          <button type="submit">Cadastrar</button>
        ) : (
          <button type="submit">Atualizar</button>
        )}
        {/* <button type="submit">
          {vehicle.price === '' ? 'Atualizar' : 'Cadastrar'}
        </button> */}
      </VeiculosContentForm>
    </FormProviderBase>
  )
}
