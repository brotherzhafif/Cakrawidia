<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Halaman Dashboard, jika diperlukan tanpa autentikasi
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
