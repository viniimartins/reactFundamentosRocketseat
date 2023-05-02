
export function Post({ author: string, content: string }) {
    return (
        <div>
            <strong>{author}</strong>
            <p>{content}</p>
        </div>

    )
}
