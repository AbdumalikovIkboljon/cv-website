import React from "react";
import image from "../public/my-profile-pic.jpg";
import { BiSun, BiMoon } from "react-icons/bi";
import { contact, socialLinks, skills } from '../constants';
const Header = ({ theme, toggleTheme }) => {
  
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-300 dark:bg-slate-800 dark:text-white sm:border-r-2 border-dotted dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src={image}
            className="w-32 rounded-full"
            alt="Profile picture"
            width={32}
            height={32}
          />
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Abdumalikov <span className="font-semibold">Ikboljon</span>
            </h1>
            <p className="text-xl font-light">Frontend Developer</p>
          </div>
          <button className="absolute  right-10 top-10" onClick={toggleTheme}>
            {theme ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-5 items-start justify-start border-b-2 border-dotted p-5 dark:border-gray-700">
          <ul className="space-y-3">
            {contact.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                {item.icon}
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b-2 border-dotted p-5 dark:border-gray-700">
            <h2 className="capitalize text-base font-semibold md:text-2xl">Social Links</h2>

            <ul className="space-y-3">
                {
                    socialLinks.map((item) => (
                        <li key={item.id} className="flex items-center gap-3">
                            {item.icon}
                            <a href={item.url} target="_blank" className="underline decoration-transparent transition duration-300 ease-in-out hover:decoration-inherit">{item.url}</a>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b-2 border-dotted p-5 dark:border-gray-700">
            <h1 className="capitalize text-base font-semibold md:text-2xl">Education</h1>

            <ul>
                <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:bg-slate-800 before:rounded-full dark:before:bg-white transform">
                    <span className="font-semibold md:text-lg">Computer Science</span>
                    <span className="font-light">Seojeong University</span>
                    <span className="text-sm text-gray-400">2024-2026</span>
                </li>
            </ul>
        </div>
        <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
                {
                    skills.map((item) => (
                        <span key={item.id} className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-white dark:bg-white dark:text-slate-800">{item.name}</span>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
