<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\LikeController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return "Hello World";
});

Route::middleware('api')->group(function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('topics', TopicController::class);
    Route::apiResource('questions', QuestionController::class);
    Route::get('/questions/{id}', [QuestionController::class, 'show']);
    Route::apiResource('answers', AnswerController::class);

    Route::get('likes', [LikeController::class, 'index']);
    Route::get('likes/{entityType}/{entityId}', [LikeController::class, 'getLikesByEntity']);
    Route::post('likes', [LikeController::class, 'store']);
    Route::delete('likes/{id}', [LikeController::class, 'destroy']);
});

require __DIR__.'/auth.php';
