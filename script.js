'use strict'
const urlCars = '/cars.json';
const select = document.querySelector('.select-item')
const spanCar = document.querySelector('.span-car')

 const getCars = async (url) => {
	return await new Promise((resolve, reject) => {
			fetch(url)
				.then(response => resolve(response.json()))
				.catch(err => reject(err))
	})

} 

const renderCars = (data) => {
	const spanCar = document.querySelector('.span-car')
	spanCar.innerHTML = ''
	console.log(data)
	data.forEach(car => {
		spanCar.innerHTML = `Тачка: ${car.brand}</br>
		Модель авто: ${car.model}</br>
		Цена авто: ${car.price}$</br>
		`
	})
	
}

const carSearch = async (data, value) => {
	const response = await data(urlCars)

	const search = response.cars.filter(car => car.brand === value)
	
	renderCars(search)
	
}


select.addEventListener('change', () => {
	const selectValue = select.options[select.selectedIndex].value;
	carSearch(getCars, selectValue)
})
