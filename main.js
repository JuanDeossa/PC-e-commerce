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
