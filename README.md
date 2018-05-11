# teste1-java-atos

1. A aplicação backend foi desenvolvida utilizando o Spring Boot 2, 
para executar a aplicação utilize o comando "mvn spring-boot:run".
    * Será necessário instalar o maven e o java 8+. 

2. O frontend foi desenvolvido em Angular 5, 
ele pode ser executado utilizando o comando "ng serve" no diretório frontend.
O comando NG depende da instalação do @angular/cli pelo NPM.
A aplicação será disponibilizada no navegador no endereço http://localhost:4200
    * Angular 5 com bootstrap.

3. Caso seja feito um "ng deploy", a versão compilada do frontend será colocada na raiz do projeto de backend,
aí então será necessário rodar o backend com o comando do item 1, e acessar a aplicação em: http://localhost:8080

4. A aplicação foi feita com banco de dados em memória ou com MongoDB. 
    * A versão em memória está configurada por padrão.
    * Para a versão com MongoDB será necessário rodar o MongoDB.
      * Inicialmente configurado para rodar no docker.