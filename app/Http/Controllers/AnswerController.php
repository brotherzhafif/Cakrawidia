<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AnswerController extends Controller
{
    public function __construct()
    {
        // Middleware untuk memastikan hanya pengguna yang sudah login yang bisa menjawab, mengedit, atau menghapus jawaban
        $this->middleware('auth')->only(['store', 'update', 'destroy']);
    }

    public function index()
    {
        return response()->json(Answer::with(['question', 'user'])->get());
    }

    public function show($id)
    {
        $answer = Answer::with(['question', 'user'])->find($id);
        if (!$answer) {
            return response()->json(['error' => 'Answer not found'], 404);
        }
        return response()->json($answer);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question_id' => 'required|exists:questions,id',
            'user_id' => 'required|exists:users,id',
            'content' => 'required',
        ]);

        $answer = Answer::create($validated);
        return response()->json($answer, 201);
    }

    public function update(Request $request, $id)
    {
        $answer = Answer::find($id);
        if (!$answer) {
            return response()->json(['error' => 'Answer not found'], 404);
        }

        $validated = $request->validate([
            'content' => 'nullable',
            'likes' => 'integer|min:0',
        ]);

        $answer->update($validated);
        return response()->json($answer);
    }

    public function destroy($id)
    {
        $answer = Answer::find($id);
        if (!$answer) {
            return response()->json(['error' => 'Answer not found'], 404);
        }

        $answer->delete();
        return response()->json(['message' => 'Answer deleted successfully']);
    }
}
