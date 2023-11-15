import './navbar.css';
import logo from './ernskill-logo.png';

export default function NavBar({image, username}) {
    return (
        <header>
            <nav className="navbar">
            <ul className="outer-nav-list">
                <li className="outer-nav-list-item">
                    <img id="navlogo" src={logo} alt="logo"/>
                </li>
                <li className="outer-nav-list-item" id="title">ErnSkill</li>
                <li className="outer-nav-list-item">
                    <div className="outer-nav">
                        <svg id="nav-gate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                    </div>
                </li>
                <li className="outer-nav-list-item home"><a href='/home'>Home</a></li>
                <li className="outer-nav-list-item explore"><a href='/explore'>Explore</a></li>
                <li className="outer-nav-list-item signup"><a href='/signup'>Signup</a></li>
                <li className="flex-2">
                    <li className="outer-nav-list-item dropdown">
                        <img id="profilepic" src={image} alt="profilepic"/>
                    </li>
                    <li className="nav-username outer-nav-list-item">@{username}</li>
                </li>
            </ul>
        </nav>
        </header>
    )
}