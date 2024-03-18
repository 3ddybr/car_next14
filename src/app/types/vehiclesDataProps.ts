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
  // 10 itens
  opcionais: {
    alarme: boolean
    som: boolean
    airbag: boolean
    trava_eletrica: boolean
    vidro_eletrico: boolean
    direcao_hidraulica: boolean
    ar_condicionado: boolean
  }
  refImage: [
    {
      imgRefFullPath: string
      imgUrl: string
    },
  ]
}
