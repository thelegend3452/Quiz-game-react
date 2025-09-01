import React, { useState } from 'react';
import Questions from './quizData';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleScore = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const resetGame = () => {
        setScore(0);
        setCurrentQuestion(0)
        setShowScore(false)
    }

    return (
        <div className='quiz-app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {Questions.length}
                    <button onClick={resetGame}>Try Again</button>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{Questions.length}
                        </div>
                        <div className='question-text'>
                            {Questions[currentQuestion].question}
                        </div>
                    </div>
                    <div className='answer-section'>
                        {Questions[currentQuestion].answer.map((option, index) => (
                            <button key={index} onClick={() => handleScore(option.isCorrect)}>
                                {option.answertext}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;