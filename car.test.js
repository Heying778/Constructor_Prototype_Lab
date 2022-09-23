const {Car} = require ('./car_dealership');


    let car1 = new Car ("Audi", 3, 'V6');
    let car2 = new Car ("BMW", 4, 'V8');
    let car3 = new Car ("Toyota", 5, 'V10');


test("can get manufacturer",()=>{
    expect(car1.getManufacturer()).toBe("Audi");
})
test("can set manufacturer",()=>{
    car2.setManufacturer('Honda')
    expect(car2.getManufacturer()).toBe("Honda");
})

test("can get price",()=>{
    expect(car1.getPrice()).toBe(3);
})
test("can set price",()=>{
    car2.setManufacturer(7)
    expect(car2.getManufacturer()).toBe(7);
})

test("can get engine type",()=> {
    expect(car3.getEngineType()).toBe('V10');
})
test("can set engine type",()=>{
    car3.setEngineType('V6')
    expect(car3.getEngineType()).toBe('V6');
})