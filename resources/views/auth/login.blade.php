<!DOCTYPE html>
<html lang="en" data-theme="lofi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Cakrawidia</title>
    <link rel="icon" href="{{ asset('assets/img/logo.png') }}" type="image/x-icon">
    @vite('resources/css/app.css')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body>
<div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-3xl font-extrabold">Selamat Datang Kembali</h2>
    <form>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email</label>
        <input placeholder="Masukan email" id="email" type="text" name="email" class="py-2 px-3 border rounded-full shadow-sm  mt-1 block w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password">Password</label>
        <input placeholder="Password" id="password" type="password" name="password" class="py-2 px-3 border rounded-full shadow-sm  mt-1 block w-full" />
      </div>
      <div class="mt-6">
        <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-secondary  rounded-full  font-semibold  text-white hover:bg-black active:bg-black">Sign In</button>
      </div>
      <div class="mt-6 text-center">
        <a href="{{ url('/register') }}" class="text-sm"> Belum ada akun? <span class="font-semibold text-blue-600 underline">Daftar disini</span> </a>
      </div>
    </form>
  </div>
</div>
</body>
</html>