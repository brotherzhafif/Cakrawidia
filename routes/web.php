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
<<<<<<< HEAD
})->name('ProfileUser');


Route::get('/answers/{id}', function ($id) {
    // Ambil jawaban berdasarkan ID dan relasi dengan pertanyaan
    $answer = Answer::with('question')->findOrFail($id);

    return Inertia::render('ViewAnswers', [
        'answer' => $answer,
    ]);
})->name('answers.view');
=======
})->name('ProfileUser');  // Page Profile User

Route::get('/ViewQuestion', function () {
    return Inertia::render('ViewQuestion', []);
})->name('ViewQuestion'); // Page View Question
>>>>>>> cb7db1cd2d8dc68188e07c13e4750e46f39252ad
