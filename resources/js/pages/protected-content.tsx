import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Protected Content',
        href: '/protected-content',
    },
];

export default function ProtectedContent() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Protected Content" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">🔐 Protected Content Area</h1>
                        <p className="text-xl text-muted-foreground">
                            This content is only accessible to authenticated users
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 rounded-lg bg-card border border-border">
                            <div className="text-center mb-4">
                                <span className="text-4xl">👤</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">User Profile</h3>
                            <p className="text-muted-foreground mb-4">
                                Manage your personal information and preferences
                            </p>
                            <Link
                                href={route('profile.edit')}
                                className="inline-block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                            >
                                View Profile
                            </Link>
                        </div>

                        <div className="p-6 rounded-lg bg-card border border-border">
                            <div className="text-center mb-4">
                                <span className="text-4xl">⚙️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Settings</h3>
                            <p className="text-muted-foreground mb-4">
                                Configure your account settings and preferences
                            </p>
                            <Link
                                href={route('settings.index')}
                                className="inline-block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Open Settings
                            </Link>
                        </div>

                        <div className="p-6 rounded-lg bg-card border border-border">
                            <div className="text-center mb-4">
                                <span className="text-4xl">📊</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
                            <p className="text-muted-foreground mb-4">
                                View your activity and manage your data
                            </p>
                            <Link
                                href={route('dashboard')}
                                className="inline-block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Go to Dashboard
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 p-6 rounded-lg bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">✅</span>
                            <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">
                                Authentication Success!
                            </h2>
                        </div>
                        <div className="space-y-3 text-green-700 dark:text-green-300">
                            <p className="text-lg">
                                Congratulations! You are successfully authenticated and can access this protected content.
                            </p>
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-md">
                                <h3 className="font-semibold mb-2">Your Session Details:</h3>
                                <ul className="space-y-1 text-sm">
                                    <li><strong>Name:</strong> {auth.user?.name}</li>
                                    <li><strong>Email:</strong> {auth.user?.email}</li>
                                    <li><strong>Status:</strong> Authenticated ✓</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                        <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                            🛡️ How Session Protection Works
                        </h3>
                        <div className="space-y-3 text-blue-700 dark:text-blue-300">
                            <p>
                                This application implements automatic session management:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Protected routes require valid authentication</li>
                                <li>Expired sessions automatically redirect to login</li>
                                <li>After login, users return to their intended destination</li>
                                <li>Seamless re-authentication when sessions expire</li>
                            </ul>
                            <p className="mt-4 font-medium">
                                Try logging out and accessing this page directly to see the redirect in action!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}