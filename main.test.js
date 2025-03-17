import { describe, test, expect } from "bun:test";
import {
  maiorNumero,
  verificarParOuImpar,
  diaDaSemana,
  somarLista,
  contarPalavras,
  atualizarPropriedade,
  listarChaves,
  saudacaoPorHora,
} from "./main.js";

// Teste para a função maiorNumero
describe("maiorNumero", () => {
  test("deve retornar o índice do maior número da lista", () => {
    expect(maiorNumero([1, 3, 5, 7, 2])).toBe(3);
    expect(maiorNumero([10, 3, 5, 7, 2])).toBe(0);
  });
  test("deve retornar null para lista vazia", () => {
    expect(maiorNumero([])).toBe(null);
  });
  test("deve retornar null para entrada inválida", () => {
    expect(maiorNumero("não é uma lista")).toBe(null);
  });
});

// Teste para a função verificarParOuImpar
describe("verificarParOuImpar", () => {
  test('deve retornar "Par" para números pares', () => {
    expect(verificarParOuImpar(4)).toBe("Par");
  });
  test('deve retornar "Ímpar" para números ímpares', () => {
    expect(verificarParOuImpar(7)).toBe("Ímpar");
  });
  test("deve retornar null para entradas inválidas", () => {
    expect(verificarParOuImpar("não é um número")).toBe(null);
  });
});

// Teste para a função diaDaSemana
describe("diaDaSemana", () => {
  test("deve retornar o dia correto", () => {
    expect(diaDaSemana(1)).toBe("Domingo");
    expect(diaDaSemana(5)).toBe("Quinta-feira");
  });
  test('deve retornar "Número inválido" para números fora do intervalo', () => {
    expect(diaDaSemana(0)).toBe("Número inválido");
    expect(diaDaSemana(8)).toBe("Número inválido");
  });
});

// Teste para a função somarLista
describe("somarLista", () => {
  test("deve somar os números da lista", () => {
    expect(somarLista([1, 2, 3, 4])).toBe(10);
  });
  test("deve retornar 0 para lista vazia", () => {
    expect(somarLista([])).toBe(0);
  });
  test("deve retornar null para entradas inválidas", () => {
    expect(somarLista("não é uma lista")).toBe(null);
  });
});

// Teste para a função contarPalavras
describe("contarPalavras", () => {
  test("deve contar a quantidade de palavras na string", () => {
    expect(contarPalavras("jesiel viana da silva")).toBe(4);
  });
  test("deve retornar 1 para strings com uma palavra", () => {
    expect(contarPalavras("jesiel")).toBe(1);
  });
  test("deve retornar 0 para strings vazias", () => {
    expect(contarPalavras(" ")).toBe(0);
  });
  test("deve retornar null para entradas inválidas", () => {
    expect(contarPalavras(12345)).toBe(null);
  });
});

// Teste para a função atualizarPropriedade
describe("atualizarPropriedade", () => {
  test("deve atualizar uma propriedade existente", () => {
    const objeto = { nome: "João", idade: 25 };
    expect(atualizarPropriedade(objeto, "idade", 30)).toEqual({
      nome: "João",
      idade: 30,
    });
  });
  test("deve criar um nova propriedade se a propriedade não existir", () => {
    const objeto = { nome: "João" };
    expect(atualizarPropriedade(objeto, "altura", 1.8)).toEqual({
      nome: "João",
      altura: 1.8,
    });
  });
});

// Teste para a função listarChaves
describe("listarChaves", () => {
  test("deve retornar todas as chaves do objeto", () => {
    const objeto = { nome: "João", idade: 25, cidade: "Picos" };
    expect(listarChaves(objeto)).toEqual(["nome", "idade", "cidade"]);
  });
  test("deve retornar null para objetos inválidos", () => {
    expect(listarChaves(null)).toBe(null);
    expect(listarChaves(123)).toBe(null);
  });
});

// Teste para a função saudacaoPorHora
describe("saudacaoPorHora", () => {
  test('deve retornar "Bom dia!" para horas entre 0 e 11', () => {
    expect(saudacaoPorHora(1)).toBe("Bom dia!");
    expect(saudacaoPorHora(8)).toBe("Bom dia!");
  });
  test('deve retornar "Boa tarde!" para horas entre 12 e 17', () => {
    expect(saudacaoPorHora(12)).toBe("Boa tarde!");
    expect(saudacaoPorHora(15)).toBe("Boa tarde!");
  });
  test('deve retornar "Boa noteste!" para horas entre 18 e 23', () => {
    expect(saudacaoPorHora(18)).toBe("Boa noite!");
    expect(saudacaoPorHora(22)).toBe("Boa noite!");
  });
  test('deve retornar "Hora inválida!" para horas fora do intervalo de 0 a 23', () => {
    expect(saudacaoPorHora(-1)).toBe("Hora inválida!");
    expect(saudacaoPorHora(24)).toBe("Hora inválida!");
  });
});
