const BASE_URL = 'https://aws.random.cat/meow'
const changeCatButtonHTML = document.getElementById('change-cat')
const catImageHtml = document.getElementById('cat')

async function getCats(){
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json()  
    return json.file
  } catch (e) {
    console.log(e.message)
  }
}

const changePicture = async () => {
  const pictureURL = await getCats()
  catImageHtml.setAttribute('src', pictureURL)
  return
}

changeCatButtonHTML.addEventListener('click', changePicture)

changePicture()