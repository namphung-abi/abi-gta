import * as pc from "playcanvas";
import assetsData from "../assets/jsons/assetsData.json"

export const AssetManagerEvent = Object.freeze({
    Loaded : "asset-loaded"    
});

export default class AssetManager{
    constructor(app, callbackLoaded) {
        this.app = app;
        this.callbackLoaded = callbackLoaded;
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
                this.callbackLoaded();
           }
        })
    }
}