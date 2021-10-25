import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="travel2.jpg" alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i class="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Calamity</b></span>
                    <span className="singlePostAuthor">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut quam saepe laboriosam vitae asperiores totam praesentium dolorum quod, iure maxime exercitationem, facere necessitatibus vero reprehenderit eligendi ipsa. Veniam, magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut quam saepe laboriosam vitae asperiores totam praesentium dolorum quod, iure maxime exercitationem, facere necessitatibus vero reprehenderit eligendi ipsa. Veniam, magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut quam saepe laboriosam vitae asperiores totam praesentium dolorum quod, iure maxime exercitationem, facere necessitatibus vero reprehenderit eligendi ipsa. Veniam, magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut quam saepe laboriosam vitae asperiores totam praesentium dolorum quod, iure maxime exercitationem, facere necessitatibus vero reprehenderit eligendi ipsa. Veniam, magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut quam saepe laboriosam vitae asperiores totam praesentium dolorum quod, iure maxime exercitationem, facere necessitatibus vero reprehenderit eligendi ipsa. Veniam, magnam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut quam saepe laboriosam vitae asperiores totam praesentium dolorum quod, iure maxime exercitationem, facere necessitatibus vero reprehenderit eligendi ipsa. Veniam, magnam.
                </p>    
            </div>
        </div>
    )
}
