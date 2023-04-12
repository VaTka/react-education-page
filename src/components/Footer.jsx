

const Footer = () => {
    const media = ["instagram", "telegram", "twitter"]

    return (
        <footer className="bg-black text-white flex flex-col md:flex-row justify-between px-5 py-3 items-center gap-4">
            <h2 className="uppercase text-2xl font-bold">Logo</h2>
            <div>©2023</div>
            <div className="flex gap-4 flex-wrap">
                {media.map(mediaElement => <button key={mediaElement} className="hover:bg-white hover:text-black p-2 duration-500">{mediaElement}</button>)}
            </div>
        </footer>
    )
}

export default Footer
