
export function Post({author: string, content: string}) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>

    )
}
