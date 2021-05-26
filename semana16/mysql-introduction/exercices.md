# Exercices of mySQL instroduction

## Exercice 1

a. create table cria uma tabena no db selecionado, Actor eh o nome da tabela, em cada linha separada por virgula esta o nome da coluna e o tipo, varchar eh tipo texto, varchar(255) eh texto com ate 255 letras, float eh numero flutuante, date eh formato de data, not null eh para o campo nao pode ser nulo, ficar sem info, primary key eh o mesmo que not null e unique, para nao ser vazio e ser unico.

b. show databases vai listar todas databases no host que temos acesos com nosso usuario, show tables vai lista todas tabelinhas dentro do db que tambem temos acesso.

## Exercice 2

a. adicionando novo ator

`insert into Actor values ('002', 'Gloria Pires', 1200000, '1963-08-23', 'female')`

b. erro de key duplicada, claro, botamos primary key no id, nao pode ter dois com o mesmo id

c. em nomes das colunas esta indicando apena 3, e em valores 5, erro de conta basica xd, aqui corrijido:

`INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19", "female" )`

d. faltou o campo nome na query, e ele esta como not null, nao pode ficar em branco, e muito menos nao tem um valor padrao caso nao seja inseriro, por isto o erro para ser obrigatorio informar, aqui arrumado:

`INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "004", "Joao da Silva", 400000, "1949-04-18", "male" )`

e. date precisa ser em formato string, aqui corrigido:

`INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "005", "Juliana Paes", 719333.33, "1979-03-26", "female" )`

f.
`insert into Actor values ( '006', 'Marcelino Sandroni', 500000, '1991-11-28', 'male' ), ( '007', 'Carol Mesquita', 600000, '1994-12-05', 'female' )`

## Exercice 3

a.

`select * from Actor where gender = 'female' `

b.

`select salary from Actor where name = 'tony ramos'`

c. no result, botei gender em tudo certin, so tem male e female

`select * from Actor where gender = 'invalid'`

d.

`select id, name, salary from Actor where salary <= 500000`

e. a coluna correta eh name, e nao nome

`SELECT id, name from Actor WHERE id = "002"`

## Exercice 4

a. like procura a string semelhante com os caracteres coringa % para qualquer coisa apois, e > eh um operador

`select * from Actor where (name like 'a%' or name like 'j%') and salary > 300000`

b.

`select * from Actor where name not like 'a%' and salary > 350000`

c. db is case insensitive

`select * from Actor where name like '%g%' or name like '%G%'`

d.

`select * from Actor where (name like '%g%' or name like '%G%' or name like '%a%' or name like '%A%') and salary between 350000 and 900000`

## Exercice 5

a. best table creation ever, even with check boy

`create table Movies ( id bigint signed primary key auto_increment, name varchar(50) not null, sinopse text not null, release_date date not null, rating tinyint not null, check (rating between 1 and 10) )`

b.
`insert into Movies (name, sinopse, release_date, rating) values ( 'Se eu fosse voce', 'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos' , '2006-01-06', 7 )`

c.

`insert into Movies (name, sinopse, release_date, rating) values ( 'Doce de mãe', 'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos' , '2012-12-27', 10 )`

d.

`insert into Movies (name, sinopse, release_date, rating) values ( 'Dona Flor e Seus Dois Maridos', 'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.', '2017-11-02', 8 )`

e. Nao gosto de filme BR rsrs

`insert into Movies (name, sinopse, release_date, rating) values ( 'Oxigen', 'A woman wakes up in a cryogenic chamber with no recollection of how she got there, and she must find a way out before running out of air.', '2021-05-12', 7 )`

## Exercice 6

a.

`select id, name, rating from Movies where id = 4`

b.

`select * from Movies where name = 'oxigen'`

c.

`select id, name, sinopse from Movies where rating >= 7`

## Exercice 7

a. no movie with vide in name boy

`select * from Movies where name like '%vida%'`

b. Using cancat function xd

`select * from Movies where concat(name, sinopse) like '%TERMO de BUSCA%'`

c.
`select * from Movies where release_date < CURDATE()`

d.
`select * from Movies where release_date < curdate() and concat(name, sinopse) like '%vida%' and rating > 7`
