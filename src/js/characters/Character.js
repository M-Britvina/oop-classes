import { TYPES } from "./CharacterTypes";

export default class Character {

    constructor(name, type) {
        if (typeof(name) !== "string" || name.length < 2 || name.length > 10) {
            throw new Error("Имя должно быть строкой длины от 2 до 10");
        }
        if (!TYPES.includes(type)) {
            throw new Error("Имя должно быть одним из: " + TYPES);
        }
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

}
