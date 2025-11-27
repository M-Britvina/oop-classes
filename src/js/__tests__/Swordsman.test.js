import Swordsman from "../characters/Swordsman";
import { SWORDSMAN } from "../characters/CharacterTypes";

test("Создание персонажа Мечника", () => {
    const character = new Swordsman("Петр");
    expect(character).toEqual({name: "Петр", type: SWORDSMAN, health: 100, level: 1, attack: 40, defence: 10});
});
