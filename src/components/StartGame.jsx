import { useState, useEffect, memo } from 'react'
import { nanoid } from 'nanoid'

import Question from './/Question'

import { decodeHtml, randomFormOptions } from '../utils/helperFunctions'

function StartGame() {
    console.log("RE-RENDER")
    const [questions, setQuestions] = useState([])
    const [checkingTheAnswer, setCheckingTheAnswer] = useState(false)
    const changeCheckingTheAnswer = () => {
        setCheckingTheAnswer(true)
    }

    useEffect(() => {
        console.log("fire useEffect")
        fetch('https://opentdb.com/api.php?amount=5')
            .then(response => response.json())
            .then(data => {
                if (data.response_code === 0) {
                    const questions = data.results
                    questions.forEach(question => {
                        question.id = nanoid()
                        question.question = decodeHtml(question.question)
                        question.options = randomFormOptions(question.correct_answer, question.incorrect_answers)
                    })
                    setQuestions(questions)
                }
                return
            });
    }, [])

    const renderQuestions = questions.map(question => {
        return <Question key={question.id}
            title={question.question}
            options={question.options}
            checkingTheAnswer={checkingTheAnswer} />
    });

    return (
        <div className="my-8 w-full">
            {renderQuestions}
            <div className="mt-4 flex justify-center">
                <button onClick={changeCheckingTheAnswer} className="px-8 py-4 rounded-xl bg-purple-blue font-inter text-white" type="button">Check answers</button>
            </div>
        </div>
    )
}

export default StartGame