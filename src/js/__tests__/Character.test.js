import Character from "../characters/Character";
import { TYPES } from "../characters/CharacterTypes";

describe("Тестируем Character", () => {
    test("Создание персонажа с валидными данными", () => {
        const character = new Character("Вася", "Swordsman");
        expect(character).toEqual({name: "Вася", type: "Swordsman", health: 100, level: 1});
    });
    test("Ошибка если имя короче 2 символов", () => {
        expect(() => new Character("В", "Swordsman")).toThrow("Имя должно быть строкой длины от 2 до 10");
    });
    test("Ошибка если имя длиннее 10 символов", () => {
        expect(() => new Character("ВасилийВасилий", "Swordsman")).toThrow("Имя должно быть строкой длины от 2 до 10");
    });
    test("Ошибка если недопустимый тип", () => {
        expect(() => new Character("Василий", "Wizard")).toThrow("Имя должно быть одним из: " + TYPES);
    });
});
