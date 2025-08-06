import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            Welcome back, {auth.user?.name}! 👋
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            You're successfully authenticated and can access all protected areas
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-8">
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div>
                                    <span className="text-3xl">✅</span>
                                    <h3 className="text-lg font-semibold mt-2 text-green-800 dark:text-green-200">Authentication Status</h3>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-green-700 dark:text-green-300">Active</p>
                                    <p className="text-sm text-green-600 dark:text-green-400">Session Valid</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div>
                                    <span className="text-3xl">🔐</span>
                                    <h3 className="text-lg font-semibold mt-2 text-blue-800 dark:text-blue-200">Protected Pages</h3>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">3</p>
                                    <p className="text-sm text-blue-600 dark:text-blue-400">Pages Accessible</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div>
                                    <span className="text-3xl">👤</span>
                                    <h3 className="text-lg font-semibold mt-2 text-purple-800 dark:text-purple-200">User Profile</h3>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-purple-700 dark:text-purple-300">{auth.user?.email}</p>
                                    <p className="text-sm text-purple-600 dark:text-purple-400">Authenticated User</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border bg-card">
                            <div className="p-6 h-full">
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                                    <span>🚀</span>
                                    Quick Actions
                                </h2>
                                <div className="space-y-4">
                                    <Link
                                        href={route('protected.content')}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg">
                                            <span className="text-xl">🔐</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">Access Protected Content</h3>
                                            <p className="text-sm text-muted-foreground">Explore secure areas of the application</p>
                                        </div>
                                        <span className="text-muted-foreground">→</span>
                                    </Link>

                                    <Link
                                        href={route('user.area')}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg">
                                            <span className="text-xl">👥</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">Visit User Area</h3>
                                            <p className="text-sm text-muted-foreground">Your personalized space and settings</p>
                                        </div>
                                        <span className="text-muted-foreground">→</span>
                                    </Link>

                                    <Link
                                        href={route('profile.edit')}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg">
                                            <span className="text-xl">⚙️</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">Edit Profile</h3>
                                            <p className="text-sm text-muted-foreground">Update your account information</p>
                                        </div>
                                        <span className="text-muted-foreground">→</span>
                                    </Link>

                                    <Link
                                        href={route('settings.index')}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg">
                                            <span className="text-xl">🎛️</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium">Application Settings</h3>
                                            <p className="text-sm text-muted-foreground">Configure your preferences</p>
                                        </div>
                                        <span className="text-muted-foreground">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border bg-card">
                            <div className="p-6 h-full">
                                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                                    <span>🔒</span>
                                    Security Information
                                </h2>
                                <div className="space-y-6">
                                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800">
                                        <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                                            ✅ Session Active
                                        </h3>
                                        <p className="text-sm text-green-700 dark:text-green-300">
                                            Your authentication session is valid and secure.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-medium">Protection Features:</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                Automatic session management
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                Redirect on expiration
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                Intent preservation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                CSRF protection
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                                            💡 Test the System
                                        </h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Try logging out and accessing protected URLs directly to see automatic redirection in action!
                                        </p>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <Link
                                            href={route('home')}
                                            className="inline-block px-4 py-2 bg-background border border-border rounded-md hover:bg-accent transition-colors"
                                        >
                                            ← Back to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}