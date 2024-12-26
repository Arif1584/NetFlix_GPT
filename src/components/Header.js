import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { chnageLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(chnageLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-40 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-8 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.indetifier} value={lang.indetifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-1 px-3 mx-4 my-2  bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
          {showGptSearch? "Homepage":  "GPT Search"}
          </button>
          <img className="hidden md:block w-8 h-7 my-2" alt="userIcon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="hidden md:block font-thin text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
