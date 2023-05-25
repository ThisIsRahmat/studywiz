

// import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
// import Header from '../../components/ui/Header';
import { useRouter } from 'next/router';
import {useState} from 'react'

export default function TestForm() {
       
    const router = useRouter();
    const [formValues, setFormValues] = useState({
      subject: '',
      topic: '',
      exam_board: '',
      qualification: '',
    });
  
    const handleChange = (event) => {

      const { name, value } = event.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Make a POST request to the API route with the form data
        fetch('/api/getQuestions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data)
            // Redirect to the flashcard page with the generated questions
            router.push({
              pathname: '/flashcard',
              query: { questions: data.questions, subject: data.subject, exam_board: data.exam_board, qualification: data.qualification , topic: data.topic  },
    
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };

    
  
        
  return (
<>

    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Generate Practice Questions </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Use AI to improve your exam scores
        </p>
      </div>
     
     <form  method="POST" onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      {/* <form  method="POST" action="/flashcard" className="mx-auto mt-16 max-w-xl sm:mt-20"> */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Are you a GCSE or A-Level student?
            </label>
            <div className="mt-2.5">
            <select
                  id="qualification"
                  name="qualification"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                value={formValues.qualification}
                <option>Select</option>
                  <option>GCSE</option>
                  <option>A-Level</option>
        
                </select>
            </div>
        </div>
        <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              What is your exam board?
            </label>
            <div className="mt-2.5">
            <select
               vlaue={formValues.exam_board}
               onChange={handleChange}
                  id="exam_board"
                  name="exam_board"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
             
                <option>Select</option>
                  <option>AQA</option>
                  <option>Edexcel</option>
                  <option>OCR</option>
               
                </select>
            </div>
        </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
             What subject are you revising?
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Biology"
                value={formValues.subject}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
           What topic are you focusing on this session ?
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="topic"
                id="topic"
                value={formValues.topic}
                placeholder="Photosynthesis"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>


            {/* Add different question styles as a future feature */}


            
          </div>
         
    
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Create practice questions
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
