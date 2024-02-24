import { storage } from "./firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

type imagesP = {
  name: string;
  url: string;
};
//funcao que retorna uma lista de fotos do firebase......
export const getAll = async () => {
  let list: imagesP[] = [];
  const imagesCarsRef = ref(storage, "imagesCars");
  const imagesList = await listAll(imagesCarsRef);

  for (let i in imagesList.items) {
    let imagesUrl = await getDownloadURL(imagesList.items[i]);
    list.push({
      name: imagesList.items[i].name,
      url: imagesUrl,
    });
  }
  return list;
};
//fim da funcao ..................

//funcao que envia uma foto para firebase......
export const insert = async (file: File) => {
  if (
    ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(file.type)
  ) {
    let randomName = createId();
    let newFile = ref(storage, `imagesCars/${randomName}`);

    let uploadDoc = await uploadBytes(newFile, file);
    let imagesUrlInsert = await getDownloadURL(uploadDoc.ref);

    return { name: uploadDoc.ref.name, url: imagesUrlInsert } as imagesP;
  } else {
    return new Error("Tipo de Arquivo de imagem nao permitido.");
  }
};
//fim da funcao ..................

// // Criando uma referência para o Firebase Storage
// const storageRef = firebase.storage().ref();

// // Função que envia várias imagens para o Firebase Storage
// async function enviarImagens(files) {
//   const urls = await Promise.all(
//     files.map((file) => {
//       const newRef = storageRef.child(file.name);
//       return newRef.put(file).then(() => newRef.getDownloadURL());
//     })
//   );
//   console.log('Urls:', urls);
// }

// // Usando a função para enviar as imagens
// const files = [/* array com os objetos File das imagens */];
// enviarImagens(files);
