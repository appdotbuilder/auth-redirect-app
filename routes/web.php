<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    Route::get('protected-content', function () {
        return Inertia::render('protected-content');
    })->name('protected.content');
    
    Route::get('user-area', function () {
        return Inertia::render('user-area');
    })->name('user.area');
});

// Add middleware to demonstrate authentication logging
Route::middleware(['auth', 'verified', \App\Http\Middleware\LogAuthenticationAttempts::class])->group(function () {
    // These routes will log authentication status
    Route::get('secure-demo', function () {
        return Inertia::render('user-area'); // Reuse user-area component for demo
    })->name('secure.demo');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
