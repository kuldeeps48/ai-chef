export default function IngredientList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section className="ingredient-section">
      <ul className="ingredients-list">{ingredientsListItems}</ul>
    </section>
  );
}
