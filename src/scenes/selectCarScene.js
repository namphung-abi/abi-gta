import * as pc from "playcanvas";
import IntroScreen from "../screens/introScreen";
import carData from "../../assets/jsons/carData.json";
import Car from "../object/Car";

export default class SelectCarScene extends pc.Entity {
    constructor(app) {
        super();
        this.app = app;
        this.cars = [];
        this._initCars();
        this._initSelectCarScreen();
    }
    
    _initCars() {
        carData.forEach((car) => {
            var car = new Car(this.app, car.name, car.color, car.speed, car.acceleration, car.handling, car.nitro);
            this.addChild(car);
            this.cars.push(car);
        });

        this.deactiveAllCar();
        this.cars[0].onEnable();
    }

    _initSelectCarScreen() {
        this.introScreen = new IntroScreen(this.app, this.assetManager);
        this.root.addChild(this.introScreen);
    }

    deactiveAllCar() {
        this.cars.forEach((car) => car.onDisable());
    }
}