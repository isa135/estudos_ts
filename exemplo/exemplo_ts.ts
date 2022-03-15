// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.

const objeto = 
{
    "metricas": [
        {
            "acuracia": 58.5545,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 12:52:53",
            "descricao": "texto bla bla bla",
            "f1": 68.5545,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 48.5545,
            "recall": 38.5545,
            "versao": 1736
        },
        {
            "acuracia": 15.111,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 19:52:53",
            "descricao": "texto bla bla bla",
            "f1": 35.111,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 55.111,
            "recall": 65.111,
            "versao": 1735
        },
        {
            "acuracia": 22.65406,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 12:52:53",
            "descricao": "texto bla bla bla",
            "f1": 24.64545,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 33.5545,
            "recall": 50.5545,
            "versao": 1734
        },
        {
            "acuracia": 45.111,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 19:52:53",
            "descricao": "texto bla bla bla",
            "f1": 65.4654,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 33.111,
            "recall": 88.111,
            "versao": 1733
        },
        {
            "acuracia": 78.5545,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 12:52:53",
            "descricao": "texto bla bla bla",
            "f1": 68.5545,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 48.5545,
            "recall": 38.5545,
            "versao": 1732
        },
        {
            "acuracia": 5.111,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 19:52:53",
            "descricao": "texto bla bla bla",
            "f1": 35.111,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 55.111,
            "recall": 65.111,
            "versao": 1731
        },
        {
            "acuracia": 82.65406,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 12:52:53",
            "descricao": "texto bla bla bla",
            "f1": 24.64545,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 33.5545,
            "recall": 50.5545,
            "versao": 1730
        },
        {
            "acuracia": 75.111,
            "codigo_revisao": 5800,
            "data_atualizacao": "2022-01-12 19:52:53",
            "descricao": "texto bla bla bla",
            "f1": 65.4654,
            "id_classificador": 68,
            "id_usuario": 1234,
            "precisao": 33.111,
            "recall": 88.111,
            "versao": 1729
        },
    ]
}

console.log("--> objeto ", objeto)

let versoes: string [] = [];
let acuracia = [];
let f1 = [];

let objetoMetricas = objeto.metricas;

let i;

for (i = 0; i < objetoMetricas.length; i++) {
    versoes.push(objetoMetricas[i].versao.toString());
    acuracia.push(objetoMetricas[i].acuracia);
    f1.push(objetoMetricas[i].f1);
}

console.log("---------------------------------------------");
console.log(" Array criado com o for: ");
console.log(" - versoes  ", versoes);
console.log(" - acuracia ", acuracia);
console.log(" - f1       ", f1);
console.log("---------------------------------------------");
console.log(" reverse() ");
console.log(" - versoes  ", versoes.reverse());
console.log(" - acuracia ", acuracia.reverse());
console.log(" - f1       ", f1.reverse());
console.log("---------------------------------------------");
