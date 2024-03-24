export type VehiclesDataProps = {
  // destaque: boolean;
  id: string
  title: string
  type: string
  brand: string // marca
  model: string
  version_car: string
  year_model: string // ano/model
  mileage: string // quilometragem
  color_car: string
  price: string
  description: string
  exchange_car: string // Câmbio
  fuel_car: string

  opcionais: {
    alarme: boolean
    som: boolean
    airbag: boolean
    trava_eletrica: boolean
    vidro_eletrico: boolean
    direcao_hidraulica: boolean
    ar_condicionado: boolean
    camera_re: boolean
    sensor_re: boolean
    kit_gas: boolean
    armored: boolean // blindado
  }
  refImage: [
    {
      imgRefFullPath: string
      imgUrl: string
    },
  ]
}
