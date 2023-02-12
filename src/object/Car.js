import * as pc from "playcanvas";

export default class Car extends pc.Entity {
    constructor(app, id, name, color, speed, acceleration, handling, nitro) {
        super();
        this.app = app;
        this.id = id;
        this.name = name;
        this.color = color;
        this.speed = speed;
        this.acceleration = acceleration;
        this.handling = handling;
        this.nitro = nitro;
        this._init();
    }

    _init(){
        this.model = this.app.assets._assets.find((element) => element.name === this.id);
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
        var texture = this.app.assets._assets.find((element) => element.name === "tex_car_01_C");
        this.material = new pc.StandardMaterial();
        this.material.diffuse = new pc.Color(1, 0.6, 0);
        this.material.diffuseMap = texture.resource;
        this.material.update();
        this.model.meshInstances[0].material = this.material;
    }

    changeTexture(tex) {
        var texture = this.app.assets._assets.find((element) => element.name === tex);
        this.material.diffuseMap = texture.resource;
        this.material.update();
    }

    onDisable() {
        this.model.enabled = false;
    }

    onEnable() {
        this.model.enabled = true;
    }

    update(dt) {
        this.rotate(0 * dt, 30 * dt, 0 * dt);
    }
}