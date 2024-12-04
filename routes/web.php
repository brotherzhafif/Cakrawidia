<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
    ]);
});

Route::get('/login', function () {
    return Inertia::render('Login'); // Mengarah ke resources/js/Pages/Login.jsx
})->name('login');

Route::get('/register', function () {
    return inertia('Register');
})->name('register');

Route::get('/ProfileUser', function () {
    return Inertia::render('ProfileUser', []);
})->name('ProfileUser');