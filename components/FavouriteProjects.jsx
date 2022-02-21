import React from 'react';

export default function FavouriteProjects() {
  return <section className="bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto h-48 ">
      <h1 className="text-5xl md:text-9xl font-bold py-20 text-center text-gray-700 md:text-left">
        Projects
      </h1>
    </div>
    {/* Grid starts here */}
    <div className="">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
        {/* Single card */}
        <a
          href="https://tailwindmasterkit.com"
          className="w-full block shadow-2xl"
        >
          <div className="relative overflow-hidden">
            <img
              src="https://www.freecodecamp.org/news/content/images/2021/08/projects.png"
              alt="portfolio"
              className="transition hover:scale-110 transition ease-out duration-700"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
              Tailwind Master Kit
            </h1>
            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
              01
            </h1>
          </div>
        </a>
      </div>
    </div>
  </section>;
}
