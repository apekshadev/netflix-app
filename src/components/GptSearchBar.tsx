import { useSelector } from "react-redux"
import { language } from "../locales/en-US";
import { useState } from "react";
import getGPTSearch from "../api/openAI";
import { RootState } from "../type";

const GptSearchBar= () => {
  const [searchValue, setSearchValue] = useState('')
  const langKey =  useSelector((state: RootState) => state.language.locale);
  const currentLanguage = language[langKey].gpt;
  const handleChange =(e:any)=>{
    setSearchValue(e.target.value);

  } 
  const handleSubmit=(e:any)=>{
      e.preventDefault();
      // getGPTSearch(searchValue);
  }

    return (
    <div className='absolute w-full h-full'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/fec9ccd8-dd33-4c12-98ab-498f077ff6b3/AE-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
      alt='login-background'
      className='absolute'
      />
        <div className='absolute top-[15%] left-[15%] w-full'>
        <form onSubmit={handleSubmit} className='bg-black w-[70%] h-full flex items-center justify-between px-4 py-3 gap-3'>
            <input  onChange={handleChange} value={searchValue} className='rounded bg-transparent text-white font-bold py-2 px-4 border-white w-[80%]' type='text' placeholder={currentLanguage.placeholder}/>
            <button type="submit" className=" w-[20%] py-2 px-4 rounded bg-red-700 text-white font-bold text-xl">{currentLanguage.search}</button>
        </form>
    </div>
  </div>
  )
}

export default GptSearchBar