import React from 'react';
import { Meal } from '../features/meals/mealTypes';
import './CreateMealPage.css';
import csrfFetch from '../app/fetch';

export default function CreateMealPage() {
  const [meal, setMeal] = React.useState<Meal>({} as Meal);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await csrfFetch('/api/meals', {
        method: 'POST',
        body: JSON.stringify(meal),
      });
      if (response.ok) {
        setMeal({} as Meal);
        setError('');
      } else {
        setError('Failed to create meal');
        alert('Failed to create meal');
      }
    } catch (err) {
      setError('Failed to create meal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="w-full text-center">Create Meal</h1>
      <form
        className="flex flex-col max-w-xl m-auto gap-4 p-4"
        id="create-form"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={meal.name}
            onChange={(e) => setMeal({ ...meal, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={meal.description}
            onChange={(e) => setMeal({ ...meal, description: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={meal.image}
            onChange={(e) => setMeal({ ...meal, image: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="prepTime">Prep Time</label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            value={meal.prepTime}
            onChange={(e) => setMeal({ ...meal, prepTime: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="cookTime">Cook Time</label>
          <input
            type="number"
            id="cookTime"
            name="cookTime"
            value={meal.cookTime}
            onChange={(e) => setMeal({ ...meal, cookTime: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="cookingMethod">Cooking Method</label>
          <input
            type="text"
            id="cookingMethod"
            name="cookingMethod"
            value={meal.cookingMethod?.join(',')}
            onChange={(e) =>
              setMeal({ ...meal, cookingMethod: e.target.value.split(',') })
            }
          />
        </div>
        <div>
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            id="calories"
            name="calories"
            value={meal.calories}
            onChange={(e) =>
              setMeal({ ...meal, calories: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="fat">Fat</label>
          <input
            type="number"
            id="fat"
            name="fat"
            value={meal.fat}
            onChange={(e) =>
              setMeal({ ...meal, fat: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="protein">Protein</label>
          <input
            type="number"
            id="protein"
            name="protein"
            value={meal.protein}
            onChange={(e) =>
              setMeal({ ...meal, protein: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="carbs">Carbs</label>
          <input
            type="number"
            id="carbs"
            name="carbs"
            value={meal.carbs}
            onChange={(e) =>
              setMeal({ ...meal, carbs: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="sugar">Sugar</label>
          <input
            type="number"
            id="sugar"
            name="sugar"
            value={meal.sugar}
            onChange={(e) =>
              setMeal({ ...meal, sugar: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="fiber">Fiber</label>
          <input
            type="number"
            id="fiber"
            name="fiber"
            value={meal.fiber}
            onChange={(e) =>
              setMeal({ ...meal, fiber: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="cholesterol">Cholesterol</label>
          <input
            type="number"
            id="cholesterol"
            name="cholesterol"
            value={meal.cholesterol}
            onChange={(e) =>
              setMeal({ ...meal, cholesterol: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="sodium">Sodium</label>
          <input
            type="number"
            id="sodium"
            name="sodium"
            value={meal.sodium}
            onChange={(e) =>
              setMeal({ ...meal, sodium: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="recipeCategory">Recipe Category</label>
          <input
            type="text"
            id="recipeCategory"
            name="recipeCategory"
            value={meal.recipeCategory}
            onChange={(e) =>
              setMeal({ ...meal, recipeCategory: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="recipeCuisine">Recipe Cuisine</label>
          <input
            type="text"
            id="recipeCuisine"
            name="recipeCuisine"
            value={meal.recipeCuisine}
            onChange={(e) =>
              setMeal({ ...meal, recipeCuisine: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="recipeInstructions">Recipe Instructions</label>
          <ol>
            {meal.recipeInstructions?.map((instruction, index) => (
              <li key={index}>
                <label>
                  Name
                  <input
                    type="text"
                    value={instruction.name}
                    onChange={(e) => {
                      const instructions = [...meal.recipeInstructions];
                      instructions[index].name = e.target.value;
                      setMeal({ ...meal, recipeInstructions: instructions });
                    }}
                  />
                </label>
                <label>
                  Text
                  <input
                    type="text"
                    value={instruction.text}
                    onChange={(e) => {
                      const instructions = [...meal.recipeInstructions];
                      instructions[index].text = e.target.value;
                      setMeal({ ...meal, recipeInstructions: instructions });
                    }}
                  />
                </label>
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={() =>
              setMeal({
                ...meal,
                recipeInstructions: meal.recipeInstructions
                  ? [...meal.recipeInstructions, { name: '', text: '' }]
                  : [{ name: '', text: '' }],
              })
            }
          >
            Add Instruction
          </button>
        </div>
        <div>
          <label htmlFor="recipeYield">Recipe Yield</label>
          <input
            type="number"
            id="recipeYield"
            name="recipeYield"
            value={meal.recipeYield}
            onChange={(e) =>
              setMeal({ ...meal, recipeYield: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="suitableForDiet">Suitable For Diet</label>
          <input
            type="text"
            id="suitableForDiet"
            name="suitableForDiet"
            value={meal.suitableForDiet?.join(',')}
            onChange={(e) =>
              setMeal({ ...meal, suitableForDiet: e.target.value.split(',') })
            }
          />
        </div>
        <label htmlFor="recipeIngredient">Recipe Ingredients</label>
        <ol>
          {meal.recipeIngredient?.map((ingredient, index) => (
            <li key={index}>
              <label>
                Name
                <input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) => {
                    const ingredients = [...meal.recipeIngredient];
                    ingredients[index].name = e.target.value;
                    setMeal({ ...meal, recipeIngredient: ingredients });
                  }}
                />
              </label>
              <label>
                Quantity
                <input
                  type="number"
                  value={ingredient.quantity}
                  onChange={(e) => {
                    const ingredients = [...meal.recipeIngredient];
                    ingredients[index].quantity = +e.target.value;
                    setMeal({ ...meal, recipeIngredient: ingredients });
                  }}
                />
              </label>
              <label>
                Unit
                <input
                  type="text"
                  value={ingredient.unit}
                  onChange={(e) => {
                    const ingredients = [...meal.recipeIngredient];
                    ingredients[index].unit = e.target.value;
                    setMeal({ ...meal, recipeIngredient: ingredients });
                  }}
                />
              </label>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() =>
            setMeal({
              ...meal,
              recipeIngredient: meal.recipeIngredient
                ? [
                    ...meal.recipeIngredient,
                    { name: '', quantity: 0, unit: '' },
                  ]
                : [{ name: '', quantity: 0, unit: '' }],
            })
          }
        >
          Add Ingredient
        </button>
        <div>
          <label htmlFor="keywords">Key Words</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={meal.keywords?.join(',')}
            onChange={(e) =>
              setMeal({ ...meal, keywords: e.target.value.split(',') })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Meal
        </button>
      </form>
    </div>
  );
}
