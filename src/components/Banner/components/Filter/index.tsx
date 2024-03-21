'use client'
import { FilterButtonLink, FilterContainer, FilterContent } from './styles'
import { useForm } from 'react-hook-form'
import { SelectTipos } from '../../../SelectTipos'
import { dataTypesVehicles } from '@/utils/dataTypesVehicles'
import { dataBrandCars } from '@/utils/dataCars'
import { FormProviderBase } from '@/components/FormProviderBase'

export function Filter() {
  const useFormReturn = useForm({})
  const { handleSubmit } = useFormReturn

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitForm = (event: any) => {
    return console.log(event)
  }
  return (
    <FormProviderBase useFormReturn={useFormReturn}>
      <FilterContainer>
        <FilterContent onSubmit={handleSubmit(handleSubmitForm)}>
          <section>
            <label>Marca</label>
            <SelectTipos dataOptions={dataTypesVehicles} name="type" />
          </section>
          <section>
            <label>Tipo</label>
            <SelectTipos dataOptions={dataBrandCars} name="brand" />
          </section>
          <FilterButtonLink type="submit">Pesquisar</FilterButtonLink>
        </FilterContent>
      </FilterContainer>
    </FormProviderBase>
  )
}
