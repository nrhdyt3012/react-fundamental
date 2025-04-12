import { useState } from "react";
function  Search (props) {
    const [search, setSearch] = useState("");

     const onSearchChange = () => {
         props.onSearchChange(search);
     };

     const searchKeyDown = (e) => {
        if(e.key === "Enter") {
            onSearchChange()
        }
     }
    
    return (
        <>
        <div>Cari data:
         <input type="text" 
         onChange={(e) => setSearch(e.target.value)}
         onKeyDown={searchKeyDown}
         />
         <button onClick={onSearchChange}>Cari</button>
        </div>
        <small>Ditemukan {props.totalPosts} hasil dengan kata {search}</small>
        </>
    )

}
export default Search;