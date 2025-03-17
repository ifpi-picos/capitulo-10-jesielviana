// Função 1: Retorna o maior número da lista
export function maiorNumero(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return null;
  }
  return lista.indexOf(Math.max(...lista));
}

// Função 2: Verifica se um número é par ou ímpar
export function verificarParOuImpar(numero) {
  if (typeof numero !== "number") {
    return null;
  }
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

// Função 3: Retorna o dia da semana baseado em um número (1 a 7)
export function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido";
  }
}

// Função 4: Soma todos os números de uma lista
export function somarLista(lista) {
  if (!Array.isArray(lista)) {
    return null;
  }
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

// Função 5: Conta quantos caracteres 'a' existem em uma string
export function contarPalavras(frase) {
  if (typeof frase !== "string") {
    return null;
  } else if (frase.trim() === "") {
    return 0;
  }

  return frase.split(" ").length;
}

// Função 6: Atualiza o valor de uma propriedad do objeto
export function atualizarPropriedade(objeto, chave, novoValor) {
  objeto[chave] = novoValor;
  return objeto;
}

// Função 7: Retorna todas as chaves de um objeto
export function listarChaves(objeto) {
  if (typeof objeto !== "object" || objeto === null) {
    return null;
  }
  return Object.keys(objeto);
}

// Função 8: Retorna saudação com base na hora
export function saudacaoPorHora(hora) {
  if (typeof hora !== "number" || hora < 0 || hora > 23) {
    return "Hora inválida!";
  }

  if (hora >= 0 && hora < 12) {
    return "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde!";
  } else {
    return "Boa noite!";
  }
}
