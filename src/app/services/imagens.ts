import { storage } from './firebase'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'
import { v4 as createId } from 'uuid'

type imagesP = {
  name: string
  url: string
}
// funcao que retorna uma lista de fotos do firebase......
export const getAll = async () => {
  const list: imagesP[] = []
  const imagesCarsRef = ref(storage, 'imagesCars')
  const imagesList = await listAll(imagesCarsRef)

  for (const i in imagesList.items) {
    const imagesUrl = await getDownloadURL(imagesList.items[i])
    list.push({
      name: imagesList.items[i].name,
      url: imagesUrl,
    })
  }
  return list
}
// fim da função ..................

// função que envia uma foto para firebase......

export const insertImgFirebase = async (file: File) => {
  // if (
  //   ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type)
  // ) {
  const randomName = createId()
  const newFile = ref(storage, `imagesCars/${randomName}`)

  const uploadDoc = await uploadBytes(newFile, file)
  const imagesUrlInsert = await getDownloadURL(uploadDoc.ref)

  console.log('Console função insertImg', imagesUrlInsert)
  return { name: uploadDoc.ref.name, url: imagesUrlInsert } as imagesP
  // } else {
  //   return new Error('Tipo de Arquivo de imagem nao permitido.')
  // }
}
// fim da função ..................

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
