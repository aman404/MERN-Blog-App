import "./post.css"
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
            <Link to="/post/:postId"><img className="postImg" src="travel.jpg" alt="Post Thumbnail" /></Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Movies</span>
                    <span className="postCat">Lifestyle</span>
                </div>
                <p className="postTitle">Lorem ipsum dolor sit amet.</p>
                <p className="postDate">2 hours ago</p>
                <p className="postDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi obcaecati porro error. Commodi obcaecati porro error.</p>
            </div>
        </div>
    )
}
