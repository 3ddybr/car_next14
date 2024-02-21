export type ProductsData = {
  // destaque: boolean;
  title: string;
  // img: string;
  type: string;
  brand: string; //marca
  model: string;
  version_car: string;
  year_model: string; //ano/model
  mileage: string; //quilometragem
  power: string; //potencia
  color_car: string;
  price: string;
  description: string;

  opcionais: {
    alarme: boolean;
    trava_eletrica: boolean;
    som: boolean;
    direcao_hidraulica: boolean;
    vidro_eletrico: boolean;
    airbag: boolean;
    ar_condicionado: boolean;
  };

  // imgProducts?: {
  //   Imgs: [Imgs];
  // };
};

type Imgs = {
  name: string;
  url: string;
};
