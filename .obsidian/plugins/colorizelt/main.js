"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
exports.__esModule = true;
exports.addIcons = void 0;
var obsidian_1 = require("obsidian");
var Colorizelt = /** @class */ (function (_super) {
    __extends(Colorizelt, _super);
    function Colorizelt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colorizelt.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                addIcons();
                new obsidian_1.Notice('Plugin "Colorizelt" v0.0.2 load success!');
                //red color
                this.addCommand({
                    id: "color-text-red", name: "Color text in red color",
                    hotkeys: [{ modifiers: ["Shift", "Mod"], key: "1" }],
                    icon: "colorizelt-pen-red",
                    editorCallback: function (editor) {
                        var selection = editor.getSelection();
                        var replaced = "<span style=\"color: red\">".concat(selection, "</span>");
                        var regex = /<span style="color: red">(.*?)<\/span>/g;
                        var matches = Array.from(selection.matchAll(regex));
                        if (matches.length > 0) {
                            matches.forEach(function (match) {
                                selection = selection.replace(match[0], match[1]);
                            });
                            editor.replaceSelection(selection);
                        }
                        else {
                            editor.replaceSelection(replaced);
                        }
                    }
                });
                //yellow color
                this.addCommand({
                    id: "color-text-yellow", name: "Color text in yellow color",
                    hotkeys: [{ modifiers: ["Shift", "Mod"], key: "2" }],
                    icon: "colorizelt-pen-yellow",
                    editorCallback: function (editor) {
                        var selection = editor.getSelection();
                        var replaced = "<span style=\"color: yellow\">".concat(selection, "</span>");
                        var regex = /<span style="color: yellow">(.*?)<\/span>/g;
                        var matches = Array.from(selection.matchAll(regex));
                        if (matches.length > 0) {
                            matches.forEach(function (match) {
                                selection = selection.replace(match[0], match[1]);
                            });
                            editor.replaceSelection(selection);
                        }
                        else {
                            editor.replaceSelection(replaced);
                        }
                    }
                });
                //green color
                this.addCommand({
                    id: "color-text-green", name: "Color text in green color",
                    hotkeys: [{ modifiers: ["Shift", "Mod"], key: "3" }],
                    icon: "colorizelt-pen-green",
                    editorCallback: function (editor) {
                        var selection = editor.getSelection();
                        var replaced = "<span style=\"color: green\">".concat(selection, "</span>");
                        var regex = /<span style="color: green">(.*?)<\/span>/g;
                        var matches = Array.from(selection.matchAll(regex));
                        if (matches.length > 0) {
                            matches.forEach(function (match) {
                                selection = selection.replace(match[0], match[1]);
                            });
                            editor.replaceSelection(selection);
                        }
                        else {
                            editor.replaceSelection(replaced);
                        }
                    }
                });
                //blue color
                this.addCommand({
                    id: "color-text-blue", name: "Color text in blue color",
                    hotkeys: [{ modifiers: ["Shift", "Mod"], key: "4" }],
                    icon: "colorizelt-pen-blue",
                    editorCallback: function (editor) {
                        var selection = editor.getSelection();
                        var replaced = "<span style=\"color: blue\">".concat(selection, "</span>");
                        var regex = /<span style="color: blue">(.*?)<\/span>/g;
                        var matches = Array.from(selection.matchAll(regex));
                        if (matches.length > 0) {
                            matches.forEach(function (match) {
                                selection = selection.replace(match[0], match[1]);
                            });
                            editor.replaceSelection(selection);
                        }
                        else {
                            editor.replaceSelection(replaced);
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    return Colorizelt;
}(obsidian_1.Plugin));
exports["default"] = Colorizelt;
function addIcons() {
    (0, obsidian_1.addIcon)("colorizelt-pen-red", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="red"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
    (0, obsidian_1.addIcon)("colorizelt-pen-yellow", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="yellow"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
    (0, obsidian_1.addIcon)("colorizelt-pen-green", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="green"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
    (0, obsidian_1.addIcon)("colorizelt-pen-blue", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="blue"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
}
exports.addIcons = addIcons;
