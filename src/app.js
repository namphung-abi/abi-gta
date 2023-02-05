import * as pc from "playcanvas";

export default class App extends pc.Application {
    constructor(canvas) {
        super(canvas)
        this._init();
        this._initCamera();
        this._initLight();
        this._initBox();
        this.on("update", this.update.bind(this));
        this.start();
    }

    _init() {
        this.systems.rigidbody.gravity.set(0, -9.81, 0);
        this.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
        this.setCanvasResolution(pc.RESOLUTION_AUTO);
        window.addEventListener("resize", () => this.resizeCanvas());
    }

    update(dt) {
        this.box.rotate(10 * dt, 20 * dt, 30 * dt)
    }

    _initCamera() {
        this.camera = new pc.Entity("camera");
        this.camera.addComponent("camera", {
            clearColor: new pc.Color(0.5, 0.6, 0.9),
        });
    
        this.root.addChild(this.camera);
        this.camera.setPosition(0, 0, 3);
    }

    _initLight() {
        this.light = new pc.Entity("light");
        this.light.addComponent("light");
        this.root.addChild(this.light);
        this.light.setEulerAngles(45, 0, 0);
    }

    _initBox() {
        this.box = new pc.Entity("cube");
        this.box.addComponent("render", {
            type: "box",
        });
        this.root.addChild(this.box);
    }
}