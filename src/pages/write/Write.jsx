import "./write.css";

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="travel2.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus-square"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input className="writeInput" type="text" placeholder="Title" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
