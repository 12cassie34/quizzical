function Options(props) {
    const selectedClass = props.isSelected ? 'border-none bg-light-blue' : ''
    let isCorrectClass = ''
    if (props.checkingTheAnswer) {
        if (props.isSelected && !props.isCorrect) {
            isCorrectClass = 'border-none bg-pink text text-dark-blue'
        }
        if (props.isCorrect) {
            isCorrectClass = 'border-none bg-apple-green text-dark-blue'
        } 
    }
    console.log("isCorrectClass", isCorrectClass)


    return (
        <div onClick={() => props.setSelectOption(props.text)}
            className={`mr-3 mb-4 py-1 px-2 border border-purple-blue rounded-xl text-purple-blue cursor-pointer ease-linear duration-500 ${selectedClass} ${isCorrectClass}`}>
            {props.text}
        </div>
    )
}

export default Options