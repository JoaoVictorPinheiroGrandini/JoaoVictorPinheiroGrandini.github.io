/*async function pegarReceitas() {
    let url = "https://api-receitas-pi.vercel.app/receitas/todas";
    let requisicao = await fetch(url);
    return await requisicao.json();
}*/
let receitas = [
    {
        "id": 1,
        "nome": "Bolo de Cenoura",
        "ingredientes": [
            "3 cenouras médias",
            "4 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó"
        ],
        "modo_preparo": "Bata as cenouras, os ovos e o óleo no liquidificador. Em uma tigela, misture o creme com o açúcar, a farinha e o fermento. Leve ao forno preaquecido a 180°C por cerca de 40 minutos.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqid-kzi2UPc0-7Lyx_7Nfu_yY8AvkolERg&s",
        "tipo": "doce",
        "data_criacao": "2025-02-30"
    },
    {
        "id": 2,
        "nome": "Macarrão ao Alho e Óleo",
        "ingredientes": [
            "500g de macarrão",
            "4 dentes de alho picados",
            "1/4 de xícara de azeite",
            "Sal a gosto",
            "Pimenta a gosto",
            "Cheiro-verde picado (opcional)"
        ],
        "modo_preparo": "Cozinhe o macarrão em água salgada até ficar al dente. Em uma frigideira, aqueça o azeite e doure o alho. Misture o macarrão com o alho e finalize com cheiro-verde.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7GlNObp-JcHfJSoAtrdaFsOKczRsRO317Q&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 3,
        "nome": "Salada de Frutas",
        "ingredientes": [
            "1 maçã",
            "1 banana",
            "1 laranja",
            "1/2 mamão",
            "Suco de 1 limão",
            "2 colheres de sopa de açúcar"
        ],
        "modo_preparo": "Corte as frutas em pedaços pequenos. Misture-as em uma tigela com o suco de limão e o açúcar. Sirva gelado.",
        "link_imagem": "https://static.itdg.com.br/images/360-240/aa1162b8fa7ded0b12aae2b6ee3fbf8f/shutterstock-53627107.jpg",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 4,
        "nome": "Panqueca de Frango",
        "ingredientes": [
            "1 xícara de farinha de trigo",
            "1 xícara de leite",
            "1 ovo",
            "1 pitada de sal",
            "2 xícaras de frango desfiado",
            "1 xícara de molho de tomate",
            "Queijo ralado a gosto"
        ],
        "modo_preparo": "Misture a farinha, o leite, o ovo e o sal para fazer a massa. Prepare as panquecas em uma frigideira. Recheie com frango e molho, enrole e cubra com queijo. Leve ao forno para gratinar.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYwHdzwafbPjn4Yfm2V-1OwBRtIdGvEosEw&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 5,
        "nome": "Brigadeiro",
        "ingredientes": [
            "1 lata de leite condensado",
            "2 colheres de sopa de cacau em pó",
            "1 colher de sopa de manteiga",
            "Granulado para decorar"
        ],
        "modo_preparo": "Misture o leite condensado, o cacau e a manteiga em uma panela. Mexa até desgrudar do fundo. Deixe esfriar, enrole e passe no granulado.",
        "link_imagem": "https://i.panelinha.com.br/i1/228-q-2859-brigadeiro.webp",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 6,
        "nome": "Torta de Limão",
        "ingredientes": [
            "1 pacote de biscoito maisena",
            "100g de manteiga derretida",
            "1 lata de leite condensado",
            "Suco de 2 limões",
            "1 caixinha de creme de leite",
            "Raspas de limão para decorar"
        ],
        "modo_preparo": "Triture os biscoitos e misture com a manteiga para formar a base. Bata o leite condensado, o suco de limão e o creme de leite. Despeje sobre a base e leve à geladeira.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hTibO0mDXFsYEz5DxW8rcJ_CvmxqoxPzCw&s",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 7,
        "nome": "Escondidinho de Carne Seca",
        "ingredientes": [
            "500g de carne seca dessalgada e desfiada",
            "1kg de mandioca cozida",
            "2 colheres de sopa de manteiga",
            "1 xícara de leite",
            "1 cebola picada",
            "Queijo ralado a gosto"
        ],
        "modo_preparo": "Refogue a carne com a cebola. Faça um purê com a mandioca, a manteiga e o leite. Em um refratário, coloque uma camada de purê, a carne e cubra com mais purê. Finalize com queijo e leve ao forno.",
        "link_imagem": "https://cdn.awsli.com.br/600x700/2764/2764662/produto/299696741/escondidinho-de-carne-com-pure-de-mandioca-7bd6qb5l9c.jpg",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 8,
        "nome": "Arroz Doce",
        "ingredientes": [
            "1 xícara de arroz",
            "2 xícaras de água",
            "1 litro de leite",
            "1 lata de leite condensado",
            "Canela em pó para decorar"
        ],
        "modo_preparo": "Cozinhe o arroz na água até secar. Acrescente o leite e o leite condensado, mexendo até engrossar. Sirva com canela.",
        "link_imagem": "https://static.itdg.com.br/images/640-440/24ce40d2994803df0982ba3a1e1ea9dd/shutterstock-1709289238.jpg",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 9,
        "nome": "Quiche de Espinafre",
        "ingredientes": [
            "1 pacote de massa folhada",
            "2 xícaras de espinafre cozido e picado",
            "3 ovos",
            "1 xícara de creme de leite",
            "100g de queijo parmesão ralado",
            "Sal e pimenta a gosto"
        ],
        "modo_preparo": "Forre uma forma com a massa folhada. Misture o espinafre, os ovos, o creme de leite e o queijo. Tempere e despeje sobre a massa. Asse em forno preaquecido a 180°C por 30 minutos.",
        "link_imagem": "https://static.itdg.com.br/images/360-240/04f97152aa37bf92d0ae8766fc17ae16/339092-original.jpg",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 10,
        "nome": "Cuscuz Nordestino",
        "ingredientes": [
            "2 xícaras de flocos de milho",
            "1/2 xícara de água",
            "1 pitada de sal",
            "Manteiga para acompanhar"
        ],
        "modo_preparo": "Misture os flocos de milho com a água e o sal. Deixe hidratar por 10 minutos. Coloque na cuscuzeira e cozinhe no vapor por 10 minutos. Sirva com manteiga.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5i0o1HVws7w7l95uQVojyuWtkAobbn8r8-w&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 11,
        "nome": "Pavê de Chocolate",
        "ingredientes": [
            "1 pacote de biscoito champagne",
            "2 xícaras de leite",
            "1 lata de leite condensado",
            "1 caixinha de creme de leite",
            "200g de chocolate meio amargo derretido"
        ],
        "modo_preparo": "Molhe os biscoitos no leite e monte camadas alternando com creme de chocolate (feito com leite condensado, creme de leite e chocolate derretido). Leve à geladeira.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosUPCoczJwWFgGicb5dSCJHeJNRSSImh-eg&s",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 12,
        "nome": "Omelete de Legumes",
        "ingredientes": [
            "3 ovos",
            "1 cenoura ralada",
            "1/2 abobrinha picada",
            "1/2 cebola picada",
            "Sal e pimenta a gosto",
            "1 colher de sopa de azeite"
        ],
        "modo_preparo": "Bata os ovos e misture com os legumes. Tempere e despeje em uma frigideira com azeite quente. Cozinhe em fogo baixo até firmar.",
        "link_imagem": "https://s2-receitas.glbimg.com/BRWJPb0YMAUzERbFDATtt2_u8C8=/540x304/middle/smart/https://i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/2/i/QB8fXjR5akXsRR4qjEzg/omelete-de-claras.jpg",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 13,
        "nome": "Bolo de Chocolate",
        "ingredientes": [
            "2 xícaras de farinha de trigo",
            "1 xícara de açúcar",
            "1 xícara de cacau em pó",
            "1 colher de sopa de fermento",
            "3 ovos",
            "1 xícara de leite",
            "1/2 xícara de óleo"
        ],
        "modo_preparo": "Misture os ingredientes secos. Adicione os líquidos e mexa até obter uma massa homogênea. Leve ao forno preaquecido a 180°C por 40 minutos.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnZYRrzdjh8SL2znlxsamM4xyPRmXcWgM3g&s",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 14,
        "nome": "Lasanha à Bolonhesa",
        "ingredientes": [
            "500g de massa para lasanha",
            "500g de carne moída",
            "2 xícaras de molho de tomate",
            "500g de queijo muçarela",
            "500g de presunto",
            "1 colher de sopa de azeite",
            "1 cebola picada",
            "Sal e pimenta a gosto"
        ],
        "modo_preparo": "Refogue a carne com cebola, azeite, sal e pimenta. Monte camadas de massa, carne, presunto, queijo e molho. Repita até acabar os ingredientes e leve ao forno por 30 minutos.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdkttpg78knS8q3ss-XQ0HngWQBuDJD7Skg&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 15,
        "nome": "Mousse de Maracujá",
        "ingredientes": [
            "1 lata de leite condensado",
            "1 lata de creme de leite",
            "1 xícara de suco de maracujá concentrado"
        ],
        "modo_preparo": "Bata todos os ingredientes no liquidificador até obter um creme homogêneo. Leve à geladeira por 2 horas antes de servir.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGFdQ43d02_XilLsufDgKSV7fG1Ji5MALfg&s",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 16,
        "nome": "Tapioca Simples",
        "ingredientes": [
            "1 xícara de goma de tapioca hidratada",
            "1 pitada de sal",
            "Recheio a gosto (queijo, coco, leite condensado, etc.)"
        ],
        "modo_preparo": "Peneire a goma em uma frigideira quente e espalhe uniformemente. Quando firmar, adicione o recheio e dobre ao meio.",
        "link_imagem": "https://img.cybercook.com.br/imagens/receitas/280/tapioca-1.jpg?w=350&h=230&fit=crop",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 17,
        "nome": "Batata Recheada",
        "ingredientes": [
            "4 batatas grandes",
            "1 xícara de frango desfiado",
            "1/2 xícara de requeijão",
            "Queijo ralado a gosto",
            "Sal e pimenta a gosto"
        ],
        "modo_preparo": "Cozinhe as batatas até ficarem macias. Corte ao meio, retire parte da polpa e misture com o frango e requeijão. Recheie as batatas, cubra com queijo e leve ao forno para gratinar.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHrM4Dd7OYynkDHTmCmiPekXCFxhb_bvDMw&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 18,
        "nome": "Sorvete de Morango",
        "ingredientes": [
            "2 xícaras de morangos",
            "1 lata de leite condensado",
            "1 lata de creme de leite"
        ],
        "modo_preparo": "Bata os ingredientes no liquidificador até obter uma mistura homogênea. Leve ao freezer por 4 horas antes de servir.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ljdi_Qv5_JdoI9DrSV5X987dCFl9FbhIwg&s",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 19,
        "nome": "Pizza de Frigideira",
        "ingredientes": [
            "1 massa pronta para pizza de frigideira",
            "2 colheres de molho de tomate",
            "100g de queijo muçarela",
            "Recheio a gosto (presunto, tomate, azeitonas, etc.)"
        ],
        "modo_preparo": "Coloque a massa na frigideira e espalhe o molho. Adicione o queijo e os recheios. Tampe e deixe em fogo baixo até o queijo derreter.",
        "link_imagem": "https://static.itdg.com.br/images/360-240/6ba13849aeffde4295a3026d94797908/73166-original.jpg",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 20,
        "nome": "Brownie de Chocolate",
        "ingredientes": [
            "200g de chocolate meio amargo",
            "1/2 xícara de manteiga",
            "1 xícara de açúcar",
            "2 ovos",
            "1 xícara de farinha de trigo",
            "1 pitada de sal"
        ],
        "modo_preparo": "Derreta o chocolate com a manteiga. Misture o açúcar, os ovos, a farinha e o sal. Despeje em uma forma untada e asse em forno preaquecido a 180°C por 25 minutos.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJWiVWDlOuO0T7qBWjb37XLc9MwIWTTdzTQ&s",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {"id": 21,
        "nome": "Risoto de Camarão",
        "ingredientes": [
            "1 xícara de arroz arbóreo",
            "300g de camarão limpo",
            "1/2 xícara de vinho branco",
            "1 litro de caldo de legumes",
            "1 cebola picada",
            "2 colheres de sopa de manteiga",
            "Queijo parmesão ralado a gosto"
        ],
        "modo_preparo": "Refogue a cebola na manteiga, adicione o arroz e o vinho. Aos poucos, adicione o caldo, mexendo sempre. No final, misture os camarões já grelhados e finalize com queijo.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_WRTxkUpJGwBHzPBUCP6t6cw0j7mlWs5Ag&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 22,
        "nome": "Churros Caseiros",
        "ingredientes": [
            "2 xícaras de água",
            "2 colheres de sopa de manteiga",
            "2 xícaras de farinha de trigo",
            "1 pitada de sal",
            "Açúcar e canela para polvilhar",
            "Doce de leite para rechear"
        ],
        "modo_preparo": "Ferva a água com manteiga e sal. Adicione a farinha de uma vez e mexa até formar uma massa homogênea. Modele os churros, frite e passe no açúcar com canela. Recheie com doce de leite.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqsk2kb14go9qBtzdD9zmniaatkUnZe0TyA&s",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 23,
        "nome": "Sopa de Lentilha",
        "ingredientes": [
            "2 xícaras de lentilha",
            "1 litro de água",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 cenoura picada",
            "Sal e pimenta a gosto",
            "1 colher de sopa de azeite"
        ],
        "modo_preparo": "Refogue a cebola, o alho e a cenoura no azeite. Adicione a lentilha e a água, tempere e cozinhe até a lentilha ficar macia. Sirva quente.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaPZZc9LdQcsUqDKAxkRhGYhMRwTrw81mPQ&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 24,
        "nome": "Pizza de Liquidificador",
        "ingredientes": [
            "1 xícara de leite",
            "1 ovo",
            "1 colher de sopa de manteiga",
            "1 xícara de farinha de trigo",
            "1 colher de chá de fermento em pó",
            "Molho de tomate, queijo e recheio a gosto"
        ],
        "modo_preparo": "Bata todos os ingredientes da massa no liquidificador. Despeje em uma forma untada, cubra com molho e recheios e leve ao forno por 20 minutos.",
        "link_imagem": "https://static.itdg.com.br/images/360-240/4e7e42d39076f23b1b85a5c6afb7cfa6/160007-original.jpg",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 25,
        "nome": "Creme de Abóbora",
        "ingredientes": [
            "500g de abóbora picada",
            "1 litro de caldo de legumes",
            "1 cebola picada",
            "2 dentes de alho picados",
            "1 colher de sopa de azeite",
            "Sal e pimenta a gosto"
        ],
        "modo_preparo": "Refogue a cebola e o alho no azeite. Adicione a abóbora e o caldo, e cozinhe até amolecer. Bata no liquidificador, volte à panela e ajuste os temperos.",
        "link_imagem": "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-256/creme-de-abobora-e-camarao-1475868.jpg",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 26,
        "nome": "Cookies de Chocolate",
        "ingredientes": [
            "2 xícaras de farinha de trigo",
            "1/2 colher de chá de fermento",
            "1/2 colher de chá de bicarbonato",
            "1 xícara de açúcar mascavo",
            "1/2 xícara de manteiga",
            "1 ovo",
            "1 xícara de gotas de chocolate"
        ],
        "modo_preparo": "Misture os ingredientes secos e adicione os líquidos. Forme bolinhas, coloque em uma assadeira e asse em forno preaquecido a 180°C por 15 minutos.",
        "link_imagem": "https://armazemsaovito.fbitsstatic.net/img/p/cookies-de-cafe-com-gotas-de-chocolate-vegano-161534/359246.jpg?w=256&h=256&v=no-change&qs=ignore",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 27,
        "nome": "Torta de Frango",
        "ingredientes": [
            "2 xícaras de farinha de trigo",
            "1/2 xícara de óleo",
            "2 xícaras de leite",
            "3 ovos",
            "1 colher de sopa de fermento",
            "2 xícaras de frango desfiado",
            "1 xícara de molho de tomate"
        ],
        "modo_preparo": "Bata os ingredientes da massa no liquidificador. Em uma forma, coloque metade da massa, o recheio de frango e cubra com o restante da massa. Asse por 30 minutos.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnrXskLM9TR46IEYMzhnuXrvFQVs3CAj3Lw&s",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 28,
        "nome": "Purê de Batata",
        "ingredientes": [
            "500g de batatas",
            "1/2 xícara de leite",
            "2 colheres de sopa de manteiga",
            "Sal a gosto"
        ],
        "modo_preparo": "Cozinhe as batatas até ficarem macias. Amasse, adicione a manteiga e o leite, e mexa até obter um purê cremoso.",
        "link_imagem": "https://bigoven-res.cloudinary.com/image/upload/f_auto,q_auto/t_recipe-256/acompaar-pur-de-papa-c32279.png",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 29,
        "nome": "Salada Caprese",
        "ingredientes": [
            "2 tomates",
            "200g de queijo muçarela de búfala",
            "Folhas de manjericão fresco",
            "Azeite, sal e pimenta a gosto"
        ],
        "modo_preparo": "Corte os tomates e a muçarela em fatias. Monte camadas alternadas, tempere com azeite, sal e pimenta, e finalize com manjericão.",
        "link_imagem": "https://images.rappi.com.br/products/2095232684-1603207531034.jpg?d=50x50&e=webp&q=10",
        "tipo": "salgada",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 30,
        "nome": "Torta de Maçã",
        "ingredientes": [
            "2 xícaras de farinha de trigo",
            "1/2 xícara de manteiga",
            "1/2 xícara de açúcar",
            "4 maçãs fatiadas",
            "Canela e açúcar para polvilhar"
        ],
        "modo_preparo": "Misture a farinha, manteiga e açúcar para fazer a massa. Forre uma forma, adicione as maçãs, polvilhe canela e açúcar, e asse a 180°C por 40 minutos.",
        "link_imagem": "https://pm1.aminoapps.com/6456/abc9b39a39afe83f7509db0b1f4b506a3ede199a_128.jpg",
        "tipo": "doce",
        "data_criacao": "2025-01-23"
    },
    {
        "id": 31,
        "nome": "Quiche de Espinafre",
        "ingredientes": [
            "1 massa pronta para torta",
            "2 xícaras de espinafre picado",
            "1 xícara de creme de leite",
            "3 ovos",
            "1 xícara de queijo ralado",
            "Sal e pimenta a gosto"
        ],
        "modo_preparo": "Espalhe a massa em uma forma. Misture os ingredientes do recheio e despeje sobre a massa. Asse em forno preaquecido a 180°C por 35 minutos.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cuhwgdIG1TXjMlp6InTVHZ8gOkQd59ZsDw&s",
        "tipo": "salgada",
        "data_criacao": "1968-03-12"
    },
    {
        "id": 32,
        "nome": "Tapioca de Coco com Leite Condensado",
        "ingredientes": [
            "1 xícara de goma de tapioca",
            "1/2 xícara de coco ralado",
            "Leite condensado a gosto"
        ],
        "modo_preparo": "Espalhe a goma de tapioca em uma frigideira quente, adicione o coco ralado e, ao final, coloque o leite condensado antes de dobrar.",
        "link_imagem": "https://image.gplustogo.com.br/produto/138/t2631.jpeg?v=1",
        "tipo": "doce",
        "data_criacao": "1982-07-24"
    },
    {
        "id": 33,
        "nome": "Macarrão ao Molho Pesto",
        "ingredientes": [
            "500g de macarrão",
            "1 xícara de manjericão fresco",
            "1/2 xícara de azeite de oliva",
            "1/2 xícara de queijo parmesão",
            "1/4 xícara de nozes ou pinhões",
            "2 dentes de alho",
            "Sal a gosto"
        ],
        "modo_preparo": "Cozinhe o macarrão conforme as instruções. Bata os demais ingredientes no liquidificador para fazer o pesto e misture ao macarrão.",
        "link_imagem": "https://storage.deliveryvip.com.br/xrBGWceploQUSkKujiQ8uR-rLgCjS2cUHj40G-6QXTQ/h:256/Z3M6Ly9kZWxpdmVy/eXZpcC94c3R0Mjl2/dmV5bW56dG95MzVs/c3g0MTR2dTRv",
        "tipo": "salgada",
        "data_criacao": "1995-09-15"
    },
    {
        "id": 34,
        "nome": "Brigadeiro Gourmet",
        "ingredientes": [
            "1 lata de leite condensado",
            "2 colheres de sopa de cacau em pó",
            "1 colher de sopa de manteiga",
            "Chocolate granulado para enrolar"
        ],
        "modo_preparo": "Misture os ingredientes em uma panela e cozinhe em fogo baixo até desgrudar do fundo. Deixe esfriar, enrole e passe no granulado.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOei0E9rS5CKOweK_ZvYKn_R2gl-hKl25IMw&s",
        "tipo": "doce",
        "data_criacao": "2003-05-10"
    },
    {
        "id": 35,
        "nome": "Filé de Peixe ao Molho de Alcaparras",
        "ingredientes": [
            "4 filés de peixe",
            "2 colheres de sopa de manteiga",
            "1/4 xícara de alcaparras",
            "Suco de 1 limão",
            "Sal e pimenta a gosto"
        ],
        "modo_preparo": "Tempere os filés e grelhe na manteiga. Adicione as alcaparras e o suco de limão na frigideira para fazer o molho. Sirva sobre o peixe.",
        "link_imagem": "https://s2.glbimg.com/pfR_MHEg-oLBV6huDZ01G9QuOxE=/smart/e.glbimg.com/og/ed/f/original/2016/10/03/receita-peixe-alcaparras-dalmo-barbaro.jpg",
        "tipo": "salgada",
        "data_criacao": "1978-11-03"
    },
    {
        "id": 36,
        "nome": "Ceviche de Tilápia",
        "ingredientes": [
            "400g de filé de tilápia",
            "Suco de 3 limões",
            "1 cebola roxa em tiras",
            "1 pimenta dedo-de-moça picada",
            "Cebolinha e coentro a gosto",
            "Sal a gosto"
        ],
        "modo_preparo": "Corte a tilápia em cubos e misture com os demais ingredientes. Deixe marinar na geladeira por 20 minutos antes de servir.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jwD1ChhHciSwp_BBmWQz5CLmDOc0jzOPrA&s",
        "tipo": "salgada",
        "data_criacao": "1990-04-28"
    },
    {
        "id": 37,
        "nome": "Bolo de Cenoura com Cobertura de Chocolate",
        "ingredientes": [
            "3 cenouras médias",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento em pó",
            "1 xícara de chocolate em pó",
            "1 lata de leite condensado"
        ],
        "modo_preparo": "Bata as cenouras, ovos e óleo no liquidificador. Misture com os ingredientes secos e asse por 40 minutos. Faça uma cobertura com chocolate e leite condensado e despeje sobre o bolo.",
        "link_imagem": "https://bigoven-res.cloudinary.com/image/upload/f_auto,q_auto/t_recipe-256/bolo-de-cenoura-com-brigadeiro-827e77.jpg",
        "tipo": "doce",
        "data_criacao": "1988-06-17"
    },
    {
        "id": 38,
        "nome": "Salada Caesar",
        "ingredientes": [
            "1 alface americana",
            "Croutons a gosto",
            "100g de queijo parmesão",
            "1/2 xícara de molho Caesar (pronto ou caseiro)",
            "Frango grelhado opcional"
        ],
        "modo_preparo": "Misture a alface com o molho, adicione os croutons, queijo e, se desejar, o frango grelhado.",
        "link_imagem": "https://bigoven-res.cloudinary.com/image/upload/f_auto,q_auto/t_recipe-256/salada-caesar-270263.jpg",
        "tipo": "salgada",
        "data_criacao": "2005-02-09"
    },
    {
        "id": 39,
        "nome": "Panqueca Americana",
        "ingredientes": [
            "1 xícara de farinha de trigo",
            "2 colheres de sopa de açúcar",
            "1 colher de chá de fermento em pó",
            "1 ovo",
            "1 xícara de leite",
            "2 colheres de sopa de manteiga derretida"
        ],
        "modo_preparo": "Misture os ingredientes secos e depois adicione os líquidos. Frite pequenas porções em uma frigideira até dourar dos dois lados.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxS-w9TrqlHWXdDy83H3BvG1_ozbSD3xceSw&s",
        "tipo": "doce",
        "data_criacao": "1973-10-01"
    },
    {
        "id": 40,
        "nome": "Estrogonofe de Carne",
        "ingredientes": [
            "500g de carne em tiras",
            "1 cebola picada",
            "1 colher de sopa de manteiga",
            "1 xícara de creme de leite",
            "2 colheres de sopa de ketchup",
            "1 colher de sopa de mostarda",
            "Sal e pimenta a gosto"
        ],
        "modo_preparo": "Refogue a carne com manteiga e cebola. Adicione o ketchup, mostarda e creme de leite. Cozinhe por alguns minutos e sirva com arroz e batata palha.",
        "link_imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdwU089rH3ZmWV3G7EcafR5HpyO5Nm7TbXQ&s",
        "tipo": "salgada",
        "data_criacao": "1963-12-25"
    }

]
let inputTexto = document.querySelector("#inputTexto");
let selectPesquisa = document.querySelector("#selectPesquisa");
let selectOrdenar = document.querySelector("#selectOrdenar");
let secaoDeReceitas = document.querySelector("#recList")

function popularPagina(lista){
    secaoDeReceitas.innerHTML = "";
    lista.forEach(element => {
        let receita = document.createElement("div");
        let nome = document.createElement("h2");
        let imagem = document.createElement("img");
        let modoPreparo = document.createElement("p")
        let listaIngredientes = document.createElement("ul");
        let tipo = document.createElement("p");
        let data = document.createElement("p");
        let div = document.createElement("div")

        secaoDeReceitas.appendChild(receita);
        receita.appendChild(imagem);
        imagem.src = element.link_imagem;
        receita.appendChild(nome);
        nome.textContent = element.nome;
        receita.appendChild(listaIngredientes);
        element.ingredientes.forEach(ingrediente => {
            let li = document.createElement("li");
            listaIngredientes.appendChild(li);
            li.textContent = ingrediente;
        });
        receita.appendChild(modoPreparo);
        modoPreparo.textContent = element.modo_preparo;
        receita.appendChild(div)
        div.appendChild(tipo);
        tipo.textContent = element.tipo
        div.appendChild(data);
        data.textContent = element.data_criacao

        div.className = "divDataTipo"
        receita.className = "receitas";
        
    });
}

popularPagina(receitas)

function pesquisar(textoDoUsuario, ondePesquisar){
    switch(ondePesquisar){
        case "nome": return receitas.filter((elemento) => elemento.nome.toLowerCase().includes(textoDoUsuario.toLowerCase()) || textoDoUsuario == "");       
        case "tipo": return receitas.filter((elemento) => elemento.tipo.toLowerCase().includes(textoDoUsuario.toLowerCase()) || textoDoUsuario == "");
        case "data_criacao": return receitas.filter((elemento) => {
            let data = elemento.data_criacao.split("-");
            return data[0] == textoDoUsuario || textoDoUsuario == "";
        })
        case "ingredientes": return receitas.filter((elemento) =>{
            let counter = 0;
            elemento.ingredientes.forEach(element => {
                if(element.toLowerCase().includes(textoDoUsuario.toLowerCase()) || textoDoUsuario == ""){
                    counter ++
                }
            });
            if(counter > 0){
                return true;
            }else{
                return false;
            }
        })
    } 
}

function ordenar(lista, peloQueOrdenar){
    switch(peloQueOrdenar){
        case "nome": return lista.sort((a, b) => {
            if(a.nome < b.nome)
                return -1;
            if(a.nome == b.nome)
                return 0;
            if(a.nome > b.nome)
                return 1;
        });       
        case "data_criacao": return lista.sort((a, b) => {
            if(a.data_criacao < b.data_criacao)
                return -1;
            if(a.data_criacao == b.data_criacao)
                return 0;
            if(a.data_criacao > b.data_criacao)
                return 1;
        });
        case "ingredientes": return lista.sort((a, b) => {
            if(a.ingredientes.length < b.ingredientes.length)
                return -1;
            if(a.ingredientes.length == b.ingredientes.length)
                return 0;
            if(a.ingredientes.length > b.ingredientes.length)
                return 1;
        });
    }
}

let botao = document.querySelector("#botao");
botao.addEventListener('click', () =>{
    let pesquisa = inputTexto.value;
    let pesquisarPor = selectPesquisa.value;
    let ordenarPor = selectOrdenar.value;
    let radioOrdenar = document.querySelector('input[name="ordenar"]:checked').value;

    let receitasFiltradas = pesquisar(pesquisa, pesquisarPor);
    let receitasOrdenadas = ordenar(receitasFiltradas, ordenarPor);
    
    if(radioOrdenar == "decrescente"){
        receitasOrdenadas.reverse();
    }
    
    popularPagina(receitasOrdenadas);
    
})