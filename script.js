'use strict'
const urlCars = '/cars.json';
const select = document.querySelector('.select-item')
const spanCar = document.querySelector('.span-car')

 const getCars = async (url) => {
	return await new Promise((resolve, reject) => {
			fetch(url)
				.then(response => resolve(response.json()))
				.catch(err => reject(console.log('Ошибка', err)))
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

const carSearch = async (data, element) => {
	const valueSelect = element.options[element.selectedIndex].value;
	const response = await data(urlCars)

	const search = response.cars.filter(car => car.brand === valueSelect)

	renderCars(search)
	
}


select.addEventListener('change', () => {
	carSearch(getCars, select)
})
