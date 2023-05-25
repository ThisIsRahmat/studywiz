import { useState, useEffect } from 'react';
import Flashcard from '../components/ui/Flashcards';
import Footer from '../components/ui/Footer';

import Header from '../components/ui/Header';
import { useRouter } from 'next/router';



export default function FlashcardsPage() {
  

   const router = useRouter();
   const {
    query: { questions, subject, exam_board, qualification, topic },
  } = router
  if (!questions?.length) {
    return <p>There were no questions generated, have a look at your openai api.</p>;
  }

   // Render flashcard content based on the style
   const renderFlashcardContent = () => {
    if (style === 'multiple choice') {
      // Render multiple choice flashcard content
      return (
        <>
          <h1 className="text-xl font-semibold">{subject} - Multiple Choice</h1>
          {questions.map((question, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-lg font-medium">Question {index + 1}</h2>
              <p>{question.question}</p>
              <div className="mt-2">
                {question.answer.map((option, optionIndex) => (
                  <button key={optionIndex} className="button-option">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </>
      );
    } else if (style === 'fill in the blank') {
      // Render fill in the blank flashcard content
      return (
        <>
          <h1 className="text-xl font-semibold">{subject} - Fill in the Blank</h1>
          {questions.map((question, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-lg font-medium">Question {index + 1}</h2>
              <p>{question.question}</p>
              <input type="text" className="input-blank" placeholder="Type your answer" />
            </div>
          ))}
        </>
      );
    } else if (style === 'true and false') {
      // Render true and false flashcard content
      return (
        <>
          <h1 className="text-xl font-semibold">{subject} - True and False</h1>
          {questions.map((question, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-lg font-medium">Question {index + 1}</h2>
              <p>{question.question}</p>
              <div className="mt-2">
                {question.answer.map((option, optionIndex) => (
                  <button key={optionIndex} className="button-option">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </>
      );
    } else {
      // Render error message if style is not recognized
      return <p>Invalid style selected.</p>;
    }
  };

  return (
    <div>

      <Header />

      <div className="mx-auto max-w-2xl text-center">
        <h4 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {subject}  questions on the topic of {topic}
        </h4>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        {/* Subject: {subject}, Topic: {topic} */}
        </p>
      </div>
    
        
      <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold">Flashcard</h1>
      <h2 className="text-lg mt-4">Topic: {topic}</h2>
      {renderFlashcardContent()}
    </div>


      <Footer />
    </div>
  );
}



