import './nav-list.css';

function NavList({ setOpenModal, openModal }) {



    return (
        <div className={`nav-list ${openModal ? 'show' : 'hide'}`} >


            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Experience</li>
                <li onClick={() => setOpenModal(!openModal)}>close</li>
            </ul>

        </div >
    )
}

export default NavList
