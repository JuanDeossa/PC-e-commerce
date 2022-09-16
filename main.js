class InputDevice{
    static inputDevicesCounter=0
    constructor({inputType,brand}){
        ++InputDevice.inputDevicesCounter;
        this._inputType=inputType;
        this._brand=brand;
    }
    get inputType(){
        return this._inputType
    }
    set inputType(inputType){
        this._inputType=inputType
    }
    get brand(){
        return this._brand
    }
    set brand(brand){
        this._brand=brand
    }
}
class OutputDevice{
    static outputDevicesCounter=0
    constructor({outputType,brand}){
        ++OutputDevice.outputDevicesCounter;
        this._outputType=outputType;
        this._brand=brand;
    }
    get outputType(){
        return this._outputType
    }
    set outputType(outputType){
        this._outputType=outputType
    }
    get brand(){
        return this._brand
    }
    set brand(brand){
        this._brand=brand
    }
}
