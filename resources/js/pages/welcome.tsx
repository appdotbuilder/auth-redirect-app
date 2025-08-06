import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="SecureApp - Protected Content Made Easy">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-5xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <>
                                <span className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                    Welcome back, {auth.user.name}!
                                </span>
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-md border border-[#19140035] px-5 py-2 text-sm font-medium leading-normal text-[#1b1b18] transition-colors hover:border-[#1915014a] hover:bg-[#f8f8f7] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b] dark:hover:bg-[#1a1a18]"
                                >
                                    Go to Dashboard
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-md border border-transparent px-5 py-2 text-sm font-medium leading-normal text-[#1b1b18] transition-colors hover:border-[#19140035] hover:bg-[#f8f8f7] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] dark:hover:bg-[#1a1a18]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-md bg-[#1b1b18] border border-[#1b1b18] px-5 py-2 text-sm font-medium leading-normal text-white transition-colors hover:bg-[#2d2d28] hover:border-[#2d2d28] dark:bg-[#EDEDEC] dark:border-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#d4d4d0] dark:hover:border-[#d4d4d0]"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-5xl lg:flex-row lg:gap-12">
                        <div className="flex-1 lg:py-20">
                            <div className="text-center lg:text-left">
                                <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
                                    🔐 SecureApp
                                </h1>
                                <p className="mb-8 text-xl text-[#706f6c] lg:text-2xl dark:text-[#A1A09A]">
                                    Seamless authentication with automatic session management
                                </p>
                                
                                <div className="mb-12 space-y-4 text-left">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🛡️</span>
                                        <div>
                                            <h3 className="font-semibold text-lg">Protected Pages</h3>
                                            <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                                Access restricted content only when authenticated
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">⏰</span>
                                        <div>
                                            <h3 className="font-semibold text-lg">Session Management</h3>
                                            <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                                Automatic redirection when sessions expire
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🚀</span>
                                        <div>
                                            <h3 className="font-semibold text-lg">Smooth Experience</h3>
                                            <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                                Easy re-authentication flow for expired sessions
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🎯</span>
                                        <div>
                                            <h3 className="font-semibold text-lg">Smart Redirects</h3>
                                            <p className="text-[#706f6c] dark:text-[#A1A09A]">
                                                Return to your intended destination after login
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {!auth.user && (
                                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                        <Link
                                            href={route('register')}
                                            className="inline-block rounded-lg bg-[#1b1b18] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#2d2d28] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#d4d4d0]"
                                        >
                                            Create Account
                                        </Link>
                                        <Link
                                            href={route('login')}
                                            className="inline-block rounded-lg border-2 border-[#1b1b18] px-8 py-3 text-lg font-medium text-[#1b1b18] transition-colors hover:bg-[#1b1b18] hover:text-white dark:border-[#EDEDEC] dark:text-[#EDEDEC] dark:hover:bg-[#EDEDEC] dark:hover:text-[#1b1b18]"
                                        >
                                            Sign In
                                        </Link>
                                    </div>
                                )}

                                {auth.user && (
                                    <div className="space-y-4">
                                        <p className="text-lg text-green-600 dark:text-green-400 font-medium">
                                            ✅ You're logged in and ready to explore protected content!
                                        </p>
                                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                            <Link
                                                href={route('dashboard')}
                                                className="inline-block rounded-lg bg-[#1b1b18] px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-[#2d2d28] dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#d4d4d0]"
                                            >
                                                Access Dashboard
                                            </Link>
                                            <Link
                                                href={route('profile.edit')}
                                                className="inline-block rounded-lg border-2 border-[#1b1b18] px-8 py-3 text-lg font-medium text-[#1b1b18] transition-colors hover:bg-[#1b1b18] hover:text-white dark:border-[#EDEDEC] dark:text-[#EDEDEC] dark:hover:bg-[#EDEDEC] dark:hover:text-[#1b1b18]"
                                            >
                                                Profile Settings
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="flex-1 mt-8 lg:mt-0">
                            <div className="rounded-2xl bg-white p-8 shadow-xl border border-[#19140035] dark:bg-[#161615] dark:border-[#3E3E3A] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                                <h2 className="mb-6 text-2xl font-bold text-center">🔒 Authentication Demo</h2>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="p-4 rounded-lg bg-[#f8f8f7] dark:bg-[#1a1a18] border border-[#19140035] dark:border-[#3E3E3A]">
                                        <h4 className="font-semibold mb-2">Protected Routes</h4>
                                        <ul className="text-sm text-[#706f6c] dark:text-[#A1A09A] space-y-1">
                                            <li>• Dashboard (requires login)</li>
                                            <li>• Profile Settings (requires login)</li>
                                            <li>• User Settings (requires login)</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="p-4 rounded-lg bg-[#f0f9ff] dark:bg-[#0f172a] border border-blue-200 dark:border-blue-800">
                                        <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                                            Try It Out
                                        </h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            {auth.user 
                                                ? "Visit the Dashboard or log out and try accessing protected content"
                                                : "Create an account or sign in to access protected areas"
                                            }
                                        </p>
                                    </div>
                                </div>

                                {auth.user ? (
                                    <div className="text-center space-y-3">
                                        <p className="text-sm font-medium text-green-600 dark:text-green-400">
                                            ✓ Currently Authenticated
                                        </p>
                                        <p className="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                            Logged in as: {auth.user.email}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-3">
                                        <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                                            ⚠ Not Authenticated
                                        </p>
                                        <p className="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                            Sign in to access protected content
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
                
                <footer className="mt-12 text-center text-sm text-[#706f6c] dark:text-[#A1A09A] lg:mt-8">
                    <p>
                        Secure authentication system built with ❤️ using{" "}
                        <a 
                            href="https://laravel.com" 
                            target="_blank" 
                            className="font-medium text-[#f53003] hover:underline dark:text-[#FF4433]"
                        >
                            Laravel
                        </a>
                        {" & "}
                        <a 
                            href="https://inertiajs.com" 
                            target="_blank" 
                            className="font-medium text-[#f53003] hover:underline dark:text-[#FF4433]"
                        >
                            Inertia.js
                        </a>
                    </p>
                </footer>
            </div>
        </>
    );
}