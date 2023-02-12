import * as pc from "playcanvas";
import IntroScreen, { SelectCarEvent } from "../screens/introScreen";
import carData from "../../assets/jsons/carData.json";
import Car from "../object/Car";

export default class SelectCarScene extends pc.Entity {
    constructor(app) {
        super();
        this.app = app;
        this.cars = [];
        this.currentCar = 0;
        this._initInput();
        this._initSelectCarScreen();
        this._initCars();
        this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }

    _initInput() {
        this.keyboard = new pc.Keyboard(document.body);
    }
    
    _initCars() {
        carData.forEach((car) => {
            var car = new Car(this.app, car.id, car.name, car.color, car.speed, car.acceleration, car.handling, car.nitro);
            car.setLocalScale(1.5, 1.5, 1.5);
            this.addChild(car);
            this.cars.push(car);
        });

        this.deactiveAllCar();
        this.activeCar();
    }

    _initSelectCarScreen() {
        this.introScreen = new IntroScreen(this.app, this.assetManager);
        this.addChild(this.introScreen);
        this.introScreen.on(SelectCarEvent.Selected, this.onCarSelected, this);
    }

    onCarSelected(texture) {
        this.cars[this.currentCar].changeTexture(texture);
    }

    deactiveAllCar() {
        this.cars.forEach((car) => car.onDisable());
    }

    activeNextCar() {
        this.deactiveAllCar();
        if (this.currentCar >= this.cars.length - 1) {
            this.currentCar = 0;
        }
        else {
            this.currentCar += 1;
        }
        this.activeCar();
    }

    activePreviousCar(){
        this.deactiveAllCar();
        if (this.currentCar === 0) {
            this.currentCar = this.cars.length - 1;
        }
        else {
            this.currentCar -= 1;
        }
      
        this.activeCar();
    }

    activeCar() {
        this.cars[this.currentCar].onEnable();
        this.introScreen.updateCarInfo(this.cars[this.currentCar])
    }

    onKeyDown(event) {
        if(event.key === pc.KEY_RIGHT) {
            this.activeNextCar();
        }

        if (event.key === pc.KEY_LEFT) {
            this.activePreviousCar();
        }
    }

    update(dt) {
        this.cars.forEach((car) => car.update(dt));
    }
}