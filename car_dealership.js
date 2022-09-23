const { Customer } = require("./customer");

const Car = function(manufacturer, price, engine_type) {
    let _manufacturer = manufacturer;
    let _price = price;
    let _engine_type = engine_type;

    this.getManufacturer = () => _manufacturer;
    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.getPrice = () =>_price;
    this.setPrice = (price) => _price =price;
    this.getEngineType = () => _engine_type;
    this.setEngineType = (engine_type) => _engine_type = engine_type;
}

module.exports = {Car}

const Dealership = function(stock, capacity){
    let _stock=[];
    let _capacity = capacity;

    this.getStock=()=> _stock;
    this.setStock = (stock) => _stock = stock;
    this.getCapacity = () => _capacity;
    this.setCapacity = (capacity) => _capacity = capacity;

    this.updatedStock = () => _stock.length;
    this.addCarToStock = (car) => {
        if(_stock.length < _capacity){
            _stock.push(car);
        }
    }

    this.getManufacturer = () => _stock.map(this.getManufacturer());
    this.getCarsByManufacturer = (type,value) => {
        if(type === 'manufacturer'){
            return _stock.filter(car => car.getManufacturer() === value);
        }
    }

    this.getInStockValue = () => _stock.reduce((totalValue) => totalValue += Car.getPrice());

    this.sellCar = (customer, car) =>{
        if(customer.getWallet() >= car.getPrice()){
            customer.setWallet(customer.getWallet()- car.getPrice());

            const sellingCar = this.getStock().indexOf(car);
            return this.getStock().splice(sellingCar,1);
        }
        console.log("See you next time");
    }

}

module.exports = {Dealership}
