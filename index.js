/* Code goes here */
// this is our api endpoint, where you are requesting information from
const URL = 'https://petdibs.herokuapp.com/pets';

const reportStatus = (message) => {
  $('#status-message').html(message);
}

const loadPets = () => {
  const petList = $('#pet-list');
  // empty it out so there is nothing in the list
  petList.empty();
  reportStatus('Loading Pets! Please wait...')
  // get the thing
  // give axios the endpoint
  axios.get(URL)
  // returns a promise which has a .then
  .then ((response) => {
    // loops through response data
    response.data.forEach((pet) => {
      petList.append(`<li>${pet.name}</li>`);
    });
    reportStatus('Pets Loaded!');
  }) // no semi colon because there is another .catch, if api fails it goes to an error
  .catch((error) => {
    console.log(error);
    reportStatus(`Error: ${error.message}`)
  });

  // this will execute before the get request
  // console.log('This is after the .get');
}

$(document).ready(() => {
  $('#load').click(loadPets);
})
