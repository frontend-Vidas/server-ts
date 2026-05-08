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
exports.file = void 0;
var promises_1 = require("fs/promises");
var path_1 = require("path");
var url_1 = require("url");
var file = {};
exports.file = file;
/**
 * Sugeneruojamas absoliutus kelias iki nurodyto failo.
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi norimi failai, e.g. `/data/users`
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @returns {string} Absoliutus kelias iki failo
 */
file.fullPath = function (dir, fileName) {
    var __filename = (0, url_1.fileURLToPath)(import.meta.url);
    var __dirname = path_1.default.dirname(__filename);
    return path_1.default.join(__dirname, '../../.data', dir, fileName);
};
file.fullPublicPath = function (trimmedFilePath) {
    var __filename = (0, url_1.fileURLToPath)(import.meta.url);
    var __dirname = path_1.default.dirname(__filename);
    return path_1.default.join(__dirname, '../../public', trimmedFilePath);
};
/**
 * Sukuriamas failas, jei tokio dar nera nurodytoje direktorijoje.
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi norimi failai, pvz.: /data/users
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @param {object} content Objektas (pvz.: {...}), kuri norime irasyti i kuriama faila
 * @returns {Promise<[boolean, string | Error]>} Sekmes atveju - `true`; Klaidos atveju - klaidos pranesimas
 */
file.create = function (dir, fileName, content) { return __awaiter(void 0, void 0, void 0, function () {
    var fileDescriptor, filePath, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileDescriptor = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, 5, 6]);
                filePath = file.fullPath(dir, fileName);
                return [4 /*yield*/, promises_1.default.open(filePath, 'wx')];
            case 2:
                fileDescriptor = _a.sent();
                return [4 /*yield*/, promises_1.default.writeFile(fileDescriptor, JSON.stringify(content))];
            case 3:
                _a.sent();
                return [2 /*return*/, [false, 'OK']];
            case 4:
                error_1 = _a.sent();
                return [2 /*return*/, [true, error_1]];
            case 5:
                if (fileDescriptor) {
                    fileDescriptor.close();
                }
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); };
/**
 * Perskaitomas failo turinys (tekstinis failas).
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi norimi failai, e.g. `/data/users`
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @returns {Promise<[boolean, string | Error]>} Sekmes atveju - failo turinys; Klaidos atveju - klaida
 */
file.read = function (dir, fileName) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath, fileContent, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                filePath = file.fullPath(dir, fileName);
                return [4 /*yield*/, promises_1.default.readFile(filePath, 'utf-8')];
            case 1:
                fileContent = _a.sent();
                return [2 /*return*/, [false, fileContent]];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, [true, error_2]];
            case 3: return [2 /*return*/];
        }
    });
}); };
file.readPublic = function (trimmedFilePath) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath, fileContent, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                filePath = file.fullPublicPath(trimmedFilePath);
                return [4 /*yield*/, promises_1.default.readFile(filePath, 'utf-8')];
            case 1:
                fileContent = _a.sent();
                return [2 /*return*/, [false, fileContent]];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, [true, 'Failas nerastas']];
            case 3: return [2 /*return*/];
        }
    });
}); };
file.readPublicBinary = function (trimmedFilePath) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath, fileContent, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                filePath = file.fullPublicPath(trimmedFilePath);
                return [4 /*yield*/, promises_1.default.readFile(filePath)];
            case 1:
                fileContent = _a.sent();
                return [2 /*return*/, [false, fileContent]];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, [true, 'Failas nerastas']];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * JSON failo turinio atnaujinimas .data folder'yje.
 * @param {string} dir Sub-folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @param {Object} content JavaScript objektas, pvz.: `{name: "Marsietis"}`.
 * @returns {Promise<[boolean, string | Error]>} Pozymis, ar funkcija sekmingai atnaujintas nurodyta faila.
 */
file.update = function (dir, fileName, content) { return __awaiter(void 0, void 0, void 0, function () {
    var fileDescriptor, filePath, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileDescriptor = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, 6, 9]);
                filePath = file.fullPath(dir, fileName);
                return [4 /*yield*/, promises_1.default.open(filePath, 'r+')];
            case 2:
                fileDescriptor = _a.sent();
                return [4 /*yield*/, fileDescriptor.truncate()];
            case 3:
                _a.sent();
                return [4 /*yield*/, promises_1.default.writeFile(fileDescriptor, JSON.stringify(content))];
            case 4:
                _a.sent();
                return [2 /*return*/, [false, 'OK']];
            case 5:
                error_5 = _a.sent();
                return [2 /*return*/, [true, error_5]];
            case 6:
                if (!fileDescriptor) return [3 /*break*/, 8];
                return [4 /*yield*/, fileDescriptor.close()];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}); };
/**
 * JSON failo istrinimas .data folder'yje.
 * @param {string} dir Sub-folder'is esantis .data folder'yje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio.
 * @returns {Promise<[boolean, string | Error]>} Pozymis, ar funkcija sekmingai istrintas nurodyta faila.
 */
file.delete = function (dir, fileName) { return __awaiter(void 0, void 0, void 0, function () {
    var filePath, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                filePath = file.fullPath(dir, fileName);
                return [4 /*yield*/, promises_1.default.unlink(filePath)];
            case 1:
                _a.sent();
                return [2 /*return*/, [false, 'OK']];
            case 2:
                error_6 = _a.sent();
                return [2 /*return*/, [true, error_6]];
            case 3: return [2 /*return*/];
        }
    });
}); };
