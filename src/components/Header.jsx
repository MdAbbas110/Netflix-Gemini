import { onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../assets/Netflix_Logo_PMS.png';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname, photoURL } = user;
        dispatch(addUser({ uid, email, displayname, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
      // return a function form the component for clean up
      //unsubscribe when the component will unmount
      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="z-10 absolute px-8 py-2 flex justify-between w-screen bg-gradient-to-b from-black">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex gap-4 items-center">
          <img
            className="size-[50px] rounded-xl"
            src={user?.photoURL}
            alt="/"
          />
          <button
            onClick={handleSignOut}
            className="p-3 my-6 text-lg text-white font-semibold bg-red-700 w-full rounded-lg"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
