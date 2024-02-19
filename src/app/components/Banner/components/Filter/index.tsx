import { dataTiposCarros } from "../../../../utils/dataTipoCarros";
import { FilterButtonLink, FilterContainer, FilterContent } from "./styles";
import { useForm } from "react-hook-form";
import { dataMarcas } from "../../../../utils/dataMarcas";
// import { FormEvent } from "react";
import { SelectTipos } from "../../../SelectTipos";

export function Filter() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const handleSubmitForm = (event: any) => {
    return console.log(event);
  };
  return (
    <FilterContainer>
      <FilterContent onSubmit={handleSubmit(handleSubmitForm)}>
        <section>
          <label>Marca</label>
          <SelectTipos
            dataOptions={dataTiposCarros}
            control={control}
            name="type"
          />
        </section>
        <section>
          <label>Tipo</label>
          <SelectTipos
            dataOptions={dataMarcas}
            control={control}
            name="brand"
          />
        </section>
        <FilterButtonLink type="submit">Pesquisar</FilterButtonLink>
      </FilterContent>
    </FilterContainer>
  );
}
