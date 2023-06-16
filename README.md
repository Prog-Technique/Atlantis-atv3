<div align="center" id=topo>
<h1> Atlantis </h1>
<h3> Sistema gerenciador de parques aquáticos, clubes e hotéis </h3>

![atlantis](https://github.com/Prog-Technique/Atlantis-atv1/assets/100284976/3478a0c8-d044-4c74-a36c-70d8d9f384a5)
  
<a href="https://www.typescriptlang.org/" target="blank">
<img align="center" src="https://img.shields.io/badge/TypeScript-0094DA?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/></a> 

<a href="https://nodejs.org/en/about/" target="blank">
<img align="center" src="https://img.shields.io/badge/Node.js-0094DA?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs"/></a>

<a href="https://code.visualstudio.com/" target="blank">
<img align="center" src="https://img.shields.io/badge/Visual_Studio_Code-0094DA?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="vsc"/></a> 

</div>

<br>

## 🎯 Objetivo
Contemplar cadastro e gerenciamento  de hospedagens.
As implementações são:
- Todas as classes diretoras, responsáveis por criar cada tipo de acomodação.
- Estruturas de dados e a lógica necessárias para controlar a hospedagem, podendo vincular hospedes a alguma acomodação.
 
<br>

> 🔗 **Link** <br>
> - Documento: [Atlantis](https://github.com/Prog-Technique/Atlantis-atv3/files/11568503/atviii-atlantis-water-park.pdf)

<br>

## 📰 Diagramas
Com as atualizações, uma das principais diferenças foi incluir uma classe denominada de “Acomodações”. Esta classe foi pensada para representar qualquer tipo de acomodação em um hotel, pousada ou resort. Existem várias configurações para uma acomodação como: possui ou não camas de solteiro, possui suítes e se há garagens. Por causa desta variação de configurações, o padrão de projeto “Builder” era necessário para implementar construtores de acomodações, representada pelo diagrama de classe na Figura 1. Evidencia-se a classe Acomodação e seus atributos e métodos. Além disso, outras classes são definidas, uma denominada de “Diretor” e outra denominada “ConstrutorAcomodação”.

<div align="center">

![builder](https://github.com/Prog-Technique/Atlantis-atv3/assets/100284976/3204aa89-e9e0-4709-8768-6056545fc04c)

Observe a tabela abaixo que define quais são as melhores opções de acomodações.

![acomodacao](https://github.com/Prog-Technique/Atlantis-atv3/assets/100284976/2849d545-5a3d-4a92-858e-e0834a2118f4)

</div>

A  partir das informações da Tabela  1, a classe denominada “DiretorSolteiroSimples” definida na Figura 1, é  responsável por criar acomodações do tipo “SolteiroSimples”. Assim como as demais classes que criam os demais tipos de acomodações.
  
<br>

## :scroll: Manual do Usuário

Clone o repositório pelo link: 

~~~
https://github.com/Prog-Technique/Atlantis-atv3.git
~~~

No terminal digite:

~~~
cd atlantis
~~~

~~~
npm install
~~~

~~~
npx tsc
~~~

~~~
node .\src\js\app\app.js
~~~

<br>

→ [Voltar ao topo](#topo)
