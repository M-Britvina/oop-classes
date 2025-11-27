import Daemon from "../characters/Daemon";
import { DAEMON }from "../characters/CharacterTypes";

test("Создание персонажа Демона", () => {
    const character = new Daemon("Тарас");
    expect(character).toEqual({name: "Тарас", type: DAEMON, health: 100, level: 1, attack: 10, defence: 40});
});
