import { useContext } from "react";
import { GlobalContext } from "../context";
const ArticleStatus = ({isNew}) => {
    return isNew && <span>Baru ni boy</span>;
};
const NewArticle = () => {
    return <span>-- baru !!</span>;
};
function Article (props) {
    const user =useContext(GlobalContext)
    const tags = props.tags || [];

    return (
        <>
            <h3>{props.title}</h3>
            <small>Date : {props.date}, tags: {tags.join(", ")} 
                {/* {props.isNew ? "== Baru ==" : "== Lama =="} */}
                {/* {props.isNew && "== Baru =="} */}
                <ArticleStatus isNew={props.isNew}></ArticleStatus>
                {props.isNew && <NewArticle/>}
            </small>
            <div>
                <small>Ditulis oleh {user.username}</small>
            </div>
        </>
    );
}
export default Article;
