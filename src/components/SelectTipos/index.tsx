'use client'
import { Controller, useFormContext } from 'react-hook-form'
interface TypeCar {
  value: string
  label: string
}
interface PropsSelect {
  dataOptions: TypeCar[]
  name: string
}

export function SelectTipos({ dataOptions, name }: PropsSelect) {
  const { control } = useFormContext()
  return (
    <Controller
      render={({ field }) => {
        return (
          <select {...field}>
            {dataOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        )
      }}
      control={control}
      name={name}
      defaultValue=""
    />
  )
}
