import ReactMarkdown from "react-markdown"

export default function ClaudeRecipeComponent(props) {
    return (
        <section aria-live="polite">
            <h2>AI Recomends: </h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}