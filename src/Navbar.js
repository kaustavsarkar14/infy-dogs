import "./Navbar.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar(props) {
   


    return (
        <div className={`navbar${props.theme}`} >
            <div className="navleft">
                <span className='logo' >&#8734;</span>
                <span className='title' >INFYDOGS</span>
            </div>
            <DarkModeIcon onClick={() => props.handleTheme()} className='dark' />
        </div>
    )
}
