const {Dealership} = require ("./dealership");

const Customer = function (name, wallet){
    let _name = name;
    let _wallet = wallet;
    let _buyingcar = null;

    this.getNmae = () => _name;
    this.getWallet = () => _wallet;
    this.getBuyingCar = () => _buyingcar;
    this.setName = (name) => _name = name;
    this.setWallet = (wallet) => _wallet =wallet;
    this.setBuyingCar = (car) =>_buyingcar = car;

    this.buyCar = (dealership, car) => {
        this.setBuyingCar(dealership.sellCar(this,car));
    }
}

module.exports = {Customer}