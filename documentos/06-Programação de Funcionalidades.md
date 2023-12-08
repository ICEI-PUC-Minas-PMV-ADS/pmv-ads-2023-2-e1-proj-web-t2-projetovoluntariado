# Programação de Funcionalidades


## HomePage

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/145074016/cbed1cb8-2e0d-4daf-8312-03d8fba6f795)


#### Requisito atendido

RF-10: A aplicação deve possuir uma tela inicial atrativa e convidativa com acesso aos outros fluxos de telas.


#### Artefatos da funcionalidade

●	index.html<br>
●	animation.css<br>
●	menu.css<br>
●	reset.css<br>
●	style.css<br>
●	variables.css<br>
● script.js<br>


#### Estrutura de Dados

Não se aplica


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: [HomePage](https://voluntaria.vercel.app/)


#### Responsável

Aleksander Cunha Garcia Romero | [Aleksander Romero](https://github.com/AleksanderRomero)

***

## Tela de Projetos

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/145074016/64cd62dd-b393-40c5-8658-ab0fefb08734)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/59897366/e1c0143a-dab7-4c68-a336-00105890722c)


#### Requisito atendido

RF-02: Por parte do voluntário, a aplicação deve possuir um mecanismo de filtro de projetos de acordo com a área de interesse.<br>
RF-03: A aplicação deve permitir que o voluntário se inscreva em projetos.


#### Artefatos da funcionalidade

●	menu.js<br>
●	modal - Copia.js<br>
●	modal.css<br>
●	modal.js<br>
●	projetos.css<br>
●	projetos.html<br>
●	projetos.js<br>


#### Estrutura de Dados

Para o armazenamento de dados da aplicação foi utilizado um objeto Javascript contendo um array com os projetos a serem carregados no localStorage na primeira vez que o site for acessado, os dados se dispoem da seguinte forma:
```javascript
listaProjetos = [
    {
        id:1,
        projectName: "Doe sangue e salve vidas",
        projectDescription: "Um gesto simples pode salvar muitas vidas, que tal ajudar as pessoas que precisam receber sangue",
        instituitionName: "Red Blood",
        availability: 15,
        categoryName: "Saúde",
        imgLink: "images/imagem-voluntarios-01.jpg",
        isActive: 1,
        userCompleted:0
    },
```



#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: [Projetos](https://voluntaria.vercel.app/projetos/projetos.html)


#### Responsável

Anderson da Silva Gomes | [Anderson Gomes](https://github.com/Dinhoop)

***

## Tela de Login e Cadastro

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/145074016/cd1f289f-745d-471e-82a1-9fecfdcbbc5b)
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/145074016/b6eb521c-b1fa-4b46-aa9b-c4790acb4b49)


#### Requisito atendido

RF-01: A aplicação deve disponibilizar uma forma de autenticação do usuário.<br:
RF-07: A aplicação deve permitir que o usuário registre-se no site.


#### Artefatos da funcionalidade

●	loginCadastro.css<br>
●	loginCadastro.html<br>
●	loginCadastro.js<br>


#### Estrutura de Dados

Para a gravação dos dados dos usuários cadastrados, a estrutura de dados utilizada também é um objeto Javascript disposto da seguinte estrutura:

```javascript
  {
        "name": "André",
        "email": "a@a.com",
        "password": "123",
        "typeUser": "Voluntário",
        "projects": []
  }
```


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: [LoginCadastro](https://voluntaria.vercel.app/loginCadastro/loginCadastro.html)


#### Responsável

Arthur de Andrade Simões | [Arthur Simões](https://github.com/ArthurSimoess)

***

## Tela de Perfil Voluntário

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/145074016/ddc07546-7959-4e6d-8b6a-fd3f8bd1df1e)


#### Requisito atendido

RF-05: A aplicação deve possuir um mecanismo de rastreamento de horas de voluntariado.<br>
RF-06: A aplicação deve possuir um sistema de gamificação para reconhecimento e certificação dos voluntários.<br>
RF-08: A aplicação deve possuir na tela de perfil voluntário uma forma de alterar avatares.<br>
RF-09: A aplicação deve possuir nas telas de perfis uma forma de acompanhar os projetos em andamento e finaliza-los.


#### Artefatos da funcionalidade

●	perfilVoluntarioo.css<br>
●	perfilVoluntarioo.html<br>
●	perfilVoluntarioo.js<br>


#### Estrutura de Dados

[perfilVoluntarioo.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/blob/main/codigo-fonte/src/perfilVoluntario/perfilVoluntarioo.html)


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: [PerfilVoluntario](https://voluntaria.vercel.app/perfilVoluntario/perfilVoluntarioo.html)

#### Responsável

Átila Eduardo de Pádua Ribeiro | [Átila Ribeiro](https://github.com/atilaedu1)

***

## Tela de Perfil Empresa

<img width="766" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/84386289/8253e995-9fcf-4ae7-bcbc-09ad68109384">


#### Requisito atendido

RF-09: A aplicação deve possuir nas telas de perfis uma forma de acompanhar os projetos em andamento e finaliza-los.


#### Artefatos da funcionalidade

●	perfilEmpresa.css<br>
●	perfilEmpresa.html<br>
●	perfilEmpresa.js<br>


#### Estrutura de Dados

Não ser aplica


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: [PerfilEmpresa](https://voluntaria.vercel.app/perfilEmpresa/perfilEmpresa.html)

#### Responsável

Gabriela Araújo | [Gabriela Araújo](https://github.com/araujogabrielaa)

***

## Tela de cadastro de projetos

<img width="963" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/84386289/9dc930ea-589f-4beb-886b-19ea85116410">


#### Requisito atendido

RF-04: A aplicação deve possuir a funcionalidade para as organizações publicarem projetos.


#### Artefatos da funcionalidade

●	cadastroProjeto.css<br>
●	cadastroProjeto.html<br>
●	cadastroProjeto.js<br>


#### Estrutura de Dados

Não se aplica


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: [CadastroProjeto](https://voluntaria.vercel.app/cadastroProjeto/cadastroProjeto.html)

#### Responsável

Gabriela Araújo | [Gabriela Araújo](https://github.com/araujogabrielaa)

***

## Tela de certificado

<img width="950" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t2-projetovoluntariado/assets/133550283/6a36893c-9b44-47bf-bbc4-e0d179fe6aee">


#### Requisito atendido

RF-06: A aplicação deve possuir um sistema de gamificação para reconhecimento e certificação dos voluntários.


#### Artefatos da funcionalidade

●	certificacao.css<br>
●	certificacao.html<br>
●	certificacao.js<br>


#### Estrutura de Dados

Não se aplica


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: [Certificado](https://voluntaria.vercel.app/certificacao/certificacao.html)

#### Responsável

Gabriela Araújo | [Gabriela Araújo](https://github.com/araujogabrielaa)

