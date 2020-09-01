const http = require("http");

const jsonData = [
    {
      "_id": "5f4eaca9c1364750e1053bf5",
      "index": 0,
      "guid": "73d843b8-49eb-493f-b6f9-4060c463aca2",
      "isActive": false,
      "balance": "$2,311.81",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "green",
      "name": "Mae Lowe",
      "gender": "female",
      "company": "JETSILK",
      "email": "maelowe@jetsilk.com",
      "phone": "+1 (863) 550-3517",
      "address": "798 Garfield Place, Cloverdale, Vermont, 5074",
      "about": "Dolore laborum qui sunt in deserunt aliqua dolore sit tempor non. Fugiat magna ut ullamco magna. Sit Lorem aute do adipisicing anim commodo ut deserunt cupidatat tempor excepteur. Cillum tempor eu cupidatat Lorem do laboris in consequat nisi.\r\n",
      "registered": "2014-06-08T06:27:36 +05:00",
      "latitude": 4.9254,
      "longitude": 63.863192,
      "tags": [
        "commodo",
        "reprehenderit",
        "excepteur",
        "excepteur",
        "ut",
        "sit",
        "ipsum"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Kline Lindsey"
        },
        {
          "id": 1,
          "name": "Potter Mckay"
        },
        {
          "id": 2,
          "name": "Arlene Mccoy"
        }
      ],
      "greeting": "Hello, Mae Lowe! You have 6 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f4eaca96f36614ad41759e4",
      "index": 1,
      "guid": "848154cb-68b7-4508-83ce-0cffbb17ee08",
      "isActive": true,
      "balance": "$3,381.27",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "green",
      "name": "Wilda Crosby",
      "gender": "female",
      "company": "PIGZART",
      "email": "wildacrosby@pigzart.com",
      "phone": "+1 (875) 469-3604",
      "address": "927 Rockaway Parkway, Kimmell, South Dakota, 7762",
      "about": "Duis ad esse in do aute veniam nulla dolore cupidatat velit culpa in do. Culpa cillum eiusmod cillum laboris cillum non. Aliquip veniam veniam deserunt est ullamco deserunt. Nostrud incididunt nulla esse qui anim culpa eiusmod ut deserunt deserunt eu in. Anim voluptate id id duis incididunt reprehenderit minim pariatur nostrud non proident non sint ad. Minim laboris esse tempor amet fugiat commodo proident nisi adipisicing ex commodo ipsum.\r\n",
      "registered": "2016-09-06T02:23:20 +05:00",
      "latitude": 62.2032,
      "longitude": -107.841173,
      "tags": [
        "cupidatat",
        "mollit",
        "adipisicing",
        "enim",
        "sunt",
        "sit",
        "velit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Travis Duke"
        },
        {
          "id": 1,
          "name": "Moore Whitfield"
        },
        {
          "id": 2,
          "name": "Claudine Maxwell"
        }
      ],
      "greeting": "Hello, Wilda Crosby! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5f4eaca9979b4309c28200cc",
      "index": 2,
      "guid": "33e7669a-cab6-41e7-93ff-629a2c4fc099",
      "isActive": true,
      "balance": "$3,509.20",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "brown",
      "name": "Walker Aguilar",
      "gender": "male",
      "company": "LUXURIA",
      "email": "walkeraguilar@luxuria.com",
      "phone": "+1 (987) 409-2289",
      "address": "791 Rewe Street, Villarreal, Colorado, 1896",
      "about": "Cupidatat deserunt enim adipisicing dolor voluptate fugiat nostrud minim culpa veniam sint. Fugiat ipsum laborum consequat veniam non id eu. Minim exercitation ex enim amet nostrud magna minim tempor. Non eiusmod excepteur cillum sint. Laborum ut consectetur pariatur elit ipsum ipsum voluptate incididunt ex incididunt in dolore. Consequat sunt ex officia in non aliqua dolore irure eu sit ad ad laboris. Lorem ut duis id occaecat.\r\n",
      "registered": "2016-09-08T06:27:17 +05:00",
      "latitude": 19.963537,
      "longitude": 97.556973,
      "tags": [
        "dolor",
        "labore",
        "eiusmod",
        "consectetur",
        "qui",
        "ad",
        "non"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lewis Mcclure"
        },
        {
          "id": 1,
          "name": "Ramsey Mccray"
        },
        {
          "id": 2,
          "name": "Wilkins Roy"
        }
      ],
      "greeting": "Hello, Walker Aguilar! You have 9 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f4eaca9f0b2f5493e3ed843",
      "index": 3,
      "guid": "8d16ed91-8036-47f1-afa3-4a06d4987e48",
      "isActive": false,
      "balance": "$2,636.86",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "brown",
      "name": "Lorrie Dunn",
      "gender": "female",
      "company": "MARQET",
      "email": "lorriedunn@marqet.com",
      "phone": "+1 (858) 467-2047",
      "address": "988 Buffalo Avenue, Homeland, Nevada, 5202",
      "about": "Adipisicing magna nostrud tempor ut enim anim. Veniam laboris dolore cupidatat laborum aliqua cupidatat. Ullamco veniam laborum id labore labore. Lorem labore eiusmod adipisicing tempor laborum non veniam sit amet dolor ex et ea.\r\n",
      "registered": "2019-05-16T08:02:28 +05:00",
      "latitude": -41.430672,
      "longitude": 95.546477,
      "tags": [
        "fugiat",
        "id",
        "proident",
        "sint",
        "consectetur",
        "do",
        "qui"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Nelson David"
        },
        {
          "id": 1,
          "name": "Brown Estrada"
        },
        {
          "id": 2,
          "name": "Judy Cooke"
        }
      ],
      "greeting": "Hello, Lorrie Dunn! You have 3 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5f4eaca9f8e483d75a1c6834",
      "index": 4,
      "guid": "71ce796c-5ff5-4ba4-babc-f716cdc331e1",
      "isActive": true,
      "balance": "$1,193.76",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "brown",
      "name": "Mcgee Williams",
      "gender": "male",
      "company": "OULU",
      "email": "mcgeewilliams@oulu.com",
      "phone": "+1 (861) 466-3425",
      "address": "731 Tampa Court, Tuttle, Indiana, 8605",
      "about": "Fugiat irure reprehenderit minim reprehenderit excepteur sint in adipisicing minim exercitation ea ullamco. Eu non mollit et non elit fugiat qui velit consequat. Irure elit duis deserunt laboris consectetur aute consequat cillum culpa sit cillum. Exercitation anim minim minim cillum est commodo mollit aliquip adipisicing aute ad. In sit ad est sunt reprehenderit irure aliqua.\r\n",
      "registered": "2020-04-17T12:07:13 +05:00",
      "latitude": -19.68429,
      "longitude": 52.77026,
      "tags": [
        "quis",
        "dolor",
        "labore",
        "esse",
        "aliqua",
        "enim",
        "quis"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Middleton Lawson"
        },
        {
          "id": 1,
          "name": "Bartlett Avery"
        },
        {
          "id": 2,
          "name": "Trudy Walter"
        }
      ],
      "greeting": "Hello, Mcgee Williams! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5f4eaca9799b600555bad28c",
      "index": 5,
      "guid": "477a7130-35a3-42a5-80d0-af2f30418858",
      "isActive": false,
      "balance": "$3,308.80",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "brown",
      "name": "Leila Burnett",
      "gender": "female",
      "company": "UNDERTAP",
      "email": "leilaburnett@undertap.com",
      "phone": "+1 (980) 440-3424",
      "address": "957 Schenck Avenue, Camas, New Mexico, 5259",
      "about": "Veniam sunt eu nisi deserunt do in labore dolor. Anim occaecat enim dolor nostrud aliqua nisi dolore minim culpa. Aute reprehenderit mollit laborum irure ipsum quis. Est cupidatat elit officia Lorem est minim esse dolore.\r\n",
      "registered": "2017-10-04T06:27:03 +05:00",
      "latitude": -74.686889,
      "longitude": 10.196772,
      "tags": [
        "sit",
        "occaecat",
        "do",
        "dolor",
        "voluptate",
        "laboris",
        "et"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Vasquez Clark"
        },
        {
          "id": 1,
          "name": "Davidson Jefferson"
        },
        {
          "id": 2,
          "name": "Marianne Larson"
        }
      ],
      "greeting": "Hello, Leila Burnett! You have 4 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5f4eaca901941958c25ceb44",
      "index": 6,
      "guid": "797d6477-cf2d-4c2e-9083-485633e3a864",
      "isActive": true,
      "balance": "$2,111.55",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": "Hoffman Duran",
      "gender": "male",
      "company": "ONTALITY",
      "email": "hoffmanduran@ontality.com",
      "phone": "+1 (893) 494-2081",
      "address": "191 Throop Avenue, Dupuyer, New Hampshire, 2514",
      "about": "Voluptate est irure dolor qui deserunt velit eu est sunt laborum. Culpa officia non consequat eu adipisicing ad elit ut occaecat reprehenderit reprehenderit. Ex ut consectetur duis aliqua exercitation velit aliqua voluptate aliqua dolor. Aliqua incididunt voluptate do eiusmod nisi ut deserunt velit esse minim magna laboris duis. Incididunt fugiat veniam nisi exercitation occaecat sunt ullamco. Aliquip velit commodo aute irure aliquip id ipsum. Id laborum cillum nulla ex sunt excepteur aliqua pariatur Lorem qui sunt eu.\r\n",
      "registered": "2014-06-04T05:53:41 +05:00",
      "latitude": -49.698389,
      "longitude": -12.069711,
      "tags": [
        "cupidatat",
        "qui",
        "magna",
        "velit",
        "sunt",
        "veniam",
        "occaecat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Hendricks Oconnor"
        },
        {
          "id": 1,
          "name": "Heidi Dodson"
        },
        {
          "id": 2,
          "name": "Pearlie Collins"
        }
      ],
      "greeting": "Hello, Hoffman Duran! You have 8 unread messages.",
      "favoriteFruit": "apple"
    }
  ];

http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/json"});
        res.end(JSON.stringify(jsonData));
    }else if(req.url =="/ordenes"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Listado de ordenes");
    }else if(req.url == "/pedidos"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Listado de pedidos");
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("No se encontro la solicitud");
    }

}).listen(3000);

console.log("servidor iniciado ...");

