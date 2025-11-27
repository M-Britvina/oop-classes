import Magician from "../characters/Magician";
import { MAGICIAN } from "../characters/CharacterTypes";

test("Создание персонажа Волшебника", () => {
    const character = new Magician("Вася");
    expect(character).toEqual({name: "Вася", type: MAGICIAN, health: 100, level: 1, attack: 10, defence: 40});
});
