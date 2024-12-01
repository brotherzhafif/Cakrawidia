<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Get all users
    public function index()
    {
        return response()->json(User::all());
    }

    // Get a single user
    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($user);
    }

    // Create a new user
    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|unique:users,username|max:255',
            'email' => 'required|unique:users,email|email|max:255',
            'password' => 'required|min:6',
            'role' => 'in:registered,anonymous',
        ]);

        $validated['password'] = Hash::make($validated['password']); // Hash password

        $user = User::create($validated);
        return response()->json($user, 201);
    }

    // Update a user
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $validated = $request->validate([
            'username' => 'unique:users,username|max:255',
            'email' => 'unique:users,email|email|max:255',
            'password' => 'nullable|min:6',
            'role' => 'in:registered,anonymous',
            'points' => 'integer|min:0',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = Hash::make($validated['password']); // Hash password
        }

        $user->update($validated);
        return response()->json($user);
    }

    // Delete a user
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}
