import Character from "./Character";
import { ZOMBIE } from "./CharacterTypes";

export default class Zombie extends Character {
    constructor(name) {
        super(name, ZOMBIE);
        this.attack = 10;
        this.defence = 40;
    }
}
