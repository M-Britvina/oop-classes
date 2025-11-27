import Undead from "../characters/Undead";
import { UNDEAD } from "../characters/CharacterTypes";

test("Создание персонажа Лучника", () => {
    const character = new Undead("Vasya");
    expect(character).toEqual({name: "Vasya", type: UNDEAD, health: 100, level: 1, attack: 25, defence: 25});
});
