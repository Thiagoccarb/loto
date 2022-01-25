const loteriasCaixaJson = require('loterias-caixa-json');
const writeFile = require('../writeFile');

const path = './node/helpers/megasena/sorteios.json';

const  getResults =async () => {
    const results = await loteriasCaixaJson.megaSena();
    await writeFile(path, results);
}

getResults();