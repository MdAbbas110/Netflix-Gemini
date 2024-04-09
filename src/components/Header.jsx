import { onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../assets/Netflix_Logo_PMS.png';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../redux/userSlice';
import { toggleGeminiSearch } from '../redux/geminiSlice';
import { supported_lang } from '../utils/constants';
import { changeLang } from '../redux/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGeminiSearch = useSelector(
    (store) => store.gemini.showGeminiSearch
  );
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
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

  const handleGeminiSearch = () => {
    dispatch(toggleGeminiSearch());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="z-10 absolute px-4 md:px-8 py-2 flex flex-col md:flex-row items-center md:items-start md:justify-between w-screen bg-gradient-to-b from-black">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex w-full gap-6 items-center justify-end">
          {showGeminiSearch && (
            <select
              onChange={handleLangChange}
              className="px-4 py-3 m-2 bg-gray-900 rounded-xl text-white"
            >
              {supported_lang.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.lang}
                  </option>
                );
              })}
            </select>
          )}
          <button
            onClick={handleGeminiSearch}
            className="py-2 px-4 my-6 text-xl  text-[#FFD700] font-semibold bg-white bg-opacity-45  rounded-lg"
          >
            {showGeminiSearch ? 'Home 🏠' : 'Gemini search  ✨'}
          </button>
          <img
            className="size-[50px] hidden md:block rounded-xl"
            src={user?.photoURL}
            alt="/"
          />
          <button
            onClick={handleSignOut}
            className="p-3 mr-4 md:mr-0 my-6 text-lg text-white font-semibold bg-red-700  rounded-lg"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
