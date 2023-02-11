import * as pc from "playcanvas";
import AssetManager, { AssetManagerEvent } from "./assetManager";
import SelectCarScene from "./scenes/selectCarScene";

export default class App extends pc.Application {
    constructor(canvas) {
        super(canvas)
        this._init();
        this._initCamera();
        this._initLight();
        this._initAssetManager();
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
        // this.selectCarScene.update();
    }

    _initCamera() {
        this.camera = new pc.Entity("camera");
        this.camera.addComponent("camera", {
            clearColor: new pc.Color(0.5, 0.6, 0.9),
        });
        this.root.addChild(this.camera);
        this.camera.setPosition(0.6, 0.4, 2);
    }

    _initLight() {
        this.light = new pc.Entity("light");
        this.light.addComponent("light");
        this.root.addChild(this.light);
        this.light.setEulerAngles(45, 0, 0);
    }

    _initAssetManager() {
        this.assetManager = new AssetManager(this, this.loadSelectCarScene.bind(this));
        this.assetManager.load();
    }

    loadSelectCarScene() {
        this.selectCarScene = new SelectCarScene(this);
        this.root.addChild(this.selectCarScene);
    }
}