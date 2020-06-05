import Link from 'next/link';

export default function Header() {
    return (
        <header id="header" className="header-scrolled" style={{ background: '#04091A' }}>
            <div className="container">
                <div id="logo" class="pull-left">
                    <Link href="/" class="scrollto">
                        <img src="images/logo-blanco.svg" alt="" title="" style={{ minWidth: '200px' }} />
                    </Link>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active"><Link href="/">Home</Link></li>
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
                        <li className="buy-tickets"><Link href="/registro">LOGIN | REGISTRO</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}