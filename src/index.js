// console.log('%c HI', 'color: firebrick')

fetch(imgUrl, {method: "GET"} )
.then(response => {
  console.log(response)
  if(response.ok){
    return response.json();
  }
})
.then((dogImgData) => {
  dogImgData.message.forEach(function(imgUrl) {
    dogImgContainer.innerHTML += `<img src="${imgUrl}">`
  })
  
  const dogImgString = dogImgData.message.map((imgUrl) =>{
    return `<img src="${imgUrl}">`;
  })

fetch(breedUrl, {method: "GET"})
.then((resp) => resp.json())
.then((breedData) => {
  allBreeds = Object.keys(breedData.message)
  console.log(allBreeds);
  dogBreedUl.innerHTML = createDogList(allBreeds)
})
function createDogList(dogBreedArray){
  const dogLiStringArray = dogBreedArray.map(function(breed){
    return `<li>${breed}</li>`
  })
  return dogLiStringArray.json('')
}