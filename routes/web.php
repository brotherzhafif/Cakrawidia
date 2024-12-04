<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
    ]);
});

Route::get('/ProfileUser', function () {
    return Inertia::render('ProfileUser', []);
})->name('ProfileUser');