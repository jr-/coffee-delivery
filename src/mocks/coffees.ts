import { CoffeeType } from '../@types/Coffee';
import expressoAmericano from '../assets/coffees/expresso-americano.svg';
import arabe from '../assets/coffees/arabe.svg'
import cafeComLeite from '../assets/coffees/cafe-com-leite.svg'
import expressoGelado from '../assets/coffees/expresso-gelado.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import chocolateQuente from '../assets/coffees/chocolate-quente.svg'
import cubano from '../assets/coffees/cubano.svg'
import expressoCremoso from '../assets/coffees/expresso-cremoso.svg'
import expresso from '../assets/coffees/expresso.svg';
import havaiano from '../assets/coffees/havaiano.svg'
import irlandes from '../assets/coffees/irlandes.svg'
import latte from '../assets/coffees/latte.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mochaccino from '../assets/coffees/mocaccino.svg'

export const coffees: CoffeeType[] = [
  {
    id: "1",
    title: "Expresso Tradicional",
    image: expresso,
    labels: ["TRADICIONAL"],
    description: "O tradicional café feito com água quente e grãos moídos",
    priceInCents: 990,
  },
  {
    id: "2",
    title: "Expresso Americano",
    image: expressoAmericano,
    labels: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    priceInCents: 990,
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    image: expressoCremoso,
    labels: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    priceInCents: 990,
  },
  {
    id: "4",
    title: "Expresso Gelado",
    image: expressoGelado,
    labels: ["TRADICIONAL", "GELADO"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    priceInCents: 990,
  },
  {
    id: "5",
    title: "Café com Leite",
    image: cafeComLeite,
    labels: ["TRADICIONAL", "COM LEITE"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    priceInCents: 990,
  },
  {
    id: "6",
    title: "Latte",
    image: latte,
    labels: ["TRADICIONAL", "COM LEITE"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    priceInCents: 990,
  },
  {
    id: "7",
    title: "Capuccino",
    image: capuccino,
    labels: ["TRADICIONAL", "COM LEITE"],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    priceInCents: 990,
  },
  {
    id: "8",
    title: "Macchiato",
    image: macchiato,
    labels: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    priceInCents: 990,
  },
  {
    id: "9",
    title: "Mocaccino",
    image: mochaccino,
    labels: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    priceInCents: 990,
  },
  {
    id: "10",
    title: "Chocolate Quente",
    image: chocolateQuente,
    labels: ["ESPECIAL", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    priceInCents: 990,
  },
  {
    id: "11",
    title: "Cubano",
    image: cubano,
    labels: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    priceInCents: 990,
  },
  {
    id: "12",
    title: "Havaiano",
    image: havaiano,
    labels: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    priceInCents: 990,
  },
  {
    id: "13",
    title: "Árabe",
    image: arabe,
    labels: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    priceInCents: 990,
  },
  {
    id: "14",
    title: "Irlandês",
    image: irlandes,
    labels: ["ESPECIAL", "ALCOÓLICO"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    priceInCents: 990,
  },
];
