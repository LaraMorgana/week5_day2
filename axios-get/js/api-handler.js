class CountriesApiHandler {

    constructor() {

        console.log('API handler inicializada')

        this.axiosApp = axios.create({
            baseURL: 'https://restcountries.eu/rest/v2'
        })
    }

    getOneCountry = country => this.axiosApp.get(`/name/${country}`)
    getAllCountries = () => this.axiosApp.get('/all')
    getCountriesByCurrency = currency => this.axiosApp.get(`/currency/${currency}`)
}