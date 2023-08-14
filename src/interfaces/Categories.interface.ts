export interface AllCategories {
  tipsCategories: Category[]
  recipesCategories: Category[]
  ingredientsCategories: Category[]
}

type Tags = 'salad' | 'italian' | 'vegetarian' | 'pasta'
export interface Category {
  tag: Tags | any
  label: string
  image: string
}
