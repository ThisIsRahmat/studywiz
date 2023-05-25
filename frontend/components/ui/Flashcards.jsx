import { useState } from 'react';
import { Card, Button } from "@nextui-org/react";

export default function Flashcard({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  return (
    <div className="flex flex-col items-center">
      <Card
        bordered
        hoverable
        rounded
        shadow
        className="max-w-md w-full mb-4"
        style={{ background: '#F3F4F6' }}
      >
        <Card.Body>
          <h2 className="text-lg font-bold mb-2">Question {currentIndex + 1}</h2>
          <p className="text-gray-600">{questions[currentIndex]}</p>
        </Card.Body>
      </Card>
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Previous question
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next question
        </Button>
      </div>
    </div>
  );
}
