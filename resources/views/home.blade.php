@extends('layouts.app')
@section('title', 'Home')
@section('content')
    <h1>Welcome to the Home Page</h1>
    <a href="{{ url('/profileUser') }}"></a>
@endsection
