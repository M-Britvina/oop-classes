import Character from "./Character";
import { MAGICIAN } from "./CharacterTypes";

export default class Magician extends Character {
    constructor(name) {
        super(name, MAGICIAN);
        this.attack = 10;
        this.defence = 40;
    }
}
