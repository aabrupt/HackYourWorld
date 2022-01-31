import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import AppsIcon from '@mui/icons-material/Apps'


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/"><HomeIcon /></Link>
                    <Link href="/add"><AddLocationAltIcon /></Link>
                    <Link href="/app"><AppsIcon /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar