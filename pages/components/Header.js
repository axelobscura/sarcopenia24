export default function Header() {
    return (
        <header id="header">
            <div className="container">
                <div id="logo" class="pull-left">
                    <a href="index.html" class="scrollto">
                        <img src="assets/img/logo.png" alt="" title="" />
                    </a>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active"><a href="index.html">Home</a></li>
                        {/* 
                        <li><a href="#about">About</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#venue">Venue</a></li>
                        <li><a href="#hotels">Hotels</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#supporters">Sponsors</a></li>
                        <li><a href="#contact">Contact</a></li>
                        */}
                        <li className="buy-tickets"><a href="#buy-tickets">Registrarse</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}