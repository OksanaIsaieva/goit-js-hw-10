const apiKey = "live_eNFcwXhuGMAgu9YFNTESwzcIHtxf4qu9jgtJgUnf7wYARzkskzfzLGNfDqAbfnlB";

export const fetchBreeds = function() {
    return fetch("https://api.thecatapi.com/v1/breeds", {
        headers: {
            Accept: "application/json",
            "X-Api-Key": apiKey,
        },
        }).then(
        (response) => {
        // if (!response.ok) {
        //   throw new Error(response.status);
        // }
        return response.json();
        }
    );
};

export const fetchCatByBreed = function(breedId) {
    return fetch("https://api.thecatapi.com/v1/images/search?breed_ids=" + breedId, {
        headers: {
            Accept: "application/json",
            "X-Api-Key": apiKey,
        },
        }).then(
        (response) => {
        // if (!response.ok) {
        //   throw new Error(response.status);
        // }
        return response.json();
        }
    );
};