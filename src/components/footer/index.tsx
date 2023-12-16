"use client";
import { SOCIALMEDIA } from "./data";

export const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="limiter flex flex-col gap-8 sm:flex-row justify-between items-center">
        <div id="logo">
          <h4 className="text-lg">MR AGUINALDO</h4>
        </div>
        <nav id="social__media" className="flex h-7 gap-4 items-center">
          {SOCIALMEDIA.map(({ id, Icon, name, externLink }) => (
            <a
              key={id}
              href={externLink}
              target="_blank"
              className="hover:mb-2 transition-all duration-300"
            >
              <Icon width={24} height={24} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
