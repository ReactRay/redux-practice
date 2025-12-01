import './nav.css';

function Nav({ setOpenModal }) {
    return (

        //improve upon this later 
        <nav className='nav '>
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#form">form</a></li>
                <li ><a href="#result">result</a></li>
                <li onClick={() => setOpenModal(true)}><a href="#">open</a></li>
            </ul>
        </nav>
    )
}

export default Nav
