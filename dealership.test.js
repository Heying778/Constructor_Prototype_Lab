const {Dealership} = require ('./car_dealership');
const {Car} = require ('./car_dealership');

beforeEach(()=>{
let car1 = new Car ("Audi", 3, 'V6');
let car2 = new Car ("BMW", 4, 'V8');
let car3 = new Car ("Toyota", 5, 'V10');
let dealership = new Dealership ("BWM Motor",20)

dealership.addCarToStock(car2);

})

test('Can add car to stock',() => {
    dealership.addCarToStock(car1);
    expect(dealership.getStock()).toBe(2);
})