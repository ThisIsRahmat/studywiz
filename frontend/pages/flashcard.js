import { useState, useEffect } from 'react';
import Flashcard from '../components/ui/Flashcards';
import Footer from '../components/ui/Footer';

import Header from '../components/ui/Header';
import { useRouter } from 'next/router';



export default function FlashcardsPage() {
  

   const router = useRouter();
   const {
    query: { questions },
  } = router
  if (!questions?.length) {
    return <p>Loading questions...</p>;
  }

  return (
    <div>

      <Header />

        
            {questions.length ? (
        <Flashcard questions={questions} />
    
        ) : (
          <p>No questions available.</p>
        )}

{/* <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Previous
          </button>

          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
  </div> */}



      <Footer />
    </div>
  );
}



