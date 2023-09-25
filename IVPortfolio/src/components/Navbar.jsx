export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="nav-title">IV</a>
        <ul>
            <li className="active">
                <a href="/">About</a>
            </li>
            <li>
                <a href="/portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/resume">Resume</a>
            </li>
            <li>
                <a href="/contact">Contact Me</a>
            </li>
        </ul>
    </nav>
}