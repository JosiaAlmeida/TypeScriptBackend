"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./Controller/UserController"));
var router = express_1.Router();
router.get("/", UserController_1.default.index);
router.post("/create", UserController_1.default.create);
exports.default = router;
