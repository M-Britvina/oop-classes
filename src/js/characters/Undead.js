import Character from "./Character";
import { UNDEAD } from "./CharacterTypes";

export default class Undead extends Character {
    constructor(name) {
        super(name, UNDEAD);
        this.attack = 25;
        this.defence = 25;
    }
}
