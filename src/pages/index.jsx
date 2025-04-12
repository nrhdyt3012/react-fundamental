import { useState, useEffect, } from "react";
import postsData from "../posts.json";
import Article from "../components/Article.jsx";
import Search from "../components/Search.jsx";

function Homepage() {
    const [posts, setPosts] = useState([postsData]);
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value)
    );
        setPosts(filteredPosts)
        setTotalPosts(filteredPosts.length);
    };
    
    return (
        <>
        <h1>Simple Blog</h1>
        <Search onSearchChange={onSearchChange} totalPosts={totalPosts}></Search>
        {posts.map((props, index) => (
<Article {...props} key={index}></Article>
            ))}            
        </>
    )
}

export default Homepage;