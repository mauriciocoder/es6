class Car {
    constructor(model) {
        this._model = model
    }

    set model(model) {
        console.log('set called')
        this._model = model
    }

    get model() {
        console.log('get called')
        return this._model
    }
}

var car = new Car('onyx')
car.model = 'fiesta'
console.log(car.model)