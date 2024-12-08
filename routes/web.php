<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Answer;
use App\Models\Question;

Route::get('/', function () {
    return Inertia::render('Home', [
    ]);
});

Route::get('/login', function () {
    return Inertia::render('Login'); // Mengarah ke resources/js/Pages/Login.jsx
})->name('login');

Route::get('/register', function () {
    return inertia('Register');  // Pages Register
})->name('register');


Route::get('/ProfileUser', function () {
    return Inertia::render('ProfileUser', []);
})->name('ProfileUser');



Route::get('/ViewQuestion/{id}', function ($id) {
    return Inertia::render('ViewQuestion', [
        'id' => $id, // Kirim ID ke halaman Inertia
    ]);
})->name('ViewQuestion');


