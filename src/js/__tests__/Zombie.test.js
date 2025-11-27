import Zombie from "../characters/Zombie";
import { ZOMBIE } from "../characters/CharacterTypes";

test("Создание персонажа Зомби", () => {
    const character = new Zombie("Рома");
    expect(character).toEqual({name: "Рома", type: ZOMBIE, health: 100, level: 1, attack: 10, defence: 40});
});
