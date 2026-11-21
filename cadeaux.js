// Liste des cadeaux : ajoute un bloc { ... } par cadeau, photo à côté de ce fichier
const CADEAUX = [
  {
    "id": "alma-gilet-denim",
    "cat": "Vestes & gilets",
    "price": 69,
    "size": "L",
    "title": "Gilet en jean Alma",
    "link": "https://almanarrewindandwave.com/products/gilet-denim-alma?variant=53064040612183",
    "why": "Je suis le personnage principal. Le personnage principal porte un gilet en jean. Fin du débat.",
    "photo": "alma-gilet-denim.jpg",
    "ordre": 1
  },
  {
    "id": "alma-gilet-matelasse-bleu",
    "cat": "Vestes & gilets",
    "price": 84,
    "size": "L",
    "title": "Gilet matelassé Alma bleu",
    "link": "https://almanarrewindandwave.com/products/gilet-matelasse-alma-bleu-xs?variant=53924206805335",
    "why": "Buste au chaud, bras libres, regard glacial. L'équilibre parfait.",
    "photo": "alma-gilet-matelasse-bleu.jpg",
    "ordre": 2
  },
  {
    "id": "alma-mariniere-kaki",
    "cat": "Hauts",
    "price": 69,
    "size": "M",
    "title": "Marinière manches longues kaki",
    "link": "https://almanarrewindandwave.com/products/tee-mariniere-manche-longue-kaki?variant=51725473612119",
    "why": "Je vis sur la Côte d'Azur. Sans marinière, on me retire mon passeport.",
    "note": "Précommande, expédiée à partir du 27 novembre.",
    "photo": "alma-mariniere-kaki.jpg",
    "ordre": 3
  },
  {
    "id": "alma-mariniere-bleu",
    "cat": "Hauts",
    "price": 69,
    "size": "M",
    "title": "Marinière manches longues bleue",
    "link": "https://almanarrewindandwave.com/products/tee-mariniere-manche-longue-bleu?variant=53898621714775",
    "why": "Deux marinières ? Je ne m'excuserai pas.",
    "note": "Précommande, expédiée à partir du 27 novembre.",
    "photo": "alma-mariniere-bleu.jpg",
    "ordre": 4
  },
  {
    "id": "natif-sherpa",
    "cat": "Vestes & gilets",
    "price": 170,
    "size": "M/L",
    "title": "Veste sherpa N Flowers – Natif",
    "link": "https://natif-shop.com/products/veste-sherpa-n-fowers?variant=49937357832539",
    "why": "Je veux être un mouton. Un mouton riche, avec des fleurs dans le dos.",
    "note": "Dernières pièces.",
    "photo": "natif-sherpa.jpg",
    "ordre": 5
  },
  {
    "id": "birkenstock-naples",
    "cat": "Chaussures",
    "size": "40",
    "ref": "ASOS 153922690",
    "title": "Mocassins Birkenstock Naples",
    "link": "https://www.asos.com/fr/birkenstock/birkenstock-naples-mocassins-en-daim-enveloppants-carafe/prd/210022027",
    "why": "Des pantoufles déguisées en chaussures chic. Je triche, et j'assume.",
    "photo": "birkenstock-naples.jpg",
    "ordre": 6
  },
  {
    "id": "nb-530",
    "cat": "Chaussures",
    "size": "40,5",
    "ref": "ASOS 155118823",
    "title": "New Balance 530 blanches et marron",
    "link": "https://www.asos.com/fr/new-balance/new-balance-530-baskets-blanches-et-marron/prd/210326478",
    "why": "Mes baskets actuelles ont démissionné. Je recrute.",
    "photo": "nb-530.jpg",
    "ordre": 7
  },
  {
    "id": "nb-740",
    "cat": "Chaussures",
    "size": "40,5",
    "ref": "ASOS 155118800",
    "title": "New Balance 740 marron",
    "link": "https://www.asos.com/fr/new-balance/new-balance-740-baskets-marron/prd/210326449",
    "why": "Une paire, c'est un achat. Deux paires, c'est un mode de vie.",
    "photo": "nb-740.jpg",
    "ordre": 8
  },
  {
    "id": "asos-robe-chocolat",
    "cat": "Robes",
    "size": "40",
    "ref": "ASOS 157926061",
    "title": "Robe courte à carreaux chocolat",
    "link": "https://www.asos.com/fr/asos-design/asos-design-robe-courte-de-survetement-boutonnee-avec-jupe-bouffante-a-carreaux-chocolat/prd/211104888",
    "why": "Le seul chocolat de Noël qu'on ne me reprochera pas d'avoir pris.",
    "photo": "asos-robe-chocolat.jpg",
    "ordre": 9
  },
  {
    "id": "asos-chemise-carreaux",
    "cat": "Hauts",
    "size": "40",
    "ref": "ASOS 157696888",
    "title": "Chemise oversize à carreaux",
    "link": "https://www.asos.com/fr/asos-design/asos-design-chemise-oversize-coupe-carree-a-carreaux/prd/211037867",
    "why": "Effort apparent : zéro. Effort réel : une heure devant le miroir.",
    "photo": "asos-chemise-carreaux.jpg",
    "ordre": 10
  },
  {
    "id": "asos-blazer-zippe",
    "cat": "Blazers",
    "size": "38",
    "ref": "ASOS 154214329",
    "title": "Blazer zippé à micro-carreaux",
    "link": "https://www.asos.com/fr/asos-design/asos-design-blazer-ajuste-zippe-a-taille-cintree-a-micro-carreaux/prd/210106719",
    "why": "Un blazer à zip : chic, rapide, zéro bouton qui saute en pleine réunion.",
    "photo": "asos-blazer-zippe.jpg",
    "ordre": 11
  },
  {
    "id": "asos-blazer-chocolat",
    "cat": "Blazers",
    "size": "",
    "title": "Blazer cintré zippé chocolat",
    "link": "https://www.asos.com/fr/asos-design/asos-design-blazer-ajuste-cintre-a-la-taille-avec-fermeture-zippee-en-chocolat/prd/209611845",
    "why": "Épaules carrées, taille cintrée : je ne rentre pas dans une pièce, je fais une entrée.",
    "photo": "asos-blazer-chocolat.jpg",
    "ordre": 12
  },
  {
    "id": "velo",
    "cat": "Vélo",
    "price": 179,
    "title": "Vélo cruiser Huffy 26\" Deluxe violet foncé",
    "link": "https://www.amazon.fr/dp/B0DXL9ZTLQ",
    "why": "Panier devant, cheveux au vent, zéro bouchon sur le bord de mer. Je ne fais pas du vélo, je fais une apparition.",
    "photo": "velo.jpg",
    "ordre": 13
  },
  {
    "id": "plateforme-vibrante",
    "cat": "Sport",
    "title": "Plateforme vibrante V2 – 99 niveaux, sangles et poignées incluses",
    "link": "https://www.decathlon.fr/p/mp/plateforme-vibrante-v2-99-niveaux-d-intensite-sangles-et-poignees-incluses/79f41d76-6d82-4d52-9707-f3831d5cadfa/c5",
    "why": "Je monte dessus, ça vibre, je fais du sport. Techniquement.",
    "photo": "plateforme-vibrante.jpg",
    "ordre": 14
  },
  {
    "id": "tapis-de-marche",
    "cat": "Sport",
    "title": "Tapis de marche LONTEK inclinable, accoudoirs réglables et télécommande",
    "link": "https://www.amazon.fr/dp/B0H74XW6MS",
    "why": "Je marche, je travaille, je brûle des calories : je suis multitâche, même en jogging.",
    "photo": "tapis-de-marche.jpg",
    "ordre": 15
  }
];
