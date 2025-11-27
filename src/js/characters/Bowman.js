import Character from "./Character";
import { BOWMAN } from "./CharacterTypes";

export default class Bowman extends Character {
    constructor(name) {
        super(name, BOWMAN);
        this.attack = 25;
        this.defence = 25;
    }
}
