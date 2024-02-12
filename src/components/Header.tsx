import { signOut } from 'firebase/auth';
import logo from '../assets/Netflix_Logo.png'
import { userIcon } from '../constants';
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/slices/userSlice';
import { toggleGptView } from '../redux/slices/gptSlice';
import { setLanguage } from '../redux/slices/languageSlice';
import LanguageIcon from '@mui/icons-material/Language';
import { languages, navLinks } from '../utils/helper';
import CustomDropDown from './CustomDropDown';
import getSearchMovies from '../api/searchMovie';
import { debounce } from 'lodash';
import { addSearchMovies } from '../redux/slices/movieSlice';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { language } from '../locales/en-US';
import { RootState } from '../type';

const Header = () => {
  const [searchItem, setSearchItem] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const isGptSearchVisible = useSelector((state: any) => state.gptSearch.showGptSearch);
  const langKey =  useSelector((state: RootState) => state.language.locale);
  const currentLanguage = language[langKey];


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
    debouncedSearch(e.target.value);
  }
  const handleReset = () => {
    setSearchItem("");
    navigate('/browse');
  }

  const debouncedSearch: (term: string) => void = debounce((term) => {
    const fetchSearchMovies = async () => {
      const res = await getSearchMovies(term);
      dispatch(addSearchMovies(res));
    }
    fetchSearchMovies();
    navigate(`/search?q=${term}`);

  }, 1000);

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
      })
  }
  const handleGptSearch = () => {
    dispatch(toggleGptView(true));
  }

  const handleLanguageChanage = (selectedItem: any) => {
    dispatch(setLanguage(selectedItem));
  }
  useEffect(() => {
    if (!searchItem) navigate('')
  }, [handleSearch])

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <header className="w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between items-center fixed top-0">
      <img className="w-44" src={logo} alt='netflix logo' />
      {
        user && <>
          <nav className='md:w-1/2'>
            <ul className='flex gap-3 text-white text-lg'>
              {navLinks.map((link: any, i: number) => {
                return (<NavLink to={link.navigateTo}>{link.name}</NavLink>)
              })}
            </ul>
          </nav>
          <div className='flex align-middle items-center'>
            {/* searchBar component */}
            <div className='bg-transparent border border-white rounded px-2 py-1 flex mr-4'>
              <SearchIcon className='text-white' />
              <input type='text' className='focus:outline-none bg-transparent font-semibold text-white' placeholder={currentLanguage.search.placeholder} value={searchItem} onChange={handleSearch} name='search-movie' />
              {searchItem.length >= 1 && <CloseIcon className='text-white' onClick={handleReset} />}
            </div>
            {/* <button className='py-1 px-4 m-2 bg-purple-500 rounded-lg' onClick={handleGptSearch}>{isGptSearchVisible ? "Back To Home" : 'GPT Ser'}</button> */}
            <FormControl className='border-none' variant="standard">
              <Select
                value=""
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="" disabled>
                  <em><img src={userIcon} alt='useICon' /></em>
                </MenuItem>
                <MenuItem value="username">{user.displayName}</MenuItem>
                <MenuItem value='signout' onClick={handleSingOut}>SignOut</MenuItem>
              </Select>

            </FormControl>
          </div>
          </>
      }
      <CustomDropDown items={languages} icon={<LanguageIcon style={{ color: "white" }} />} onchange={handleLanguageChanage} />
    </header>
  )
}

export default Header


