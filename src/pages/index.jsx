import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article.jsx";

function Homepage() {
   
    const [search, setSearch] = useState("");

    const changeSearch =(event) => {
        setSearch(event.target.value)
    };
    return (
        <>
        <h1>Simple Blog</h1>
        <div>Cari data: <input type="text" onChange={changeSearch}/></div>
        <small>Ditemukan 0 hasil dengan kata {search}</small>
        {posts.map(({title,tags, date}, index) => (
<Article {...{title, tags, date}} key={index}></Article>
            ))}
        </>
    )
}

export default Homepage;