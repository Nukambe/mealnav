import Button from '../Buttons/Button';

export default function Copyright() {
  return (
    <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
      <div className="flex gap-x-6">
        <a
          href="https://www.linkedin.com/in/weschap/"
          className="group"
          aria-label="MealNav on linkedin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <svg
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zm-11 20.5h-3v-12h3v12zm-1.5-13.5c-.967 0-1.5-.533-1.5-1.5 0-.934.533-1.5 1.5-1.5s1.5 .566 1.5 1.5c0 .967-.533 1.5-1.5 1.5zm13.5 13.5h-3v-5.5c0-1.3-.35-2.5-2.5-2.5-1.4 0-2 .967-2.35 1.85-.15.367-.2.834-.2 1.3v5h-3s.04-8.083 0-9h3v1.283c.4-.617 1.117-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.217v5z" />
          </svg>
        </a>
        <a
          href="https://github.com/Nukambe"
          className="group"
          aria-label="MealNav on GitHub"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <svg
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </a>
      </div>
      <p className="mt-6 text-sm text-slate-500 sm:mt-0">
        Copyright &copy; {new Date().getFullYear()} MealNav. All rights
        reserved.
      </p>
    </div>
  );
}
