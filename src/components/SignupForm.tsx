'use client'
import { useState } from "react";


export default function SignupForm() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      // Здесь должна быть логика валидации и отправки данных
    };
  

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center">
        <div className="w-[90%] flex min-h-[400px] mt-[200px] bg-white rounded-lg justify-center items-center text-3xl flex-col">
            <h1>Aniziga</h1>
    
      <div className="w-[85%] my-6">
        <label htmlFor="name" className="block text-sm text-gray-700">
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full px-4 py-3 mt-1 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="w-[85%] mb-6">
        <label htmlFor="password" className="block text-sm text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-3 mt-1 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className=" w-[70%] text-2xl flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Регистрация
      </button>
    
        </div>
        </form>
    )
}