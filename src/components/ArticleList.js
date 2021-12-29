import React from "react"; 
import Article from "./Article"; 
import blogData from "../data/blog"

function ArticleList(){
    let dataArray = blogData.posts.map( post => {
        return (<Article key={post.title} title = {post.title} date={post.date} preview={post.preview}/>)
    } )
    return (
        <main>
            {dataArray}
        </main>
    )
}

export default ArticleList; 