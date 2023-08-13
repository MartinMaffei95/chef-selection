import { Ingredient } from '../interfaces/Ingredients.interface';

export const ingredients: Ingredient[] = [
  {
    id: 'chocolate',
    name: 'Chocolate',
    description: `
    The complex processing undergone by most chocolate explains the huge
variation in flavor. The untreated cocoa beans are astringent and bitter but
fermentation gives rise to fruity, wine-like or sherry flavors, and the
roasting process can introduce a nearly infinite variety of nutty, earthy,
woody, flowery and spicy notes. `,
    combinateWith: ['almond', 'anise', 'banana'],
    family: 'roasted',
    image: '/src/assets/images/ingredients/chocolate.jpg',
    color: ['brown'],
  },
  {
    id: 'banana',
    description: `
    Fresh banana, when it still has a streak of green on the skin, has a noticeable
astringency at the heart of its bland, slightly grassy flavor. As it ripens, this
develops into the familiar fresh, fruity banana flavor with a distinct note of
clove. By the time the peel is mottled with brown, the fruit’s flavor is
reminiscent of vanilla, honey and rum, as if anticipating its conversion into
banana bread or its flambéing in a pan. Banana has a great affinity for
roasted flavors such as coffee, nuts and chocolate, and for heavily spiced
flavors like rum.
`,

    name: 'Banana',
    combinateWith: ['almond', 'anise', 'chocolate'],
    family: 'creamy_fruty',
    image: '/src/assets/images/ingredients/banana.jpg',
    color: ['yellow'],
  },
  {
    id: 'almond',
    description: `
    There are two distinct kinds of almond flavor, bitter and sweet. Bitter
almond is the pronounced marzipan flavor that is found in almond extract,
almond essence and Amaretto.
The sweet almond is
the world’s most popular nut. It has hints of bitter almond flavor but is mild,
milky and slightly grassy when raw, and richer when roasted, with a slight
toffee-popcorn flavor.
`,

    name: 'Almond',
    combinateWith: ['banana', 'anise', 'chocolate'],
    family: 'woodland',
    image: '/src/assets/images/ingredients/almond.jpg',
    color: ['brown'],
  },
  {
    id: 'anise',
    description: ``,
    name: 'Anise',
    combinateWith: ['almond', 'banana', 'chocolate'],
    family: 'green_grassy',
    image: '/src/assets/images/ingredients/anise.jpg',
    color: ['brown'],
  },
];
