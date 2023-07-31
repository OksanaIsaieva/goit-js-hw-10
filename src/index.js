import { fetchBreeds, fetchCatByBreed } from "./cat-api";

// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_eNFcwXhuGMAgu9YFNTESwzcIHtxf4qu9jgtJgUnf7wYARzkskzfzLGNfDqAbfnlB";

const breedSelect = document.querySelector('select.breed-select');
const pLoader = document.querySelector('.loader');
const pError = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

pLoader.style.display = 'block';
breedSelect.style.display = 'none';
pError.style.display = 'none';

fetchBreeds()
.then((breds) => renderBreedsList(breds))
.catch((error) => {
    pLoader.style.display = 'none';
    pError.style.display = 'block';
    console.log(error);
});

function renderBreedsList(breds){
    pLoader.style.display = 'none';

    if (breds.length == 0) {
        pError.style.display = 'none';
        return false;
    }

    breds.forEach((bred) => {
        breedSelect.insertAdjacentHTML("beforeend", '<option value="'+bred.id+'">'+bred.name+'</option>');
    });

    breedSelect.style.display = 'block';
}

breedSelect.addEventListener('change', function(){

    breedSelect.style.display = 'none';
    catInfo.style.display = 'none';
    pLoader.style.display = 'block';

    fetchCatByBreed(this.value)
    .then((data) => {
        pLoader.style.display = 'none';
        breedSelect.style.display = 'block';

        const cat = data[0];

        catInfo.innerHTML = '<img src="'+cat.url+'" width="200" align="left"><p>'+cat.breeds[0].description+'</p>';
        catInfo.style.display = 'block';
        // catInfo.insertAdjacentHTML("beforeend", );
    })
    .catch((error) => {
        pLoader.style.display = 'none';
        pError.style.display = 'block';
        console.log(error);
    });
});