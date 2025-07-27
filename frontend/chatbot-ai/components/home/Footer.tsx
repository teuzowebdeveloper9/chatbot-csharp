import { FaGithubAlt } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full border-t border-stone-200 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-4 sm:py-5 md:py-6 lg:py-4 xl:py-3 2xl:py-2 text-stone-200">
      <div className="flex flex-col items-center justify-center gap-2 text-center text-xs sm:text-sm md:text-base lg:text-sm xl:text-xs 2xl:text-xs">
        <p>
          &copy; 2025 made by{' '}
          <span className="text-stone-200 font-medium">High Capital</span>
        </p>
        <p>All rights reserved.</p>
        <a
          href="https://github.com/teuzowebdeveloper9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          developed by :{' '}
          <span className="text-stone-200 font-medium">teuzowebdeveloper9</span>
          <FaGithubAlt className="text-stone-200" />
        </a>
      </div>
    </footer>
  );
}
