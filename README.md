# Gear Social

### Preview

<img src="https://github.com/IuriKintschev/gearSocial/blob/master/assets/images/readmePrev.gif?raw=true" width="250" />

## Overview

Esta aplicação é uma pseudo rede social, onde será possível logar e se cadastrar, <br>
realizar postagens, deletar e editar, tudo utilizando uma API fake com o JSON-SERVER <br>

## O que houve?

Peço que ignore a splash-screen, sou péssimo em criar imagens do zero hehe.

Foi um pequeno desafio, claro que eu poderia ter simplificado e nem utilizar o zustand, poderia ter utilizado <br> a context API do próprio react, mas optei em utilizar o zustand pela sua forma de zero configurações, e estado <br>baseado no useState. Utilizei um arquivo JSON para simular uma API usando o json-server, e expondo com <br> o ngrok.. foquei na estrutura escalável e na parte visual da aplicação.

## Como executar?

> <h2><b>Certifique-se que tenha o json-server e o ngrok instalado</h2></b> Caso não tenha instale com os comandos ..

````
yarn global add json-server
````

```
yarn global add ngrok
```

<br><br>
# Após erga o servidor!

> Para erguer o servidor rode o comando..

```
json-server db.json -p 5000 -w
```
<br>

> Agora exponha ele com o ngrok..

```
ngrok http 5000
```
<br>

> <h3> Exemplo da saída!</h3>

* Será apresentado no console

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

> <h3> No app irá usar o seu resultado que apresenta no exemplo "https://2cdfda69e4b2.ngrok.io" </h3>

<br>

* <h3>Para instalar o app, no repositório possue um versão relese <br> do APK, baixe e instale no emulador ou aparelho fisico</h3>
