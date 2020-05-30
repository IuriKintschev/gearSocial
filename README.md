# Gear Social

### Preview

<img src="https://github.com/IuriKintschev/gearSocial/blob/master/assets/images/readmePrev.gif?raw=true" width="250" />

## Overview

Esta aplicação é uma pseudo rede social, onde sera possivel logal e se cadastrar, <br>
realizar postagens, deletar e editar, tudo utilizando uma API fake com o JSON-SERVER <br>

## O que houve ?

Pesso que ignore a splash-screen, sou pessimo em criar imagens do zero hehe.

Foi um pequeno desafio, claro que eu poderia ter simplificado em nem utilizar o zustand, poderia ter utilizado <br> a context API do proprio react, mas optei em utilizar o zustand pela sua forma de zero configuraçoes, e estado <br>baseado no useState. Utilizei um arquivo JSON para seimular uma API utilizando o json-server, e expondo com <br> o ngrok.. foquei na estrutura escalavel e na parte visual da aplicaçao.

## Como executar ?

> <h2><b>Certifique-se que tenha o json-server e o ngrok instalado</h2></b> Caso nao tenha instale com os comandos ..

````
yarn global add json-server
````

```
yarn global add ngrok
```

<br><br>
# Após erga o servidor !

> Para erguer o servidor rode os comando..

```
json-server db.json -p 5000 -w
```
<br>
> Agora esponha ele com o ngrok..

```
ngrok http 5000
```
<br>

> <h3> Exemplo da saida!</h3>

* Sera a presentado no console

````
Session Status                online                                                                          
Session Expires               7 hours, 59 minutes                                                             
Version                       2.3.35                                                                          
Region                        United States (us)                                                              
Web Interface                 http://127.0.0.1:4040                                                           
Forwarding                    http://2cdfda69e4b2.ngrok.io -> http://localhost:5000                           
Forwarding                    https://2cdfda69e4b2.ngrok.io -> http://localhost:5000                          
                                                                                                              
Connections                   ttl     opn     rt1     rt5     p50     p90                                     
                              0       0       0.00    0.00    0.00    0.00
````

> <h3> No app ira usar o o seu resultado que apresenta no exemplo "http://2cdfda69e4b2.ngrok.io -> http://localhost:5000" </h3>

<br>

* <h2>Para instalar o app, no repositorio possue um versao relese <br> do APK, baixe e instale no emulador ou aparelho fisico</h2>