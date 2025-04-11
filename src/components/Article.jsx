function Article (props) {
    const tags = props.tags || [];

    return (
        <>
            <h3>{props.title}</h3>
            <small>Date : {props.date}, tags: {tags.join(", ")}</small>
        </>
    );
}
export default Article;
