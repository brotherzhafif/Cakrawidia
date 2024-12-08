<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\LoginController;

// Route untuk autentikasi
Route::middleware('web')->group(function () {
    Route::post('login', [LoginController::class, 'apiLogin']); // Login API
    Route::post('logout', [LoginController::class, 'apiLogout']); // Logout API
    Route::post('register', [LoginController::class, 'apiRegister']); // Register API
});

// Resource Routes tanpa autentikasi
Route::apiResource('questions', QuestionController::class)->only(['index', 'show']);
Route::apiResource('topics', TopicController::class)->only(['index', 'show']);
Route::apiResource('answers', AnswerController::class)->only(['index', 'show']);
Route::apiResource('users', UserController::class)->only(['index', 'show']);

// Resource Routes dengan autentikasi
Route::middleware('auth')->group(function () {
    Route::apiResource('topics', TopicController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('questions', QuestionController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('answers', AnswerController::class)->only(['store', 'update', 'destroy']);
    Route::post('likes', [LikeController::class, 'store']);
    Route::delete('likes/{id}', [LikeController::class, 'destroy']);
});
