function Welcome() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-2 font-karla font-bold text-dark-blue text-3xl">Quizzical</h1>
            <p className="mb-8 font-inter text-dark-blue text-center">Test your knowledge about the whole world!</p>
            <button className="px-16 py-4 rounded-2xl bg-purple-blue font-inter font-medium text-white">Start quiz</button>
        </div>
    )
}

export default Welcome