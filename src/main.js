"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_2 = require("electron");
var mainWindow = null;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.loadFile("index.html");
    mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
electron_2.app.on("ready", createWindow);
electron_2.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_2.app.quit();
    }
});
electron_2.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
