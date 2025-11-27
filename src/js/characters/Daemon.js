import Character from "./Character";
import { DAEMON } from "./CharacterTypes";

export default class Daemon extends Character {
    constructor(name) {
        super(name, DAEMON);
        this.attack = 10;
        this.defence = 40;
    }
}
