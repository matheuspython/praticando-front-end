var containerNoticias = document.querySelector('section.noticias .container')

function criaNoticiaNova(img, titulo, paragrafo) {
    return (`
    <div class="noticia">
        <div style="background-image:url('${img}');" class="img"></div>
        <h2>${titulo}</h2>
        <p>${paragrafo}</p>
        <a href="" target="_blank" rel="noopener noreferrer">ver noticia</a>
    </div>
    `)
}
containerNoticias.innerHTML += criaNoticiaNova('https://www.japaoemfoco.com/wp-content/uploads/2011/07/Top-20-Animes-Dragon-Ball.jpg', 'dragon ball fazendo sucesso', 'desde que o goku despertou instinto superior venda dos mangas de dragon ball almenta 988%')

containerNoticias.innerHTML += criaNoticiaNova('https://www.primecursos.com.br/blog/wp-content/uploads/2020/08/naruto-30082020-2.jpg', 'eu sou naruto uzumaki', 'anime com historia de superação do jovem naruto uzumaki inspira milhares ao redor do mundo')

containerNoticias.innerHTML += criaNoticiaNova('https://img.quizur.com/f/img5f0dc63ea5e371.73755025.jpeg?lastEdited=1594738279', 'l esta morto?', 'novas teorias sobre o l do anime death note na internet vem enchendo de esperança fão do perssonagem')

containerNoticias.innerHTML += criaNoticiaNova('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpQNiT5JQYdml3WtqX4qwrhMF37m1Vo_11w&usqp=CAU', 'ahimes educacionais', 'animes vem ajudando crianças a aprenderem de uma forma mais divertida')


containerNoticias.innerHTML += criaNoticiaNova('https://img.redbull.com/images/c_crop,x_833,y_0,h_1080,w_864/c_fill,w_860,h_1075/q_auto,f_auto/redbullcom/2018/08/16/62eda1ec-8871-44bd-b553-91ab5ff51119/dragon-ball-fighterz-gohan', 'gohan dragon ball fightersz', 'o perssonagem gohan no dragon ball fightersz vem recebendo varios buffs nas ultimas atualizações')

containerNoticias.innerHTML += criaNoticiaNova('https://maisdeoitomil.files.wordpress.com/2020/10/noblesse-confused.jpg?w=982', 'novo genero de anime', 'novo genero de anime chamado fdskaljf vem fazendo sucesso entre o publico mais adulto')

containerNoticias.innerHTML += criaNoticiaNova('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61tsVmREN_DVDTGt5RJRC1Bww3cgdV0eQyQ&usqp=CAU', 'capitao levi fazendo sucesso', 'o perssonagem levi anda fazendo muito sucesso apos a ultima temporada do anime')

containerNoticias.innerHTML += criaNoticiaNova('https://sm.ign.com/ign_br/screenshot/default/blob_sq2b.jpg', 'nova temporada de Yakusoku no Neverland', 'estamos muito proximos da nova temporada do anime Yakusoku no Neverland')

containerNoticias.innerHTML += criaNoticiaNova('https://www.hitc.com/static/uploads/2020/09/Screenshot_2020-11-06-The-Promised-Neverland-Trailer-11.png', 'artes incriveis', 'veja essas artes incriveis do anime Yakusoku no Neverland')

containerNoticias.innerHTML += criaNoticiaNova('https://miro.medium.com/max/2880/0*HZgAefCTUB8wSsJ4.jpg', 'toniwaka', 'novo anime fofo vem fazendo sucesso no mundo todo')

containerNoticias.innerHTML += criaNoticiaNova('https://i.pinimg.com/736x/3d/cd/25/3dcd255868ffe0cc795b46ed3b9ea636.jpg', 'sucesso chamado darling', 'darling in the franxx vai ter nova temporada apos sucesso assustador')