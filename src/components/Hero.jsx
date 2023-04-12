import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <header className="bg-hero-img bg-no-repeat bg-center bg-cover max-w-[100vw] h-[100vh]">
            <div className="backdrop-blur-md bg-blue-200/30 w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-col gap-10 items-center justify-center h-[85%]">
                    <h2 className="text-4xl font-bold">Welcome to EduSite</h2>
                    <span className="max-w-[500px] text-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias exercitationem fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis doloremque earum incidunt iste praesentium quae quibusdam repellat suscipit tempora! illo impedit iusto laudantium minus quos saepe tempora veritatis!
                </span>
                </div>
                <Link to="/courses" className="bg-neutral-800 p-2 text-white rounded-[20px] font-semibold hover:bg-white hover:text-black duration-500">
                    Explore Courses
                </Link>
            </div>
        </header>
    )
}

export default Hero
