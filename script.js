const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//CSS
app.use(express.static(__dirname + '/CSS'));

//Rotas
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.post('/exibir', async function(req, res){
  const browser = await puppeteer.launch({ headless:false }); 
  const page = await browser.newPage(); 

  // Define o conteúdo do formulário a ser preenchido
  const login = req.body.login;
  const senha = req.body.senha;
  const stack = req.body.stack;
  const repeticao = req.body.repeticao;
  const chave = req.body.chave;

    try{
      await page.goto('https://blaze.com/pt/games/double?modal=auth&tab=login', { timeout: 60000 });
      await page.type('input[name="username"]', login);
      await page.type('input[name="password"]', senha);
      await page.click('div > form > div.input-footer > button');
      await page.waitForSelector('div[id="roulette-timer"] > div');
    }catch{
        await browser.close();
    }
 
  

  // Feche o navegador
  await browser.close();

  // Envie a resposta com os dados processados ou faça qualquer outra coisa que você precisa fazer
  res.send('Comentarios feito com sucesso com sucesso!');
});


//Servidor
app.listen(8080);
