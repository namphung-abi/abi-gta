const { default: App } = require("./app");

const canvas = document.getElementById("canvas");

window.onload = () => {
    const app = new App(canvas);
}