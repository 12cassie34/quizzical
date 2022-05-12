function Options(props) {
    const selectedClass = props.isSelected ? 'border-none bg-light-blue' : '';
    return (
        <div onClick={() => props.setSelectOption(props.text)}
            className={`mr-3 mb-4 py-1 px-2 border border-purple-blue rounded-xl text-purple-blue cursor-pointer ease-linear duration-500 ${selectedClass}`}>
            {props.text}
        </div>
    )
}

export default Options