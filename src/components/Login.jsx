import Header from './Header';
import bgImg from '../assets/netflixBg.jpg';
import { useRef, useState } from 'react';
import { checkValidData } from '../utils/Validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const email1 = email.current.value;
    const password2 = password.current.value;

    // validate the form data
    const message = checkValidData(email1, password2);
    setErrorMessage(message);
    if (message) return;

    //signin signup logic
    if (!isSignInForm) {
      //signup logic here
      createUserWithEmailAndPassword(auth, email1, password2)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayname, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayname, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //signin or login function
      signInWithEmailAndPassword(auth, email1, password2)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className=" absolute h-screen">
        <img className=" object-cover" src={bgImg} alt="/" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute text-white bg-black bg-opacity-80 px-12 py-8 my-20 mx-auto right-0 left-0  w-3/12 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="email@gmial.com"
          className="p-2 outline-rose-400 border-rose-400 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-semibold text-lg py-2">
          {errorMessage}
        </p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 text-xl font-semibold bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
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
