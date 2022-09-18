
class Product{
    static productsCounter=0
    constructor({
        name,
        type,
        brand,
        price,
    }){
        ++Product.productsCounter;
        this.productNumber=Product.productsCounter;
        this._name=name;
        this._type=type;
        this._brand=brand;
        this._price=price;
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name=name
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
}

class OutputDevice extends Product{
    static outputDevicesCounter=0
    constructor({
        name,
        brand,
        price,
        outputType,
    }){
        super({
            name,
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
}

class InputDevice extends Product{
    static inputDevicesCounter=0
    constructor({
        name,
        brand,
        price,
        inputType,
    }){
        super({
            name,
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
}

class InnerComponent extends Product{
    static innerComponentsCounter=0
    constructor({
        name,
        brand,
        price,
        innerType,
    }){
        super({
            name,
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
}

class OuterComponent extends Product{
    static outerComponentsCounter=0
    constructor({
        name,
        brand,
        price,
        outerType,
    }){
        super({
            name,
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
        super.name="Mouse";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
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
        super.name="keyboard";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
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
        super.name="Monitor";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Ram extends InnerComponent{
    static ramsCounter=0
    constructor({
        brand,
        price,
        ref,
        speed,
    }){
        super({
            brand,
            price,
        })
        ++Ram.ramsCounter;
        this.ramNumber=Ram.ramsCounter;
        this._ref=ref;
        this._speed=speed;
        super.innerType="Ram";
        super.name="Ram";
    }
    get speed(){
        return this._speed
    }
    set speed(speed){
        this._speed=speed
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Gpu extends InnerComponent{
    static gpusCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Gpu.gpusCounter;
        this.gpuNumber=Gpu.gpusCounter;
        this._ref=ref;
        super.innerType="gpu";
        super.name="gpu";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Cpu extends InnerComponent{
    static cpusCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Cpu.cpusCounter;
        this.cpuNumber=Cpu.cpusCounter;
        this._ref=ref;
        super.innerType="cpu";
        super.name="cpu";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Board extends InnerComponent{
    static boardsCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Board.boardsCounter;
        this.boardNumber=Board.boardsCounter;
        this._ref=ref;
        super.innerType="board";
        super.name="board";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Psu extends InnerComponent{
    static psusCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Psu.psusCounter;
        this.psuNumber=Psu.psusCounter;
        this._ref=ref;
        super.innerType="psu";
        super.name="psu";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class StorageDrive extends InnerComponent{
    static storageDrivesCounter=0
    constructor({
        brand,
        price,
        ref,
        driveType,
    }){
        super({
            brand,
            price,
        })
        ++StorageDrive.storageDrivesCounter;
        this.storageDriveNumber=StorageDrive.storageDrivesCounter;
        this._ref=ref;
        this._driveType=driveType
        super.innerType="storageDrive";
        super.name=this.driveType;
    }
    get driveType(){
        return this._driveType
    }
    set driveType(driveType){
        this._driveType=driveType
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Case extends OuterComponent{
    static casesCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Case.casesCounter;
        this.caseNumber=Case.casesCounter;
        this._ref=ref;
        super.outerType="case";
        super.name="case";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Ups extends OuterComponent{
    static upssCounter=0
    constructor({
        brand,
        price,
        ref,
    }){
        super({
            brand,
            price,
        })
        ++Ups.upssCounter;
        this.upsNumber=Ups.upssCounter;
        this._ref=ref;
        super.outerType="ups";
        super.name="ups";
    }
    get ref(){
        return this._ref
    }
    set ref(ref){
        this._ref=ref
    }
}

class Pc{
    static pcCounter=0
    constructor({
        board,
        cpu,
        gpu,
        psu,
        ram,
        caSe,
        monitor,
        keyboard,
        mouse,
        ups,
    }){
        ++Pc.pcCounter;
        this._pcNumber=Pc.pcCounter;
        this._pcID="PC-"+this._pcNumber
        this._board=board;
        this._cpu=cpu;
        this._gpu=gpu;
        this._psu=psu;
        this._ram=ram;
        this._caSe=caSe;
        this._monitor=monitor;
        this._keyboard=keyboard;
        this._mouse=mouse;
        this._ups=ups;
        this._data=[this._board,this._cpu,this._gpu,this._psu,this._ram,this._caSe,this._monitor,this._keyboard,this._mouse,this._ups];
    }
    get pcNumber(){
        return this._pcNumber
    }
    set pcNumber(pcNumber){
        this._pcNumber=pcNumber
    }
    get pcID(){
        return this._pcID
    }
    set pcID(pcID){
        this._pcID=pcID
    }
    get board(){
        return this._board
    }
    get cpu(){
        return this._cpu
    }
    get gpu(){
        return this._gpu
    }
    get psu(){
        return this._psu
    }
    get ram(){
        return this._ram
    }
    get caSe(){
        return this._caSe
    }
    get monitor(){
        return this._monitor
    }
    get keyboard(){
        return this._keyboard
    }
    get mouse(){
        return this._mouse
    }
    get ups(){
        return this._ups
    }
    set board(board){
        this._board=board
    }
    set cpu(cpu){
        this._cpu=cpu
    }
    set gpu(gpu){
        this._gpu=gpu
    }
    set psu(psu){
        this._psu=psu
    }
    set ram(ram){
        this._ram=ram
    }
    set caSe(caSe){
        this._caSe=caSe
    }
    set monitor(monitor){
        this._monitor=monitor
    }
    set keyboard(keyboard){
        this._keyboard=keyboard
    }
    set mouse(mouse){
        this._mouse=mouse
    }
    set ups(ups){
        this._ups=ups
    }
    get data(){
        return this._data
    }
    totalPrice(){
        let Total = [];
        this.data.forEach(i=>Total.push(i.price));
        Total = Total.reduce((acc,i)=>acc+i,0);
        return Total.toFixed(2)
    }
    showCombo(){
        let Total = "";
        // Total=Total+this.pcID+"\n";
        this.data.forEach(i=>Total=Total+([i.name+": "+i.brand+i.ref+ " $"+i.price])+"\n");
        Total = Total+"\nSubTotal: $"+this.totalPrice()+"\n";
        return Total
    }
}

class Order{
    static orderCounter=0
    static maxPc = 3
    constructor(){
        this.ordernumber=++Order.orderCounter
        this.pcArray=[];
    }
    addPc(pc){
        if (this.pcArray.length<Order.maxPc) {
            this.pcArray.push(pc)
        }
        else{
            console.log(`you can't add more productos, the max number is ${Order.maxPc}`)
        }
    }
    totalOrderPrice(){
        let Total = [];
        this.pcArray.forEach(i=>Total.push(i.totalPrice()))
        Total = Total.map(i=>Number(i))
        Total = Total.reduce((acc,i)=>acc+i,0)
        return Total
    }
    showOrder(){
        this.pcArray.forEach(i=>(console.log(i.showCombo())))
        console.log("Total: "+this.totalOrderPrice());
        return ""
    }
}

// Product.

const boardX570 = new Board({
    brand:"Gigabyte Aorus",
    price:168,
    ref:"X-570",
});
const boardZ690 = new Board({
    brand:"ASUS ROG Strix",
    price:429.99,
    ref:"Z-690-E",
});
const cpuR7_5800X = new Cpu({
    brand:"AMD",
    price:257,
    ref:"Ryzen 7-5800X",
});
const cpui9_12900K = new Cpu({
    brand:"Intel",
    price:588,
    ref:"i9-12900K",
});
const gpuRTX3090Ti = new Gpu({
    brand:"Msi suprimX",
    price:1099,
    ref:"RTX 3090ti",
});
const gpuRTX3080TiRog = new Gpu({
    brand:"ASUS ROG Strix",
    price:1020,
    ref:"RTX 3080ti",
});
const gpuRTX3080Ti = new Gpu({
    brand:"Msi suprimX",
    price:999,
    ref:"RTX 3080ti",
});
const ramCorsair32 = new Ram({
    brand:"Corsair Dominator Platinum",
    price:209.99,
    ref:"32GB (4x8GB)",
    speed:3600,
});
const psuSegotep750W80pG= new Psu({
    brand:"Segotep",
    price:99,
    ref:"750W 80+ Gold",
});
const caseXpgBC= new Case({
    brand:"Xpg",
    price:139,
    ref:"Battle Cruiser",
});
const monitorSceptre4K= new Monitor({
    brand:"Sceptre",
    price:499,
    ref:"C408B-QWN168W",
});
const keyboardRazerBW= new Keyboard({
    brand:"Razer",
    price:119,
    ref:"Black Widow",
});
const mouseRazerViper= new Mouse({
    brand:"Razer",
    price:142,
    ref:"Viper V2 Pro",
});
const upsApc700vA= new Ups({
    brand:"Apc",
    price:110,
    ref:"Br700g",
});
const storageDriveSsd1TB = new StorageDrive({
    brand:"Samsung",
    price:100,
    ref:"970 EVO plus 1TB",
    driveType:"SSD",
});

const pcAmd_A = new Pc({
    board:boardX570,
    cpu:cpuR7_5800X,
    gpu:gpuRTX3090Ti,
    psu:psuSegotep750W80pG,
    ram:ramCorsair32,
    caSe:caseXpgBC,
    monitor:monitorSceptre4K,
    keyboard:keyboardRazerBW,
    mouse:mouseRazerViper,
    ups:upsApc700vA,
});
const pcintel_A = new Pc({
    board:boardZ690,
    cpu:cpui9_12900K,
    gpu:gpuRTX3090Ti,
    psu:psuSegotep750W80pG,
    ram:ramCorsair32,
    caSe:caseXpgBC,
    monitor:monitorSceptre4K,
    keyboard:keyboardRazerBW,
    mouse:mouseRazerViper,
    ups:upsApc700vA,
});
const pcAmd_B = new Pc({
    board:boardX570,
    cpu:cpuR7_5800X,
    gpu:gpuRTX3080Ti,
    psu:psuSegotep750W80pG,
    ram:ramCorsair32,
    caSe:caseXpgBC,
    monitor:monitorSceptre4K,
    keyboard:keyboardRazerBW,
    mouse:mouseRazerViper,
    ups:upsApc700vA,
});
const pcintel_B = new Pc({
    board:boardZ690,
    cpu:cpui9_12900K,
    gpu:gpuRTX3080TiRog,
    psu:psuSegotep750W80pG,
    ram:ramCorsair32,
    caSe:caseXpgBC,
    monitor:monitorSceptre4K,
    keyboard:keyboardRazerBW,
    mouse:mouseRazerViper,
    ups:upsApc700vA,
});