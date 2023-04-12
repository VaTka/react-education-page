import {useState} from "react";
import burger from "../assets/burger-icon.svg"

const NavBar = () => {
    const [burgerTrigger, setBurgerTrigger] = useState(false)

    const burgerHandler = () => {
        setBurgerTrigger(!burgerTrigger)
    }

    const navItems = ["Home", "Courses", "About Us", "Contact Us"]

    return (
        <div className="fixed w-full z-30 text-white">
            <nav className="flex justify-between items-center p-4 bg-neutral-800/50">
                <h1 className="uppercase font-bold text-2xl">Logo</h1>
                <button onClick={burgerHandler} className="absolute right-2 top-2 md:hidden"><img src={burger} alt="burger"/></button>
                {burgerTrigger &&
                    <ul className="flex flex-col mr-[50px]">
                        {navItems.map(navItem =>
                            <li key={navItem}>
                                <button className="p-2 hover:bg-white hover:text-black duration-500 font-semibold">
                                    {navItem}
                                </button>
                            </li>
                        )}
                    </ul>}
                <ul className="flex-row gap-4 hidden md:flex">
                    {navItems.map(navItem =>
                        <li key={navItem}>
                            <button
                                className="bg-neutral-800 p-2 hover:bg-white hover:text-black duration-500 font-semibold">
                                {navItem}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
