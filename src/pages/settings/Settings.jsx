import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <div className="settingsDeleteTitle">Delete Account</div>
                </div>
                <form className="settingsForm">
                    <label style={{fontSize:"20px"}}>Profile Pictre</label>
                    <div className="settingsPP">
                        <img src="terminator.jpg" alt="profile picture" />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none", width:"0px"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="calamity"/>
                    <label>Email</label>
                    <input type="text" placeholder="calamaty1212@gmail.com"/>
                    <label>Password</label>
                    <input type="text" placeholder="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
