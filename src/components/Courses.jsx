import photo1 from "../assets/photo1.jpg"
import {useState} from "react";

const Courses = () => {
    const coursesList = [
        {id: 1, name: "Science", difficulty: "Beginner", descriptions: "Lorem ipsum dolor sit amet", photo: photo1},
        {id: 2, name: "Science", difficulty: "Intermediate", descriptions: "Lorem ipsum dolor sit amet", photo: photo1},
        {id: 3, name: "Science", difficulty: "Advanced", descriptions: "Lorem ipsum dolor sit amet", photo: photo1},
        {
            id: 4,
            name: "Mathematics",
            difficulty: "Intermediate",
            descriptions: "Lorem ipsum dolor sit amet",
            photo: photo1
        },
        {
            id: 5,
            name: "Mathematics",
            difficulty: "Intermediate",
            descriptions: "Lorem ipsum dolor sit amet",
            photo: photo1
        },
        {
            id: 6,
            name: "Mathematics",
            difficulty: "Intermediate",
            descriptions: "Lorem ipsum dolor sit amet",
            photo: photo1
        },
        {id: 7, name: "History", difficulty: "Beginner", descriptions: "Lorem ipsum dolor sit amet", photo: photo1},
        {id: 8, name: "History", difficulty: "Advanced", descriptions: "Lorem ipsum dolor sit amet", photo: photo1},
        {id: 9, name: "History", difficulty: "Intermediate", descriptions: "Lorem ipsum dolor sit amet", photo: photo1},
        {
            id: 10,
            name: "Mathematics",
            difficulty: "Beginner",
            descriptions: "Lorem ipsum dolor sit amet",
            photo: photo1
        },
        {
            id: 11,
            name: "Mathematics",
            difficulty: "Intermediate",
            descriptions: "Lorem ipsum dolor sit amet",
            photo: photo1
        },
        {
            id: 12,
            name: "Mathematics",
            difficulty: "Advanced",
            descriptions: "Lorem ipsum dolor sit amet",
            photo: photo1
        },
        {
            id: 13,
            name: "Mathematics",
            difficulty: "Advanced",
            descriptions: "Lorem ipsum dolor sit amet",
            photo: photo1
        },
    ]

    const [search, setSearch] = useState("")
    const [difficulty, setDifficulty] = useState("")

    return (
        <div className="min-h-[100vh] px-5 pt-[100px] pb-5">
            <div>
                <input type="text" placeholder="Search by name..." className="px-2" onChange={(e) => setSearch(e.target.value)}/>
                <div className="flex gap-4">
                    <button onClick={() => setDifficulty("beginner")} className="hover:bg-black hover:text-white duration-500 px-2">Beginner</button>
                    <button onClick={() => setDifficulty("intermediate")} className="hover:bg-black hover:text-white duration-500 px-2">Intermediate</button>
                    <button onClick={() => setDifficulty("advanced")} className="hover:bg-black hover:text-white duration-500 px-2">Advanced</button>
                    <button onClick={() => {
                        setDifficulty("");
                        setSearch("")
                    }} className="hover:bg-red-600 hover:text-white duration-500 px-2">Clear
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {coursesList.filter((course) => {
                    return search.toLowerCase() === ''
                        ? course
                        : course.name.toLowerCase().includes(search.toLowerCase())
                }).filter((course) => {
                    return difficulty === ''
                        ? course
                        : course.difficulty.toLowerCase().includes(difficulty)
                }).map(course =>
                    <div className="flex flex-col hover:bg-neutral-800 hover:text-white hover:rounded-[10px] hover:shadow-2xl duration-500" key={course.id}>
                        <h2 className="text-3xl">{course.name}</h2>
                        <div className="max-w-[100px] md:max-w-fit">difficulty: {course.difficulty}</div>
                        <img src={`${course.photo}`} className="object-cover max-h-[200px]"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Courses
