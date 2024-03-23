import Header from './Header';
import bgImg from '../assets/netflixBg.jpg';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className=" absolute h-[100dvh]">
        <img className=" object-cover" src={bgImg} alt="/" />
      </div>
      <form className=" absolute text-white bg-black bg-opacity-80 p-12 my-40 mx-auto right-0 left-0  w-3/12 ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="email@gmial.com"
          className="p-2 outline-rose-400 border-rose-400 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 text-xl font-semibold bg-red-700 w-full rounded-lg">
          {isSignInForm ? 'Signin' : 'LogIn'}
        </button>
        <p
          onClick={toggleSignInForm}
          className="my-3 text-lg cursor-pointer text-white"
        >
          {isSignInForm ? 'New to Netflix? Sign Up' : 'Already register LogIn'}
        </p>
      </form>
    </>
  );
};

export default Login;
