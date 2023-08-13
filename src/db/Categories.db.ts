import { Category, AllCategories } from '../interfaces';

export const recipesCategories: Category[] = [
  {
    image:
      '/src/assets/images/cat/espaguetis-salsa-bolonesa-tablexa-madera.webp',
    label: 'Pasta',
    tag: 'pasta',
  },
  {
    image: '/src/assets/images/cat/salad.webp',
    label: 'Salad',
    tag: 'salad',
  },
  {
    image: '/src/assets/images/cat/vegetarian.webp',
    label: 'Vegetarian',
    tag: 'vegetarian',
  },
  {
    image:
      '/src/assets/images/cat/espaguetis-salsa-bolonesa-tablexa-madera.webp',
    label: 'Italian',
    tag: 'italian',
  },
];

export const tipsCategories: Category[] = [];
export const ingredientsCategories: Category[] = [
  {
    image: '/src/assets/images/ingredients/categories/roasted.jpg',
    label: 'Roasted',
    tag: 'roasted',
  },
  {
    image: '/src/assets/images/ingredients/categories/green_grassy.jpg',
    label: 'Gren & Grassy',
    tag: 'green_grassy',
  },
  {
    image: '/src/assets/images/ingredients/categories/woodland.jpg',
    label: 'Woodland',
    tag: 'woodland',
  },
  {
    image: '/src/assets/images/ingredients/categories/creamy_fruty.jpg',
    label: 'Creamy Fruit',
    tag: 'creamy_fruty',
  },
];

export const allCategories: AllCategories = {
  recipesCategories: recipesCategories,
  tipsCategories: [],
  ingredientsCategories: ingredientsCategories,
};
