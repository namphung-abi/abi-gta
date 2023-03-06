import * as pc from "playcanvas";
import TitleAndValue from "../object/UI/titleAndValue";

export const SelectCarEvent = Object.freeze({
    Selected : "car-selected"
});
export default class IntroScreen extends pc.Entity {
    constructor(app) {
        super("intro screen");
        this.app = app;
        this.addComponent("screen", {
            resolution: [1280, 720],
            referenceResolution: [1080, 1920],
            screenSpace: true,
        });
        this.font = this.app.assets._assets.find((element) => element.name === "font");
        this._init();
        this._initButtonTextureList();
        this._initSelectButton();
    }

    _init() {
        this.panel = new pc.Entity();
        this.addChild(this.panel);
        
        this.speed = new TitleAndValue(this.app);
        this.speed.changeTitle("Speed :");
        this.speed.changeValue("600");
        this.panel.addChild(this.speed);
        this.speed.updatePosition(new pc.Vec3(0, 0.2, 0));

        this.acceleration = new TitleAndValue(this.app);
        this.acceleration.changeTitle("Acceleration :");
        this.acceleration.changeValue("5");
        this.acceleration.updatePosition(new pc.Vec3(0, 0.03, 0));
        this.panel.addChild(this.acceleration);

        this.handling = new TitleAndValue(this.app);
        this.handling.changeTitle("Handling :");
        this.handling.changeValue("7");
        this.handling.updatePosition(new pc.Vec3(0, -0.14, 0));
        this.panel.addChild(this.handling);

        this.nitro = new TitleAndValue(this.app);
        this.nitro.changeTitle("Nitro :");
        this.nitro.changeValue("17");
        this.nitro.updatePosition(new pc.Vec3(0, -0.31, 0));
        this.panel.addChild(this.nitro);

        this.carName = new pc.Entity("Tittle");
        this.carName.addComponent("element", {
            type: pc.ELEMENTTYPE_TEXT,
            anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
            pivot: new pc.Vec2(0, 0.5),
            text: "Car01",
            fontSize: 80,
            fontAsset: this.font,
            color: new pc.Color(0, 0, 0, 1)
        });
        this.carName.setLocalPosition(0, 200, 0);
        this.carName.element.text = "Car01".toUpperCase();
        this.panel.addChild(this.carName);
    }

    _initButtonTextureList() {
        this.colorTittle = new pc.Entity("Tittle");
        this.colorTittle.addComponent("element", {
            type: pc.ELEMENTTYPE_TEXT,
            anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
            pivot: new pc.Vec2(0, 0.5),
            text: "Color :",
            fontSize: 50,
            fontAsset: this.font,
            color: new pc.Color(0, 0, 0, 1)
        });
        this.panel.addChild(this.colorTittle);
        this.colorTittle.setLocalPosition(0, -190, 0);

        this.orangeButton = new pc.Entity();
        this.orangeButton.addComponent("button");
        this.orangeButton.addComponent("element", {
            type: pc.ELEMENTTYPE_IMAGE,
            anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
            pivot: new pc.Vec2(0.5, 0.5),
            width: 80,
            height: 80,
            useInput: true,
            color: new pc.Color(0.7, 0.3, 0, 1)
          });
        this.addChild(this.orangeButton);
        this.orangeButton.setPosition(0.1, -0.66, 0);
        // this.orangeButton.setLocalPosition(100, -350, 0);
        this.orangeButton.button.on("click", () => {
            this.fire(SelectCarEvent.Selected, "tex_car_01_B");
        });

        this.blueButton = new pc.Entity();
        this.blueButton.addComponent("button");
        this.blueButton.addComponent("element", {
            type: pc.ELEMENTTYPE_IMAGE,
            anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
            pivot: new pc.Vec2(0.5, 0.5),
            width: 80,
            height: 80,
            color: new pc.Color(0, 0, 0.5, 1),
            useInput: true,
          });
        this.addChild(this.blueButton);
        this.blueButton.setPosition(0.25, -0.66, 0);
        this.blueButton.button.on("click", () => {
            this.fire(SelectCarEvent.Selected, "tex_car_01_A");
        });

        this.grayButton = new pc.Entity();
        this.grayButton.addComponent("button");
        this.grayButton.addComponent("element", {
            type: pc.ELEMENTTYPE_IMAGE,
            anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
            pivot: new pc.Vec2(0.5, 0.5),
            width: 80,
            height: 80,
            color: new pc.Color(0.8, 0.8, 0.8, 1),
            useInput: true,
          });
        this.addChild(this.grayButton);
        this.grayButton.setPosition(0.4, -0.66, 0);
        this.grayButton.button.on("click", () => {
            this.fire(SelectCarEvent.Selected, "tex_car_01_C");
        });
    }

    updateCarInfo(car) {
        this.carName.element.text = car.name.toUpperCase();
        this.speed.changeValue(car.speed);
        this.acceleration.changeValue(car.acceleration);
        this.handling.changeValue(car.handling);
        this.nitro.changeValue(car.nitro);
    }

    _initSelectButton() {
        this.selectButton = new pc.Entity();
        this.selectButton.addComponent("button", {
            imageEntity: this.selectButton,
        });

        this.selectButton.addComponent("element", {
            anchor: [0.82, 0.05, 0.95, 0.12],
            height: 40,
            pivot: [0.5, 0.5],
            type: pc.ELEMENTTYPE_IMAGE,
            width: 175,
            color: new pc.Color(0, 0.4, 1, 1),
            useInput: true,
        });

        this.addChild(this.selectButton);

        this.selectButtonTitle = new pc.Entity();
        this.selectButtonTitle.addComponent("element", {
            anchor: [0.5, 0.5, 0.5, 0.5],
            color: new pc.Color(1, 1, 1),
            fontAsset: this.font,
            fontSize: 36,
            height: 64,
            pivot: [0.5, 0.5],
            text: "CLICK ME",
            type: pc.ELEMENTTYPE_TEXT,
            width: 128,
            wrapLines: true,
        });

        this.selectButton.addChild(this.selectButtonTitle);

    }
}