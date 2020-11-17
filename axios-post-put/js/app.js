
const foodsApp = new FoodsApiHandler()

updateFoodsList()           // Rellenar la lista tras la carga de la página



function updateFoodsList() {

    foodsApp
        .getAllFoods()
        .then(response => {

            let allFoods = response.data.reverse()
            let foodsHtml = ''

            allFoods.forEach(elm => {
                foodsHtml += `<li class="food"> 
                                <img src="${elm.img}">
                                <div>
                                    <strong>${elm.name}</strong> 
                                    <br>
                                    <p>Calorias: ${elm.kcal}kcal | Proteínas: ${elm.protein}/100g</p>
                                </div>
                              </li>`
            })

            document.querySelector('#foodsList').innerHTML = foodsHtml
        })
        .catch(err => console.log('HUBO UN ERROR!', err))
}




document.querySelector('#newFormFood').onsubmit = e => {

    e.preventDefault()          // evita el envío del formulario

    const inputs = document.querySelectorAll('#newFormFood input')

    const foodInfo = {
        name: inputs[0].value,
        kcal: inputs[1].value,
        protein: inputs[2].value,
        img: inputs[3].value,
    }

    foodsApp
        .saveFood(foodInfo)
        .then(() => {
            updateFoodsList()
            document.querySelector('#newFormFood').reset()      // vacía los campos
        })
        .catch(err => console.log('HUBO UN ERROR!', err))
}



document.querySelector('#getFoodInfoForm').onsubmit = e => {

    e.preventDefault()

    const foodIDvalue = document.querySelector('#getFoodInfoForm input').value

    foodsApp
        .getOneFood(foodIDvalue)
        .then(response => {

            const inputs = document.querySelectorAll('#editFormFood input')

            inputs[0].value = response.data.name
            inputs[1].value = response.data.kcal
            inputs[2].value = response.data.protein
            inputs[3].value = response.data.img
        })
        .catch(err => console.log('HUBO UN ERROR!', err))
}




document.querySelector('#editFormFood').onsubmit = e => {

    e.preventDefault()

    const inputs = document.querySelectorAll('#editFormFood input')

    const foodInfo = {
        name: inputs[0].value,
        kcal: inputs[1].value,
        protein: inputs[2].value,
        img: inputs[3].value,
    }

    const foodIDvalue = document.querySelector('#getFoodInfoForm input').value


    foodsApp
        .editFood(foodIDvalue, foodInfo)
        .then(() => updateFoodsList())
        .catch(err => console.log('HUBO UN ERROR!', err))
}