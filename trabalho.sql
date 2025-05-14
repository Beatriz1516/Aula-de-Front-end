CREATE SCHEMA VENDA_COMPUTADOR;

CREATE TABLE CLIENTE(
`id_cliente` INT NOT NULL auto_increment,
`Nome_cliente` VARCHAR (100) NOT NULL,
`Telefone_cliente` VARCHAR (100) NOT NULL,
`Endereço_cliente` VARCHAR(100) NOT NULL,
`id_usuario` INT NOT NULL,
`id_produto` INT NOT NULL,
PRIMARY KEY (id_cliente)
);

CREATE TABLE PRODUTOS(
`id_produto` INT NOT NULL auto_increment,
`Nome_produto` VARCHAR (100) NOT NULL,
`Preço_produto` VARCHAR (100) NOT NULL,
`Quantia_estoque` INT NOT NULL, 
PRIMARY KEY (id_produto)
);

CREATE TABLE VENDAS(
`id_vendas` INT NOT NULL auto_increment,
`id_produto` INT NOT NULL,
`id_cliente` INT NOT NULL,
`Quantia_estoque` INT NOT NULL,
`Preço_produto` VARCHAR(100) NOT NULL,
PRIMARY KEY (id_vendas)
);

CREATE TABLE USUARIO(
`id_usuario` INT NOT NULL auto_increment,
`id_cliente` INT NOT NULL,
`Nome_cliente` VARCHAR(100) NOT NULL,
`Tipo_usuario` VARCHAR(50) NOT NULL,
`E-mail_usuario` VARCHAR(200) NOT NULL,
`Senha_usuario` VARCHAR(200) NOT NULL,
PRIMARY KEY (id_usuario)
);

CREATE TABLE ESTOQUE (
`id_estoque` INT NOT NULL auto_increment,
`id_produto` INT NOT NULL,
`Quantia_estoque` INT NOT NULL,
`id_fornecedor` INT NOT NULL,
PRIMARY KEY (id_estoque)
);

CREATE TABLE COMPRA_FORNECEDOR(
`id_compra` INT NOT NULL auto_increment,
`id_fornecedor` INT NOT NULL,
`id_produto` INT NOT NULL,
`Quantia_estoque` INT NOT NULL,
PRIMARY KEY(id_compra)
);

CREATE TABLE FORNECEDOR(
`id_fornecedor` INT NOT NULL auto_increment,
`id_produto` INT NOT NULL,
`Quantia_estoque` INT NOT NULL,
PRIMARY KEY (id_fornecedor)
);

CREATE TABLE FUNCIONARIO(
`id_funcionario` INT NOT NULL auto_increment,
`Nome_funcionario` VARCHAR(100) NOT NULL,
PRIMARY KEY (id_funcionario)
);

select * from COMPRA_FORNECEDOR;

ALTER TABLE CLIENTE ADD
FOREIGN KEY (id_produto)
REFERENCES PRODUTOS (id_produto)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE USUARIO ADD
FOREIGN KEY (id_cliente)
REFERENCES CLIENTE (id_cliente)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE COMPRA_FORNECEDOR ADD
FOREIGN KEY (id_fornecedor)
REFERENCES FORNECEDOR (id_fornecedor)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE COMPRA_FORNECEDOR ADD
FOREIGN KEY (id_produto)
REFERENCES PRODUTOS (id_produto)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE ESTOQUE ADD
FOREIGN KEY (id_produto)
REFERENCES PRODUTOS (id_produto)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE FORNECEDOR ADD
FOREIGN KEY (id_produto)
REFERENCES PRODUTOS (id_produto)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE VENDAS ADD
FOREIGN KEY (id_produto)
REFERENCES PRODUTOS (id_produto)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE VENDAS ADD
FOREIGN KEY (id_cliente)
REFERENCES CLIENTE (id_cliente)
ON DELETE NO ACTION
ON UPDATE NO ACTION;


SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO CLIENTE VALUES(id_cliente, Nome_cliente, Telefone_cliente, Endereço_cliente, id_usuario, id_produto )
(01, "Carlos", "(45)00000-0000", "R. Afonso Pereira", 01, 01)
);