const titulo = document.createElement('h1');
titulo.textContent = 'APLICAÇÃO DE JAVASCRIPT';
titulo.style.textAlign = 'center';
titulo.style.color = 'orange';
document.body.appendChild(titulo);

const texto = document.createElement('p');
texto.textContent = 'Nessa aplicação estamos testando na prática a codificação de javascript.';
texto.style.textAlign = 'center';
document.body.appendChild(texto);

const imagem = document.createElement('img');
imagem.src = '/imagens/imagem-abobora.jpg';
imagem.style.width = '400px';
imagem.style.margin = '50px 50px 50px 720px';
imagem.style.border = 'solid 3px darkOrange';
imagem.style.borderRadius = '300px';
imagem.style.boxShadow = '0 10px 15px rgb(0, 0, 0, 0.3)'
document.body.appendChild(imagem);
