import Bowman from "../characters/Bowman";
import { BOWMAN } from "../characters/CharacterTypes";

test("Создание персонажа Лучника", () => {
    const character = new Bowman("Иван");
    expect(character).toEqual({name: "Иван", type: BOWMAN, health: 100, level: 1, attack: 25, defence: 25});
});
