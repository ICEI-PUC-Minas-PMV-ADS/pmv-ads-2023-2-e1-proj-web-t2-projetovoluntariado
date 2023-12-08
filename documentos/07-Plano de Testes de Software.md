# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir:

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-01: Verificar o funcionamento da autenticação e perfis de usuário. | RF-01 A aplicação deve disponibilizar uma forma de autenticação e perfis de usuário. | Verificar se o usuário pode-se inscrever nos projetos publicados| 1 - Criar sua conta;<br>2 - Entrar com o email e senha cadastrados;<br>3 - Clicar em perfil. | O perfil deve mostrar os dados cadastrados pelo usuário. | Aleksander |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-02: Verificar a inscrição do voluntário nos projetos | RF-01 A aplicação deve disponibilizar uma forma de autenticação e perfis de usuário. <br> RF-03 - A aplicação deve permitir que o voluntário se inscreva em projetos. <br> RF-07 - A aplicação deve permitir que o usuário registre-se no site.| Verificar se o usuário pode-se inscrever nos projetos publicados| 1 - O usuário precisa se inscrever e ou efetuar o login na modalidade voluntário; <br> 2- Acessar a página "Projetos" a partir da Home ou de outra página;<br> 3 - Visualizar a página Projetos; <br> 4 - Clicar no botão "ver detalhes" do projeto de interesse; <br> 5 - Clicar em "Inscrever" no modal que será aberto com detalhes dos projetos. | Uma mensagem com sucesso deverá ser exibida | Arthur |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-03: Verificar o filtro dos projetos por categoria | RF-04 A aplicação deve possuir a funcionalidade para as organizações publicarem projetos. | Verificar se o usuário consegue filtrar os projetos por categoria| 1 -  Acessar a página "Projetos" a partir da Home ou de outra página;<br> 2 - Visualizar a página Projetos; <br> 3 -  O usuário deve clicar na categoria que corresponde ao interesse de sua busca. <br> | Caso haja projetos dentro da categoria selecionada, serão exibidos os respectivos projetos. | Gabriela |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-04: Verificar o funcionamento do cadastro de projetos | RF-04: A aplicação deve possuir a funcionalidade para as organizações publicarem projetos.| Verificar se a organização pode publicar projetos. | 1 - Entrar na página Perfil Empresa; <br> 2 - Clicar em cadastrar projeto; <br> 3 - Preencher os campos e publicar projeto. | O projeto deve estar publicado na tela de projetos. | Gabriela |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-05: V Verificar o funcionamento do mecanismo de rastreamento de horas. | RF-05: A aplicação deve possuir um mecanismo de rastreamento de horas de voluntariado. | Mapear as horas de acordo com os projetos concluídos pelo voluntário. | 1-Ir para tela de projetos; <br> 2-Se cadastrar em um projeto; <br> 3-Finalizar a projeto. | As horas devem mudar de acordo com o projeto finalizado. | Anderson |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-06: Verificar o funcionamento da emissão e variações de certificado. | CT-06: Verificar o funcionamento da emissão e variações de certificado. | O certificado deve ser emitido e alterado de acordo com o nome, horas e ranking de voluntário. | 1 - Ir para tela de perfil de voluntário; <br> 2 - Clicar em emitir certificado. | Uma mensagem com sucesso deverá ser exibida | Aleksander |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-07: Verificar o funcionamento do cadastro de usuário. | RF-07 A aplicação deve permitir que o usuário registre-se no site. | Verificar se o usuário está registrado. | 1 - Ir para tela de homepage; <br> 2 - Clicar em entrar; <br> 3 - Clicar em cadastrar; <br> 4 - Preencher os campos; <br> 5 - Ir para a tela de perfil. | Após o cadastro, o usuário deve estar registrado no site. | Átila |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-08: Verificar mensagem de erro no cadastro de novos usuários ao inserir um email inválido ou já cadastrado. | RF-07 A aplicação deve impedir o usuário de se cadastrar com um email inválido ou já cadastrado. | Verificar mensagens de erro. | 1 - Ir para a tela de login; <br> 2 - Clicar em cadastro; <br> 3 - Digitar um email inválido ou que já foi cadastrado; <br> 4 - Clicar no botão cadastrar. | Após clicar em cadastrar, a mensagem de erro: 'Digite um e-mail válido!' ou 'Conta já existe, faça login!' deve ser aparecer na tela. | Átila |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-09: Verificar se a autenticação do usuário falha ao tentar entrar com email ou senha incorretos. | RF-07 A aplicação deve garantir que o usuário não consiga fazer login ao digitar email ou senha incorretos. | Verificar falha na autenticação do usuário. | 1 - Ir para a tela de login; <br> 2 - Prencher os campos email ou senha incorretamente; <br> 3 - Clicar no botão entrar. | Após clicar no botão entrar colocando email ou senha incorretos, a seguinte mensagem de error deve aparecer para o usuário: 'E-mail ou senha incorretos'. | Átila |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-10: Verificar se a autenticação do usuário está ocorrendo de forma correta. | RF-07 A aplicação deve garantir que a autenticação do usuário ocorra ao prencher o email e senha corretamente. | Verificar a autenticação do usuário. | 1 - Ir para a tela de login; <br> 2 - Prencher os campos email e senha corretamente; <br> 3 - Clicar no botão entrar. | Após clicar no botão entrar colocando os dados corretamente, o usuário é autenticado e redirecionado para a página de voluntário ou empresa de acordo com o seu perfil. | Átila |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-11: Verificar o funcionamento da troca de imagem de perfil de voluntário. | RF-08 A aplicação deve possuir um mecanismo de troca de imagem de perfil. | Trocar a imagem de perfil do usuário | 1 - Ir para tela de perfil de voluntário; <br> 2 - Clicar em imagem perfil. | A foto exibida deverá ser alterada. | Anderson |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-12: Verificar o funcionamento dos projetos ativos cadastrados pela empresa e poder finaliza-los. | RF-09 A aplicação deve possuir nas telas de perfis uma forma de acompanhar os projetos em andamento e finalizá-los. | Verificar se o usuário pode finalizar os projetos ativos. | 1 - Ir para tela de perfil de empresa; <br> 2 - Clicar em encerrar projeto. | O projeto deverá desaparecer da tela de projetos ativos. | Arthur |

----

|Caso de teste | Requisito Associado | Objetivo do teste | Passos | Critério de êxito | Responsável |
|-|:---|:---|:---|:---|:--:|
| CT-13: Verificar o funcionamento da página HomePage | RF-10 A aplicação deve possuir uma tela inicial atrativa e convidativa com acesso aos outros fluxos de telas. | Verificar se os links de direcionamento e botões estão funcionando. | 1 - Abrir o navegador; <br> 2- Informar o endereço do site; <br> 3- Visualizar a página Home; <br> 4- Verificar direcionamentos dos links do menu; <br> 5- Verificar direcionamento do botao "Ver mais"; <br> 6- Verificar direcionamentos dos links do footer. | Os botões/links deverão encaminhar para cada página correspondente com êxito. | Átila |

----

