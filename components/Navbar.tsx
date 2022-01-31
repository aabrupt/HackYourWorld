import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import AppsIcon from '@mui/icons-material/Apps'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href="/">
                    <li>
                        <HomeIcon />
                    </li>
                </Link>
                <Link href="/app">
                    <li>
                        <AppsIcon />
                    </li>
                </Link>
                <Link href="/add">
                    <li>
                        <AddLocationAltIcon />
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar