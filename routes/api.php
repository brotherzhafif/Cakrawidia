<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\AuthController;

Route::middleware('api')->group(function () {
    // Rute Publik
    // Rute autentikasi
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('register', [AuthController::class, 'register']); // Opsional, jika registrasi diizinkan

    Route::get('questions', [QuestionController::class, 'index']); // Daftar pertanyaan
    Route::get('questions/{id}', [QuestionController::class, 'show']); // Detail pertanyaan
    Route::get('topics', [TopicController::class, 'index']); // Daftar topik
    Route::get('topics/{id}', [TopicController::class, 'show']); // Detail topik

    // Rute membutuhkan autentikasi
    Route::middleware('auth:sanctum')->group(function () {
        // Users
        Route::apiResource('users', UserController::class)->except(['index', 'show']);

        // Pertanyaan
        Route::post('questions', [QuestionController::class, 'store']); // Membuat pertanyaan
        Route::put('questions/{id}', [QuestionController::class, 'update']); // Mengedit pertanyaan
        Route::delete('questions/{id}', [QuestionController::class, 'destroy']); // Menghapus pertanyaan

        // Jawaban
        Route::post('answers', [AnswerController::class, 'store']); // Menjawab pertanyaan
        Route::put('answers/{id}', [AnswerController::class, 'update']); // Mengedit jawaban
        Route::delete('answers/{id}', [AnswerController::class, 'destroy']); // Menghapus jawaban

        // Likes
        Route::post('likes', [LikeController::class, 'store']); // Menambah like
        Route::delete('likes/{id}', [LikeController::class, 'destroy']); // Menghapus like
    });
});

// Endpoint untuk mendapatkan informasi user yang sedang login
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


