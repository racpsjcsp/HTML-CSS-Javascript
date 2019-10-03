//Get a random dog picture
/* const dogs_url = 'https://dog.ceo/api/breeds/image/random';
function addDoggo() {
  fetch(dogs_url)
    .then(function(response) {
      return response.json();
  })
    .then(function(data) {
      const img = document.createElement('img');
      img.src = data.message;
      img.alt = 'Cute Doggo';
  
      document.querySelector('.doggos').appendChild(img);
    })
} */

//Get a random dog based on the chosen breed
const breed_url = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const button = document.querySelector('.roll');


fetch(breed_url)
  //spinner should start here

  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
  
   // const select = document.querySelector('.breeds');

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  })

  select.addEventListener("change", function(event) {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

    //spinner should end here

    getDoggo(url);

    //roll button reloads a new random pic of the chosen breed
    button.addEventListener('click', function(event) {
      getDoggo(url);
    });

    });


  const img = document.querySelector('.dog-img');
  const spinner = document.querySelector('.spinner');
  
  function getDoggo(url) {
    //spinner starts
    spinner.classList.add('show');
    img.classList.remove('show');

      fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        img.src = data.message;

        //spinner ends
      });      
  }
  
  img.addEventListener('load', function() {
    spinner.classList.remove('show');
    img.classList.add('show');
  })