class Product{
    static productsCounter=0
    constructor({
        type,
        brand,
        price,
    }){
        ++Product.productsCounter;
        this.productNumber=Product.productsCounter;
        this._type=type;
        this._brand=brand;
        this._price=price;
    }
    get type(){
        return this._type
    }
    set type(type){
        this._type=type
    }
    get brand(){
        return this._brand
    }
    set brand(brand){
        this._brand=brand
    }
    get price(){
        return this._price
    }
    set price(price){
        this._price=price
    }
    toString(){
        return `
        Type: ${this.type}
        Brand: ${this.brand}
        Price: ${this.price}
        Product #${this.productNumber}
        `
    }
}
class InputDevice extends Product{
    static inputDevicesCounter=0
    constructor({
        type,
        brand,
        price,
        inputType,
    }){
        super({
            type,
            brand,
            price,
        })
        ++InputDevice.inputDevicesCounter;
        this.inputNumber=InputDevice.inputDevicesCounter;
        this._inputType=inputType;
    }
    get inputType(){
        return this._inputType
    }
    set inputType(inputType){
        this._inputType=inputType
    }
    toString(){
        return `
        ${super.toString()} 
        Input Type: ${this.inputType}
        Input #${this.inputNumber}
        `
    }
}
class OutputDevice extends Product{
    static outputDevicesCounter=0
    constructor({
        type,
        brand,
        price,
        outputType,
    }){
        super({
            type,
            brand,
            price,
        })
        ++OutputDevice.outputDevicesCounter;
        this.outputNumber=OutputDevice.outputDevicesCounter;
        this._outputType=outputType;
    }
    get outputType(){
        return this._outputType
    }
    set outputType(outputType){
        this._outputType=outputType
    }
    toString(){
        return `
        ${super.toString()} 
        Output Type: ${this.outputType}
        Output #${this.outputNumber}
        `
    }
}

const mou1 = new InputDevice({
    type:"Input",
    brand:"Razer",
    price:1200,
    inputType:"Mouse",
});
console.log(mou1.toString());
const mon1 = new OutputDevice({
    type:"Output",
    brand:"Aorus",
    price:1500,
    outputType:"Monitor",
});
console.log(mon1.toString());
