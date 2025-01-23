let botao = document.querySelector("#button");


const frasesInspiradoras = [
    "Acredite no poder dos seus sonhos.",
    "Cada dia é uma nova oportunidade para recomeçar.",
    "A persistência é o caminho para o sucesso.",
    "Grandes conquistas exigem grandes esforços.",
    "A vida começa onde termina o medo.",
    "Seja a mudança que você quer ver no mundo.",
    "Nunca é tarde para ser quem você poderia ter sido.",
    "Acredite que você pode, e você já estará no meio do caminho.",
    "Não espere por oportunidades. Crie-as.",
    "Tudo que você sempre quis está do outro lado do medo.",
    "A jornada de mil milhas começa com um único passo.",
    "Você é mais forte do que pensa e mais capaz do que imagina.",
    "Aprenda com o passado, viva o presente e sonhe com o futuro.",
    "Sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você nunca falha até parar de tentar.",
    "Os melhores momentos da sua vida ainda estão por vir.",
    "Seja como uma árvore: mantenha-se firme e cresça todos os dias.",
    "A felicidade não é algo pronto. Ela vem das suas ações.",
    "Transforme obstáculos em degraus para o sucesso.",
    "Acredite: o impossível é apenas o possível que ainda não foi feito.",
    "Sonhar grande e sonhar pequeno dá o mesmo trabalho. Então sonhe grande.",
    "Sua vida é limitada apenas pelos limites da sua imaginação.",
    "Seja a energia que você quer atrair.",
    "Tudo o que você precisa para vencer já está dentro de você.",
    "A ação é a chave fundamental para todo sucesso.",
    "O primeiro passo para alcançar o impossível é acreditar que é possível.",
    "Coragem não é a ausência de medo, mas a decisão de que algo é mais importante que o medo.",
    "Se você quer ir rápido, vá sozinho. Se você quer ir longe, vá acompanhado.",
    "Faça mais do que o esperado e veja como o mundo responde.",
    "Concentre-se no progresso, não na perfeição.",
    "Não importa a velocidade. Continue se movendo.",
    "Dificuldades preparam pessoas comuns para destinos extraordinários.",
    "A única forma de fazer um excelente trabalho é amar o que você faz.",
    "Tudo o que você busca também está buscando você.",
    "Seja positivo, paciente e persistente.",
    "Você não precisa ver a escada inteira. Apenas dê o primeiro passo.",
    "Quanto maior o desafio, maior a oportunidade de crescer.",
    "Confie no processo, mesmo quando ele parecer difícil.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Seja gentil consigo mesmo. Grandes mudanças levam tempo.",
    "As melhores coisas da vida estão do outro lado do medo.",
    "A vida recompensa aqueles que nunca desistem.",
    "Seja o autor da sua própria história.",
    "O que você faz hoje pode melhorar todos os seus amanhãs.",
    "Você tem o poder de criar a vida que deseja viver.",
    "Acredite no processo e continue caminhando.",
    "Nada é impossível para uma mente determinada.",
    "Você não precisa ser perfeito para começar, mas precisa começar para ser perfeito.",
    "A coragem é como um músculo: quanto mais você a usa, mais forte ela fica.",
    "Você é a média das cinco pessoas com quem mais convive. Escolha bem.",
    "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
    "Fracasso não é o oposto de sucesso; é parte dele.",
    "O único limite para o nosso sucesso de amanhã são as dúvidas de hoje.",
    "Você tem o poder de transformar qualquer dia em um dia incrível.",
    "Nunca subestime o poder de um pequeno passo.",
    "O impossível é apenas uma opinião, não um fato.",
    "O maior erro que você pode cometer é não tentar.",
    "Você nunca estará velho demais para definir um novo objetivo ou sonhar um novo sonho.",
    "Cada dificuldade superada é um passo em direção ao seu objetivo.",
    "A motivação é o que faz você começar. O hábito é o que mantém você indo.",
    "Você é capaz de muito mais do que imagina.",
    "Concentre-se no que você pode controlar e deixe o resto ir.",
    "Tenha coragem para seguir o que faz seu coração vibrar.",
    "Hoje é o dia perfeito para começar algo novo.",
    "Você é o criador do seu próprio destino.",
    "Nada pode impedir alguém que nunca desiste.",
    "O segredo do sucesso é começar antes de se sentir pronto.",
    "As oportunidades não surgem. Você as cria.",
    "Seja forte o suficiente para seguir seus sonhos.",
    "Nunca duvide do seu valor ou do que você pode alcançar.",
    "Cada pequeno passo é um progresso na direção certa.",
    "O universo sempre conspira a favor de quem acredita nos seus sonhos.",
    "Você só falha quando para de tentar.",
    "Acredite em si mesmo e você será imparável.",
    "Não deixe o medo decidir o seu futuro.",
    "Você é a única pessoa responsável pela sua felicidade.",
    "O sucesso não é para os escolhidos; é para os dedicados.",
    "Seja grato pelo que você tem, enquanto trabalha pelo que você quer.",
    "Tudo acontece no momento certo, seja paciente e confie no caminho.",
    "Você é mais forte do que qualquer obstáculo que enfrenta.",
    "Cada sonho que você abandona é uma parte do seu futuro que deixa de existir.",
    "Vá além do que você acha que pode alcançar."
    // Continue adicionando mais frases aqui até chegar a 1000...
  ]; 
  function gerarFrases(){
    let caixaFrase = document.querySelector("#frase");
    let fraseAleatoria = Math.floor(Math.random() * 82);
    let fraseEscolhida = frasesInspiradoras[fraseAleatoria];
    caixaFrase.innerHTML = '"' + fraseEscolhida + '"';
  }

  async function gerarImagens(){
    let caixaImg = document.querySelector("#imagem");
    let requisicao = await fetch("https://picsum.photos/250");
    caixaImg.src = await requisicao.url;

  }

botao.addEventListener("click", async () => {
    await gerarImagens();
    gerarFrases();
  

      
})