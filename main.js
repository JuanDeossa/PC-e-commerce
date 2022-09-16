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
        Product #${this.productNumber}`
    }
}

class OutputDevice extends Product{
    static outputDevicesCounter=0
    constructor({
        brand,
        price,
        outputType,
    }){
        super({
            brand,
            price,
        })
        ++OutputDevice.outputDevicesCounter;
        this.outputNumber=OutputDevice.outputDevicesCounter;
        this._outputType=outputType;
        super.type="Output Device";
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
        Output #${this.outputNumber}`
    }
}

class InputDevice extends Product{
    static inputDevicesCounter=0
    constructor({
        brand,
        price,
        inputType,
    }){
        super({
            brand,
            price,
        })
        ++InputDevice.inputDevicesCounter;
        this.inputNumber=InputDevice.inputDevicesCounter;
        this._inputType=inputType;
        super.type="Input Device";
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
        Input #${this.inputNumber}`
    }
}

class InnerComponent extends Product{
    static innerComponentsCounter=0
    constructor({
        brand,
        price,
        innerType,
    }){
        super({
            brand,
            price,
        })
        ++InnerComponent.innerComponentsCounter;
        this.innerNumber=InnerComponent.innerComponentsCounter;
        this._innerType=innerType;
        super.type="Inner Component";
    }
    get innerType(){
        return this._innerType
    }
    set innerType(innerType){
        this._innerType=innerType
    }
    toString(){
        return `
        ${super.toString()} 
        Inner Type: ${this.innerType}
        Inner #${this.innerNumber}`
    }
}

class OuterComponent extends Product{
    static outerComponentsCounter=0
    constructor({
        brand,
        price,
        outerType,
    }){
        super({
            brand,
            price,
        })
        ++OuterComponent.outerComponentsCounter;
        this.outerNumber=OuterComponent.outerComponentsCounter;
        this._outerType=outerType;
        super.type="Outer Component";
    }
    get outerType(){
        return this._outerType
    }
    set outerType(outerType){
        this._outerType=outerType
    }
    toString(){
        return `
        ${super.toString()} 
        Outer Type: ${this.outerType}
        Outer #${this.outerNumber}`
    }
}

class Mouse extends InputDevice{
    static mousesCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Mouse.mousesCounter;
        this.mouseNumber=Mouse.mousesCounter;
        this._ref=ref;
        super.inputType="Mouse";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
    toString(){
        return `
        ${super.toString()}
        Ref: ${this.ref}
        Mouse #${this.mouseNumber}`
    }
}

class Keyboard extends InputDevice{
    static keyboardsCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Keyboard.keyboardsCounter;
        this.keyboardNumber=Keyboard.keyboardsCounter;
        this._ref=ref;
        super.inputType="keyboard";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
    toString(){
        return `
        ${super.toString()}
        Ref: ${this.ref}
        Keyboard #${this.keyboardNumber}`
    }
}

class Monitor extends OutputDevice{
    static monitorsCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Monitor.monitorsCounter;
        this.monitorNumber=Monitor.monitorsCounter;
        this._ref=ref;
        super.outputType="Monitor";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
    toString(){
        return `
        ${super.toString()}
        Ref: ${this.ref}
        Monitor #${this.monitorNumber}`
    }
}