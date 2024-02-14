const Footer = () => {
    return (
        <div className="bg-blue-400 h-32 ">
            <div className="flex justify-around p-8">
                <h1 className="text-white text-6xl font-bold">The Generics</h1>
                <ul className="flex">
                    <li><a href="https://www.youtube.com/"><img className="cursor-pointer mx-2 size-10" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" /></a></li>
                    <li><a href="https://www.facebook.com/"><img className="cursor-pointer mx-2 size-10" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" /></a></li>
                    <li><a href="https://open.spotify.com/?"><img className="cursor-pointer mx-2 size-10" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;