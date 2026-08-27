export default function IngredientList(props) {

    const ingredientsItems = props.ingredients.map(items => (
        <li key={items}>{items}</li>
    ))

    return (
        <section>
            <h1>Ingredients On Hand</h1>
                <ul>
                    {ingredientsItems}
                </ul>
                  {props.ingredients.length > 3 ? <div className="recipe-container">
                        <div ref={props.ref}>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                    <div className="recipe-button">
                    <button type="button" onClick={props.getRecipe}>Get a recipe</button>
                </div>
            </div> : null}
        </section>
    )
}