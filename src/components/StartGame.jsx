import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import Question from './/Question'

import { decodeHtml, randomFormOptions } from '../utils/helperFunctions'

function StartGame() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(response => response.json())
            .then(data => {
                if (data.response_code === 0) {
                    setQuestions(data.results)
                }
                return
            });
    }, [])

    const renderQuestions = questions.map(question => {
        const questionId = nanoid()
        const questionString = decodeHtml(question.question)
        const options = randomFormOptions(question.correct_answer, question.incorrect_answers)
        return <Question key={questionId}
            title={questionString}
            options={options} />
    });

    return (
        <div className="w-full">
            {renderQuestions}
        </div>
    )
}

export default StartGame