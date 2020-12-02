import React from 'react';

const Summary = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16">
      <h3 className="text-3xl md:text-4xl text-center text-orange">What I do</h3>
      {/* <p className="text-2xl">Fullstack developer blablabla</p> */}
      <ul className="list-disc space-y-2">
      <li className="flex items-start items-center">
          <span className="h-6 flex items-center sm:h-7">
            <svg className="flex-shrink-0 h-5 w-5 text-orange-500">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p className="ml-2 text-2xl">Web App's</p>
        </li>
        <li className="flex items-start items-center">
          <span className="h-6 flex items-center sm:h-7">
            <svg className="flex-shrink-0 h-5 w-5 text-orange-500">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p className="ml-2 text-2xl">Mobile App's</p>
        </li>
        <li className="flex items-start items-center">
          <span className="h-6 flex items-center sm:h-7">
            <svg className="flex-shrink-0 h-5 w-5 text-orange-500">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </span>
          <p className="ml-2 text-2xl">Backend</p>
        </li>
      </ul>
    </div>
  )
}

export default Summary;