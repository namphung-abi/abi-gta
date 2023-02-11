import * as pc from "playcanvas";

export default class Car extends pc.Entity {
    constructor(app, name, color, speed, acceleration, handling, nitro) {
        super();
        this.app = app;
        this.name = name;
        this.color = color;
        this.speed = speed;
        this.acceleration = acceleration;
        this.handling = handling;
        this.nitro = nitro;
        this._init();
        this.app.on("update", () => {
            console.log("alo");
        }, this);

    }

    _init(){
        this.model = this.app.assets._assets.find((element) => element.name === this.name);
        if (this.model === undefined) {
            alert(`Can't find asset has key ${this.name}`);
            return;
        }
        this.addComponent("model", {
            asset : this.model
        })
        
        this._initMaterial();
    }

    _initMaterial() {
        this.material = new pc.StandardMaterial();
        this.material.diffuse = new pc.Color(1, 0.6, 0);
        this.material.update();
        this.model.meshInstances[0].material = this.material;
    }

    onDisable() {
        this.model.enabled = false;
    }

    onEnable() {
        this.model.enabled = true;
    }

    update(dt) {
        console.log("alo");
    }
}