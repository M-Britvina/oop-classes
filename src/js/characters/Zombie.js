import Character from "./Character";
import { ZOMBIE } from "./CharacterTypes";

export default class Zombie extends Character {
    constructor(name) {
        super(name, ZOMBIE);
        this.attack = 40;
        this.defence = 10;
    }
}
