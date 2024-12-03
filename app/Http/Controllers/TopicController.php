<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class TopicController extends Controller
{
    public function __construct()
    {
        // Middleware untuk memastikan hanya pengguna yang sudah login yang bisa membuat, mengedit, atau menghapus topik
        $this->middleware('auth')->only(['store', 'update', 'destroy']);
    }

    public function index()
    {
        return response()->json(Topic::all());
    }

    public function show($id)
    {
        $topic = Topic::find($id);
        if (!$topic) {
            return response()->json(['error' => 'Topic not found'], 404);
        }
        return response()->json($topic);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:topics,name|max:255',
        ]);

        $topic = Topic::create($validated);
        return response()->json($topic, 201);
    }

    public function update(Request $request, $id)
    {
        $topic = Topic::find($id);
        if (!$topic) {
            return response()->json(['error' => 'Topic not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'required|unique:topics,name|max:255',
        ]);

        $topic->update($validated);
        return response()->json($topic);
    }

    public function destroy($id)
    {
        $topic = Topic::find($id);
        if (!$topic) {
            return response()->json(['error' => 'Topic not found'], 404);
        }

        $topic->delete();
        return response()->json(['message' => 'Topic deleted successfully']);
    }
}
