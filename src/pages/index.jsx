import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article.jsx";
import Search from "../components/search.jsx";

function Homepage() {
    const [posts, setPosts] = useState([]);

    const onSearchChange = (value) => {
        console.log(value)
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value)
    );
        setPosts(filteredPosts)
    };
    return (
        <>
        <h1>Simple Blog</h1>
        <Search onSearchChange={onSearchChange}></Search>
        {posts.map((props, index) => (
<Article {...props} key={index}></Article>
            ))}
        </>
    )
}

export default Homepage;