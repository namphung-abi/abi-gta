import * as pc from "playcanvas";

export default class TitleAndValue extends pc.Entity{
    constructor(app) {
        super();
        this.app = app;
        this.font = this.app.assets._assets.find((element) => element.name === "font");
        if (this.font === undefined) {
            alert(`Can't find asset has key is font`);
        }
        this._init();
    }

    _init() {
        this.addComponent("screen", {
            resolution: [1280, 720],
            referenceResolution: [1080, 1920],
            screenSpace: true,
        });

        this.title = new pc.Entity("Tittle");
        this.title.addComponent("element", {
            type: pc.ELEMENTTYPE_TEXT,
            anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
            pivot: new pc.Vec2(0, 0.5),
            text: "Speed : ",
            fontSize: 50,
            fontAsset: this.font
        });
        this.addChild(this.title);
    
        this.value = new pc.Entity("Value");
        this.value.addComponent("element", {
            type: pc.ELEMENTTYPE_TEXT,
            anchor: new pc.Vec4(0.5, 0.5, 0.5, 0.5),
            pivot: new pc.Vec2(0, 0.5),
            text: "500",
            fontSize: 50,
            fontAsset: this.font
        });
        this.addChild(this.value);
        var currentPosition = this.value.getLocalPosition();
        this.value.setLocalPosition(currentPosition.x + 300 , currentPosition.y, currentPosition.z);
    }

    updatePosition(pos) {
        var titlePosition = this.title.getPosition();
        var valuePosition = this.value.getPosition();

        this.title.setPosition(titlePosition.x + pos.x, titlePosition.y + pos.y, titlePosition.z + pos.z);
        this.value.setPosition(valuePosition.x + pos.x, valuePosition.y + pos.y, valuePosition.z + pos.z);
    }

    changeTitle(title) {
        this.title.element.text = title;
    }

    changeValue(value) {
        this.value.element.text = value;
    }
}