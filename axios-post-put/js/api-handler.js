
class FoodsApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://reactr-realfooder.herokuapp.com/api'
        })
    }

    getAllFoods = () => this.axiosApp.get('/foods')
    saveFood = foodInfo => this.axiosApp.post('/foods/newFood', foodInfo)
    getOneFood = foodId => this.axiosApp.get(`/foods/details/${foodId}`)
    editFood = (foodId, foodInfo) => this.axiosApp.put(`/foods/edit/${foodId}`, foodInfo)
}