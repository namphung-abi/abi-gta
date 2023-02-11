import * as pc from "playcanvas";
import { debug } from "webpack";
import AssetManager from "../assetManager";

export default class IntroScreen extends pc.Entity {
    constructor(app, assetManager) {
        super("intro screen");
        this.app = app;
        this.assetManager = assetManager;
        this.addComponent("screen", {
            resolution: [1280, 720],
            referenceResolution: [1080, 1920],
            screenSpace: true,
        });
        // this._init();
    }

    _init() {
        // const button = new pc.Entity("button");
        // button.addComponent("button", {
        //     imageEntity: button,
        // });
        // this.txtHealth = new pc.Entity("Text Health");
        // this.txtHealth.addComponent("element", {
        //     type: pc.ELEMENTTYPE_TEXT,
        //     anchor: pc.Vec4.ZERO,
        //     pivot: pc.Vec2.ZERO,
        //     text: "100",
        //     fontSize: 80,
        //     fontAsset: this.assetManager.getAssetByName("font"),
        // })
        // console.log(this.assetManager.getAssetByName("font"));
        // this.addChild(this.txtHealth)

        // button.addComponent("element", {
        //     anchor: [0.5, 0.5, 0.5, 0.5],
        //     height: 40,
        //     pivot: [0.5, 0.5],
        //     type: pc.ELEMENTTYPE_IMAGE,
        //     width: 175,
        //     useInput: true,
        // });

        // this.addChild(button);

        // Create a label for the button
        // const label = new pc.Entity("label");
        // label.addComponent("element", {
        //     anchor: [0.5, 0.5, 0.5, 0.5],
        //     color: new pc.Color(0, 0, 0),
        //     fontAsset: this.assetManager.getAssetByName("font"),
        //     fontSize: 32,
        //     height: 64,
        //     pivot: [0.5, 0.5],
        //     text: "CLICK ME",
        //     type: pc.ELEMENTTYPE_TEXT,
        //     width: 128,
        //     wrapLines: true,
        // });

        // this.addChild(label);
    }
}