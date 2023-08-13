import { GenericPost } from '.';

interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  position: number;
}

interface RecipeStep {
  stepNumber: number;
  image?: string;
  description: string;
}

export interface Recipe extends GenericPost {
  servings: number;
  prepTime: number;
  cookTime: number;
  ingredients: Ingredient[];
  instructions: RecipeStep[];
  notes?: string;
}

// Ejemplo de uso
// const exampleRecipe: Recipe = {
//   title: 'Tarta de Manzana',
//   description: 'Una deliciosa tarta de manzana con un toque de canela.',
//   servings: 8,
//   prepTime: '30 minutos',
//   cookTime: '45 minutos',
//   ingredients: [
//     { name: 'Manzanas', quantity: '4', unit: 'unidades' },
//     { name: 'Harina', quantity: '200 g', unit: 'gramos' },
//     { name: 'Azúcar', quantity: '100 g', unit: 'gramos' },
//     // ...otros ingredientes
//   ],
//   instructions: [
//     { stepNumber: 1, description: 'Pelar y cortar las manzanas en rodajas.' },
//     { stepNumber: 2, description: 'Preparar la masa y forrar el molde.' },
//     // ...otros pasos
//   ],
//   notes: 'Puedes servir caliente con helado de vainilla.',
//   imageUrl: 'url-de-la-imagen.jpg',
// };
