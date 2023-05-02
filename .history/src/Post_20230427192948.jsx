export function Post(props) {
    return (
        <Fragment>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </Fragment>
    )
}
