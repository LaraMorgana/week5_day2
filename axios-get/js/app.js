
// Instancia
const apiHandler = new CountriesApiHandler()


document.querySelector('#countryNameButton').onclick = () => {

    const inputValue = document.querySelector('#countryNameInput').value

    apiHandler
        .getOneCountry(inputValue)
        .then(response => {
            console.log(response)
        })
        .catch(err => err.response.status === 404 ? alert("El país no existe") : alert("Error de servidor"))
}






// apiHandler
//     .getAllCountries()
//     .then(data => console.log('La respuesta es', data))
//     .catch(err => console.log('ERROR!:', err))

// apiHandler
//     .getOneCountry('spain')
//     .then(data => console.log('La respuesta es', data))
//     .catch(err => console.log('ERROR!:', err))

// apiHandler
//     .getCountriesByCurrency('eur')
//     .then(data => console.log('La respuesta es', data))
//     .catch(err => console.log('ERROR!:', err))