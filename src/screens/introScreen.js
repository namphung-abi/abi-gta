import * as pc from "playcanvas";
import TitleAndValue from "../object/UI/titleAndValue";

export default class IntroScreen extends pc.Entity {
    constructor(app) {
        super("intro screen");
        this.app = app;
        this.addComponent("screen", {
            resolution: [1280, 720],
            referenceResolution: [1080, 1920],
            screenSpace: true,
        });
        this._init();
    }

    _init() {
        this.panel = new pc.Entity();
        // this.panel.setPosition()
        this.addChild(this.panel);
        
        this.speed = new TitleAndValue(this.app);
        this.speed.changeTitle("Speed :");
        this.speed.changeValue("600");
        this.panel.addChild(this.speed);

        this.acceleration = new TitleAndValue(this.app);
        this.acceleration.changeTitle("Acceleration :");
        this.acceleration.changeValue("5");
        this.acceleration.updatePosition(new pc.Vec3(0, -0.16, 0));
        this.panel.addChild(this.acceleration);

        this.handling = new TitleAndValue(this.app);
        this.handling.changeTitle("Handling :");
        this.handling.changeValue("7");
        this.handling.updatePosition(new pc.Vec3(0, -0.32, 0));
        this.panel.addChild(this.handling);

        this.nitro = new TitleAndValue(this.app);
        this.nitro.changeTitle("Nitro :");
        this.nitro.changeValue("17");
        this.nitro.updatePosition(new pc.Vec3(0, -0.48, 0));
        this.panel.addChild(this.nitro);
    }

    updateCarInfo(car) {

    }
}