function Footer({ children }) {
  return (
    <>
      <footer className="max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
        <div className="relative h-8">{children}</div>
        <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            © Copyright 2023. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
