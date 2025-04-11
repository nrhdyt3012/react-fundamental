import posts from "../posts.json";
import Article from "../components/Article.jsx";

function Homepage() {
    return (
        <>
        <h1>Simple Blog</h1>
        {posts.map((blog) => (
<Article title={blog.title} tags={blog.tags} date={blog.date}></Article>
            ))}
        </>
    )
}

export default Homepage;