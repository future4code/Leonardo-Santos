### Exercicio 1

a)R: 
	```
Chave estrangeira, ou Foreign Key (FK), ou ainda chave externa é a chave que permite a referência a registros 	oriundos de outras tabelas.
	```

b)R: 
	```
	INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    	"Muito bom!",
   	 7,
	"004"
);
	```

d)R: 
	```
	ALTER TABLE Movie DROP COLUMN rating;
	```


### Exercicio 2

b)R: 
	```
	INSERT INTO MovieCast(movie_id, actor_id)
	VALUES(
		"004",
    		"001"
	)
	```


### Exercicio 3

b)R: 
	```
	SELECT m.id as movie_id, r.rate as rating FROM Movie m
	INNER JOIN Rating r ON m.id = r.movie_id;
	```