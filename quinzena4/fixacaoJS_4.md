  ```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {```
 ``` // Escreva seu código aqui```
  ```let numeroEscolhidoAparece = 0;```
  ```for(let item of arrayDeNumeros){```
    ```if(item === numeroEscolhido){```
      ```numeroEscolhidoAparece ++```
    ```}```
  ```}```
  ```if(numeroEscolhidoAparece >= 1){```
    ```return `O número ${numeroEscolhido} aparece ${numeroEscolhidoAparece}x`;```
  ```}else {```
    ```return  "Número não encontrado"```
  ```}```
```}```