import EventEmitter from "EventEmitter";
import * as pc from "playcanvas";
import assetsData from "../assets/jsons/assetsData.json"

export const AssetManagerEvent = Object.freeze({
    Loaded : "asset-loaded"    
});

export default class AssetManager extends EventEmitter{
    constructor(app) {
        super();
        this.app = app;
        this.assets = [];
    }

    load() {
        assetsData.forEach((asset) => {
            var asset = new pc.Asset(asset.name, asset.type, {
                url :`assets/${asset.path}`
            });
            this.assets.push(asset);
        });
        this.assetListLoader = new pc.AssetListLoader(this.assets, this.app.assets);
        this.assetListLoader.load((err, failed) => {
            if (err) {
                console.error(`${failed.length} assets failed to load`);
            } else {
                console.log("Load assets successfully");
                this.emit(AssetManagerEvent.Loaded);
           }
        })
    }

    getAssetByName(name) {
        return this.app.assets._assets.find((element) => element.name === name);
    }
}