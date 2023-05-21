/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'
// import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Header from '../../components/ui/Header';
import DashboardNav from '../../components/dashboard/Nav';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TestForm() {


  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
 

    // Get data from the form.
    const data = {
      subject: event.target.subject.value,
      exam_board: event.target.exam_board.value,
      qualification: event.target.qualification.value,
    //   question_style: event.target.question_style.value,
      topic: event.target.topic.value,

    };
 
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
 
    // API endpoint where we send form data.
    const endpoint = '/api/uk_test/';
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
 
    try {
        const response = await fetch(endpoint, options);
        const result = await response.json();
    
        // Handle the result or perform any necessary actions.
        console.log(result);
      } catch (error) {
        // Handle any error that occurred during the request.
        console.error('Error:', error);
      }
    
  };
  return (
<>
{/* <Header/> */}

{/* Improve the Dashboard
<DashboardNav/> */}

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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Generate Test Materials</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Use AI to improve your exam scores
        </p>
      </div>
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
                  id="exam_board"
                  name="exam_board"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder="Photosynthesis"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>


            {/* Add different question styles as a different feature */}
{/* <br/>
            <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              What style of practice questions do you want?
            </label>
            <div className="mt-2.5">
            <select
                  id="question_style"
                  name="question_style"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                
                  <option>Multiple Choice</option>
                  <option>True/False</option>
                  <option>Short Answer</option>
        
                </select>
            </div> */}
        {/* </div> */}

            
          </div>
         
      
         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create test materials
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
