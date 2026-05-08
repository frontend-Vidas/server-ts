"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_js_1 = require("./lib/server.js");
console.clear();
var app = {};
app.init = function () {
    // susikurti reikiamus/trukstamus folders & files
    // atsinaujinti informcija
    // duombaze:
    // - prisijungti
    // - pasiruosti struktura
    // - surasyti pradinius duomenis
    // paleisti servrio logika
    server_js_1.server.init();
    // laike pasikartojantys procesai:
    // - isivalyti nereikalingus files/info
    // - atnaujinti files/info
    // - backup darymas
};
app.init();
exports.default = app;
