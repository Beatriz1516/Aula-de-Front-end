
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `nome` VARCHAR(45) NULL,
  `data_de_nascimento` VARCHAR(45) NULL,
 PRIMARY KEY (`idusuarios`))
ENGINE = InnoDB;

SELECT * FROM usuarios;

INSERT INTO usuarios(email, senha, nome, data_de_nascimento) VALUES
 ("ola@gmail.com", "olasenha", "OlaMundo", "17/02/1945") ;
INSERT INTO usuarios(email, senha, nome, data_de_nascimento) VALUES
 ("goiaba@gmail.com", "goiabayoutuber1", "Goiaba", "15/10/1972") ;
INSERT INTO usuarios(email, senha, nome, data_de_nascimento) VALUES
 ("ipiranga@gmail.com", "postoIpiranga", "OpostoDoIpiranga", "31/12/1998") ;