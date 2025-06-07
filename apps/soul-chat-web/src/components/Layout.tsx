import clsx from 'clsx';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={clsx(
        'flex justify-center',
        'h-screen w-screen items-center',
        'bg-linear-to-b from-violet-500 to-fuchsia-500',
      )}
    >
      {children}
    </main>
  );
}

export default Layout;
