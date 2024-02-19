import { Controller, Control } from 'react-hook-form'
interface TypeCar {
  value: string
  label: string
}
interface PropsSelect {
  dataOptions: TypeCar[]
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>
}

export function SelectTipos({ dataOptions, name, control }: PropsSelect) {
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
