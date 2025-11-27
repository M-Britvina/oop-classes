import Character from "./Character";
import { SWORDSMAN } from "./CharacterTypes";

export default class Swordsman extends Character {
    constructor(name) {
        super(name, SWORDSMAN);
        this.attack = 40;
        this.defence = 10;
    }
}
