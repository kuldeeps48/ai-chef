import { useState } from "react";
import IngredientList from "./IngredientList";
import AIRecipe from "./AIRecipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Salt",
    "Chicken",
    "Butter",
    "Rice",
  ]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient?.length == 0) {
      return;
    }

    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <>
      <main>
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
      </main>
      <section>
        <IngredientList ingredients={ingredients} />
      </section>
      {ingredients.length > 3 ? (
        <AIRecipe ingredients={ingredients} />
      ) : undefined}
    </>
  );
}
