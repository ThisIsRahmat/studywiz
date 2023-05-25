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
    return <p>Loading questions...</p>;
  }

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
      <h1 className="text-2xl font-bold mb-4 mt-8">
       
      </h1>
        
            {questions.length ? (
        <Flashcard questions={questions} />
    
        ) : (
          <p>No questions available.</p>
        )}


      <Footer />
    </div>
  );
}



