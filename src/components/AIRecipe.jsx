import { useState } from "react";
import Markdown from "react-markdown";
import { fetchRecipe, FAILED_MSG } from "../services/ai";

export default function AIRecipe(props) {
  const [recipe, setRecipe] = useState("");

  async function generateRecipe() {
    const r = await fetchRecipe(props.ingredients);
    setRecipe(r);
  }

  return (
    <div>
      <section className="get-recipe-container">
        <h2>Ready to generate the recipe?</h2>
        <button
          onClick={generateRecipe}
          disabled={recipe?.length > 0 && recipe !== FAILED_MSG ? true : false}
        >
          Get Recipe!
        </button>
      </section>
      <br />
      {recipe && (
        <div className="suggested-recipe-container">
          <Markdown>{recipe}</Markdown>
        </div>
      )}
    </div>
  );
}
