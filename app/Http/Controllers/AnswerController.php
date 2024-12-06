<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    // Get all answers
    public function index()
    {
        return response()->json(Answer::with(['question', 'user'])->get());
    }

    // Get a single answer
    public function show($id)
    {
        $answer = Answer::with(['question', 'user'])->find($id);
        if (!$answer) {
            return response()->json(['error' => 'Answer not found'], 404);
        }
        return response()->json($answer);
    }

    // Create a new answer
    public function store(Request $request)
    {
        $validated = $request->validate([
            'question_id' => 'required|exists:questions,id',
            'user_id' => 'required|exists:users,id',
            'content' => 'required',
            'title' => 'required|max:255', 
        ]);

        $answer = Answer::create($validated);
        return response()->json($answer, 201);
    }

    // Update an answer
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

    // Delete an answer
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

