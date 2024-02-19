type DataItemCarroProps = {
  title: string
  img: string
  type?: string
  brand: string // marca
  model?: string
  year: string // ano
  mileage: string // quilometragem
  power: string // potencia
  color: string
  description: string
}

export const dataItemCarro: DataItemCarroProps[] = [
  {
    title: 'Modelo GM - CHEVROLET COBALT LTZ 1.4 8V FLEXPOWER/ECONOFLEX 4P',
    img: '/images/car/cobalt.jpg',
    brand: 'GM - CHEVROLET',
    year: '2015',
    mileage: '81000',
    power: '1.4',
    color: 'Prata',
    description:
      'Vendo troco financio em até 60x para aposentados pensionista autônomos setor privado empréstimo consignado carta de crédito etc. Financiamos o seu óprio  veículos fazemos refinanciamento. Pegamos o seu carro consignado pra vender .só liga ou chama no zap .aprovo o seu crédito pelo zap confira .Fala qual ículo vc procura que eu arrumo pra vc São mais de 100 veículos de várias marcas e modelos confira.Pegamos o seu carro consignado pra vender .só liga ou chama no zap .aprovo o seu crédito pelo zap confira .Fala qual ículo vc procura que eu arrumo pra vc São mais de 100 veículos de várias marcas e modelos confira',
  },
]

// function teste<T> () {
//     const axios = axios.get<T>();
// }

// teste<D>()
