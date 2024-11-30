<!DOCTYPE html>
<html lang="en" data-theme="lofi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="{{ asset('assets/img/logo.png') }}" type="image/x-icon">
    <title>@yield('title') | Cakrawidia</title>
    @vite('resources/css/app.css')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body >
    <!-- Navbar Partial -->
    @include('partials.navbar')

    <!-- Main content area -->
    <div class="w-full flex flex-col items-start justify-center grow">
        @yield('content')
    </div>

    <!-- Footer Partial -->
    @include('partials.footer')
</body>
</html>
