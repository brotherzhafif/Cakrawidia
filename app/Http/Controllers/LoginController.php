<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;  // Import JWTAuth

class LoginController extends Controller
{
    // API Login menggunakan JWT
    public function apiLogin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            // Generate JWT token
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);  // Buat token dari user yang terautentikasi

            // Kembalikan token di dalam response
            return response()->json([
                'message' => 'Login successful',
                'token' => $token,  // Kirim token JWT ke client
            ], 200);
        }

        return response()->json(['error' => 'Invalid credentials'], 401);
    }

    // API Logout
    public function apiLogout(Request $request)
    {
        // Hapus token dan logout dari JWT
        JWTAuth::invalidate(JWTAuth::getToken());

        return response()->json(['message' => 'Logout successful'], 200);
    }

    // API Register
    public function apiRegister(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'required|string',
            'points' => 'required|integer',
        ]);

        $user = User::create([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
            'points' => $validated['points'],
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    }
}
