<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('Home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/ProfileUser', function () {
    return Inertia::render('ProfileUser', []);
})->name('ProfileUser');

<<<<<<< HEAD


=======
>>>>>>> 599aef7ce6bfbd7d63662729b9970d61cfeb5308
Route::get('/ViewQuestion/{id}', function ($id) {
    return Inertia::render('ViewQuestion', [
        'id' => $id, // Kirim ID ke halaman Inertia
    ]);
})->name('ViewQuestion');

<<<<<<< HEAD

=======
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
>>>>>>> 599aef7ce6bfbd7d63662729b9970d61cfeb5308
