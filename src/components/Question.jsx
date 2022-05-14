import { useEffect, useState } from 'react'

import Options from './Options'

function Question(props) {
    const [selectedOption, setSelectOption] = useState('')

    const changeSelectOption = (option) => {
        setSelectOption(option)
    }

    const [isCorrect, setIsCorrect] = useState(false)
    const checkIfSelectACorrectOption = (isCorrectValue) => {
        if (!isCorrectValue) {
            setIsCorrect(false)
        }
        if (isCorrectValue) {
            setIsCorrect(true)
        }
    }

    useEffect(() => {
        props.checkIfScore(isCorrect)
    }, [isCorrect])

    const options = props.options.map(option => {
        return (
            <Options key={option.id} 
                     text={option.text} 
                     setSelectOption={changeSelectOption}
                     checkingTheAnswer={props.checkingTheAnswer}
                     isSelected={option.text === selectedOption ? true : false}
                     isCorrect={option.isCorrect}
                     passIfCorrect={checkIfSelectACorrectOption} />
        )
    })

    return (
        <div className="mt-4 pb-4 border-b border-pale-blue">
            <div className="font-karla font-bold text-lg text-dark-blue">{props.title}</div>
            <div className="flex flex-col mt-4 lg:flex-row">{options}</div>
        </div>
    )
}

export default Question