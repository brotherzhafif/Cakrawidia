<?php
Route::get('/', function () {
    return view('home');
});

Route::get('/profileUser', function () {
    return view('profileUser');
});

Route::get('/register', function () {
    return view('/auth/register');
});

Route::get('/login', function () {
    return view('/auth/login');
});


Route::get('/viewQuestion', function () {
    return view('viewQuestion');
});