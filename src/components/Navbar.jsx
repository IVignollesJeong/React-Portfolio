import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {

    return <nav className="nav py-3 sticky-top navbar-dark shadow-5">
        <Link to="/" className="nav-title mx-4" id="iv">IV</Link>
        <ul>
            <CustomLink className="" to="/">About Me</CustomLink>
            <CustomLink to="/portfolio">Portfolio</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
    <li className={isActive ? "active" : ""}>
        <Link to ={to} {...props}>{children}</Link>
    </li>
    )
}