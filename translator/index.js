const translator = require('@parvineyvazov/json-translator');
async function translate() {
  await translator.translateFile(__dirname + "/new.json", translator.languages.English, [
    translator.languages.Thai,
    translator.languages.Japanese,
    translator.languages.Chinese_Simplified,
    translator.languages.Chinese_Traditional,
    translator.languages.German,
    translator.languages.Italian,
  ]);
}

translate()

//FIXME: reference Links https://www.npmjs.com/package/@parvineyvazov/json-translator