import React, { useState } from 'react';

const VerificationCodeInput = () => {
  const [code, setCode] = useState(new Array(6).fill('')); 

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setCode([
      ...code.map((d, idx) => (idx === index ? element.value : d)),
    ]);

    
    
    if (element.nextSibling && element.value !== '') {
        element.nextSibling.focus();
    } else if (element.previousSibling && element.value === '') {
        element.previousSibling.focus();
    }
};

console.log(code);
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      const updatedCode = [...code];
      updatedCode[index - 1] = '';
      setCode(updatedCode);
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-center text-white mb-4">
        Enter your six-digit code you got on your email for verification
      </h1>
      <p className="text-sm text-gray-400 mb-8 text-center">
        This helps us keep your account secure by verifying that it's really you.
      </p>
      <div className="flex space-x-2">
        {code.map((data, index) => {
          return (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              className="w-12 h-12 text-2xl font-semibold text-center text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          );
        })}
      </div>
    </div>
  );
};

export default VerificationCodeInput;
