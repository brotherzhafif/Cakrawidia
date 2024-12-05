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
    return inertia('Register');
})->name('register');


Route::get('/ProfileUser', function () {
    return Inertia::render('ProfileUser', []);
})->name('ProfileUser');


Route::get('/answers/{id}', function ($id) {
    // Ambil jawaban berdasarkan ID dan relasi dengan pertanyaan
    $answer = Answer::with('question')->findOrFail($id);

    return Inertia::render('ViewAnswers', [
        'answer' => $answer,
    ]);
})->name('answers.view');