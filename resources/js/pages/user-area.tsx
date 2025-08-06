import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Area',
        href: '/user-area',
    },
];

export default function UserArea() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Area" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">👥 Personal User Area</h1>
                        <p className="text-xl text-muted-foreground">
                            Welcome to your personalized space, {auth.user?.name}
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                    <span>🎯</span>
                                    Quick Actions
                                </h2>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Link
                                        href={route('profile.edit')}
                                        className="p-4 rounded-md bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="text-2xl mb-2">👤</div>
                                        <h3 className="font-medium">Edit Profile</h3>
                                        <p className="text-sm text-muted-foreground">Update your personal information</p>
                                    </Link>
                                    <Link
                                        href={route('settings.index')}
                                        className="p-4 rounded-md bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="text-2xl mb-2">⚙️</div>
                                        <h3 className="font-medium">Settings</h3>
                                        <p className="text-sm text-muted-foreground">Manage your preferences</p>
                                    </Link>
                                    <Link
                                        href={route('dashboard')}
                                        className="p-4 rounded-md bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="text-2xl mb-2">📊</div>
                                        <h3 className="font-medium">Dashboard</h3>
                                        <p className="text-sm text-muted-foreground">View your activity overview</p>
                                    </Link>
                                    <Link
                                        href={route('protected.content')}
                                        className="p-4 rounded-md bg-background border border-border hover:bg-accent transition-colors"
                                    >
                                        <div className="text-2xl mb-2">🔐</div>
                                        <h3 className="font-medium">Protected Content</h3>
                                        <p className="text-sm text-muted-foreground">Access secure areas</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                    <span>📈</span>
                                    Activity Overview
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-md bg-background border border-border">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>Session Status</span>
                                        </div>
                                        <span className="text-green-600 font-medium">Active</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-md bg-background border border-border">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>Account Type</span>
                                        </div>
                                        <span className="text-blue-600 font-medium">Standard User</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 rounded-md bg-background border border-border">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <span>Access Level</span>
                                        </div>
                                        <span className="text-purple-600 font-medium">Authenticated</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-6 rounded-lg bg-card border border-border">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <span>👤</span>
                                    Profile Summary
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full mx-auto mb-4 text-2xl font-bold">
                                        {auth.user?.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-medium text-lg">{auth.user?.name}</h4>
                                        <p className="text-muted-foreground">{auth.user?.email}</p>
                                    </div>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-sm text-muted-foreground">
                                            Member since account creation
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950 dark:border-amber-800">
                                <h3 className="text-lg font-semibold mb-3 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                                    <span>💡</span>
                                    Pro Tip
                                </h3>
                                <p className="text-amber-700 dark:text-amber-300 text-sm">
                                    This page demonstrates how protected routes work. Try logging out and accessing this URL directly - you'll be redirected to login and then brought back here automatically!
                                </p>
                            </div>

                            <div className="p-6 rounded-lg bg-red-50 border border-red-200 dark:bg-red-950 dark:border-red-800">
                                <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200 flex items-center gap-2">
                                    <span>🔒</span>
                                    Security Features
                                </h3>
                                <ul className="text-red-700 dark:text-red-300 text-sm space-y-2">
                                    <li>• Session-based authentication</li>
                                    <li>• Automatic redirect on expiry</li>
                                    <li>• Intent preservation</li>
                                    <li>• CSRF protection</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href={route('home')}
                            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}