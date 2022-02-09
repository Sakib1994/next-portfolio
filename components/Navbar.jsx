import React, { useEffect, useState } from "react";
// import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { AiFillLinkedin,AiOutlineGithub,AiOutlineTwitter } from "react-icons/ai";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const isLight = theme === "light";
  // Page names that can be shared between mobile menu and navbar
  const pages = ['About', 'Projects', 'Experience', 'Contact'];
  const navLinks = pages.map(page => <a className="no-underline dark:text-gray-100 font-semibold hover:text-gray-600" key={page} href={`#${page}`}>{page}</a>);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="flex md:flex-row justify-between items-center">
        <div>
          <span className="transition ease-in delay-150 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-3xl px-4 pb-1 rounded hover:from-indigo-600 hover:via-purple-600 hover:to-pink-500 hover:ring ring-purple-500">
            Sakib
          </span>
          <span className="block py-2 dark:text-gray-100">Full-Stack Developer</span>
        </div>

        <nav className="hidden md:block space-x-6">
          {navLinks}
        </nav>
        <div className="space-x-4">
          <button>
            {mounted && isLight?(<AiFillLinkedin className="w-6 h-6 text-blue-500"/>):(<AiFillLinkedin className="w-6 h-6 text-white"/>)}
          </button>
          <button>
          {mounted && isLight?(<AiOutlineGithub className="w-6 h-6 text-black"/>):(<AiOutlineGithub className="w-6 h-6 text-white"/>)}
          </button>
          <button>
          {mounted && isLight?(<AiOutlineTwitter className="w-6 h-6 text-blue-600"/>):(<AiOutlineTwitter className="w-6 h-6 text-white"/>)}
          </button>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>

      </div>
    </div>
    //Rest of the code
  );
}