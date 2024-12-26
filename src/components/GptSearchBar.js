import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ".only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-1 m-4 col-span-9 rounded-lg"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 mx-0 my-4  px-0 py-1 w-full md:text-5% md:col-span-3 md:m-4 md:px-4 md:py-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
