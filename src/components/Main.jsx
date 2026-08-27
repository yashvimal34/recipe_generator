import React from "react";
import { useEffect } from "react";
import ClaudeRecipeComponent from "./ClaudeRecipeComponent.jsx";
import IngredientList from "./IngredientList.jsx";
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {
    const [ingredients, setIngredeints] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    useEffect(() => {
        if(recipe !== "" && recipeSection !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe(){
       const generateRecipeFromAI = await getRecipeFromMistral(ingredients)
       setRecipe(generateRecipeFromAI)
    }

    const ingredientsItems = ingredients.map(items => (
        <li key={items}>{items}</li>
    ))

    function handleSubmitForm(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")?.trim()

        if (newIngredient) {
            setIngredeints(prevIngredients => [...prevIngredients, newIngredient])
            event.currentTarget.reset()
        }
    }



    return(
        <>
            <main>
                <section>
                    <form onSubmit={handleSubmitForm} className="add-form">
                        <input 
                            aria-label="Add Ingredient"
                            type="text" 
                            placeholder="e.g. oregano"
                            name="ingredient"
                        />
                        <button>+ Add ingredient</button>
                    </form>
                    <p className="text-ingre">Add at least 4 ingredients</p>
                </section>

                {ingredients.length > 0 ? <IngredientList ingredients={ingredients} 
                getRecipe={getRecipe} ref={recipeSection} /> : null} 

                {/* Recipe shown */}
                {recipe && <ClaudeRecipeComponent recipe={recipe} />}
            </main>
        </>
    )
}