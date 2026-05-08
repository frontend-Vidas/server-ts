"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var node_http_1 = require("node:http");
//import { text } from 'node:stream/consumers';
var file_js_1 = require("./file.js");
var server = {};
exports.server = server;
server.httpServer = node_http_1.default.createServer(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var socket, encryption, ssl, baseURL, parsedURL, httpMethod, trimmedPath, textFileExtensions, binaryFileExtensions, fileExtension, isTextFile, isBinaryFile, isAPI, isPage, MIMES, responseContent, _a, err_1, msg_1, _b, err_2, msg_2, fileResponse_1, err_3, msg_3;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                socket = req.socket;
                encryption = socket.encryption;
                ssl = encryption !== undefined ? 's' : '';
                baseURL = "https".concat(ssl, "://").concat(req.headers.host);
                parsedURL = new URL((_c = req.url) !== null && _c !== void 0 ? _c : '', baseURL);
                httpMethod = req.method ? req.method.toLowerCase() : 'get';
                trimmedPath = parsedURL.pathname
                    .replace(/^\/+|\/+$/g, '')
                    .replace(/\/\/+/g, '/');
                textFileExtensions = ['css', 'js', 'svg', 'webmanifest'];
                binaryFileExtensions = ['png', 'jpg', 'jpeg', 'webp', 'ico', 'eot', 'ttf', 'woff', 'woff2', 'otf'];
                fileExtension = trimmedPath.slice(trimmedPath.lastIndexOf('.') + 1);
                isTextFile = textFileExtensions.includes(fileExtension);
                isBinaryFile = binaryFileExtensions.includes(fileExtension);
                isAPI = trimmedPath.startsWith('api/');
                isPage = !isTextFile && !isBinaryFile && !isAPI;
                MIMES = {
                    html: 'text/html',
                    css: 'text/css',
                    js: 'text/javascript',
                    json: 'application/json',
                    txt: 'text/plain',
                    svg: 'image/svg+xml',
                    xml: 'application/xml',
                    ico: 'image/vnd.microsoft.icon',
                    jpeg: 'image/jpeg',
                    jpg: 'image/jpeg',
                    png: 'image/png',
                    webp: 'font/webp',
                    woff2: 'font/woff2',
                    woff: 'font/woff',
                    ttf: 'font/ttf',
                    webmanifest: 'application/manifest+json',
                };
                responseContent = 'ERROR: neturiu tai, ko tu nori...';
                if (!isTextFile) return [3 /*break*/, 2];
                return [4 /*yield*/, file_js_1.file.readPublic(trimmedPath)];
            case 1:
                _a = _d.sent(), err_1 = _a[0], msg_1 = _a[1];
                res.writeHead(err_1 ? 404 : 200, {
                    'Content-Type': MIMES[fileExtension],
                    'cache-control': "max-age=60",
                });
                if (err_1) {
                    responseContent = msg_1;
                }
                else {
                    responseContent = msg_1;
                }
                _d.label = 2;
            case 2:
                if (!isBinaryFile) return [3 /*break*/, 4];
                return [4 /*yield*/, file_js_1.file.readPublicBinary(trimmedPath)];
            case 3:
                _b = _d.sent(), err_2 = _b[0], msg_2 = _b[1];
                res.writeHead(err_2 ? 404 : 200, {
                    'Content-Type': MIMES[fileExtension],
                    'cache-control': "max-age=60",
                });
                if (err_2) {
                    responseContent = msg_2;
                }
                else {
                    responseContent = msg_2;
                }
                _d.label = 4;
            case 4:
                if (isAPI) {
                    responseContent = 'API DUOMENYS';
                }
                if (!isPage) return [3 /*break*/, 8];
                return [4 /*yield*/, file_js_1.file.read('../pages', trimmedPath + '.html')];
            case 5:
                fileResponse_1 = _d.sent();
                err_3 = fileResponse_1[0], msg_3 = fileResponse_1[1];
                if (!err_3) return [3 /*break*/, 7];
                return [4 /*yield*/, file_js_1.file.read('../pages', '404.html')];
            case 6:
                fileResponse_1 = _d.sent();
                err_3 = fileResponse_1[0];
                msg_3 = fileResponse_1[1];
                _d.label = 7;
            case 7:
                res.writeHead(err_3 ? 404 : 200, {
                    'Content-Type': MIMES.html,
                });
                responseContent = msg_3;
                _d.label = 8;
            case 8: return [2 /*return*/, res.end(responseContent)];
        }
    });
}); });
server.init = function () {
    server.httpServer.listen(4410, function () {
        console.log('Serveris sukasi ant http://localhost:4410');
    });
};
