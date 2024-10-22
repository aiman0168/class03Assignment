import Link from "next/link"
import '../style.css';
export default function Navbar (){
    return(
        <header>
            <nav>
                <ul  className="navbar">
                    <li>
                        <Link className="a" href="/Education">Education</Link>
                    </li> 
                    <li>
                        <Link  className="a" href="/Sports">Sports</Link>
                    </li>
                    <li>
                        <Link  className="a" href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};