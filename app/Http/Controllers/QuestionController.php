<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    // Get all questions
    public function index()
    {
        return response()->json(Question::with(['user', 'topic'])->get());
    }

    // Get a single question
    public function show($id)
    {
        $question = Question::with(['user', 'topic', 'answers'])->find($id);
        if (!$question) {
            return response()->json(['error' => 'Question not found'], 404);
        }
        return response()->json($question);
    }

    // Create a new question
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'topic_id' => 'required|exists:topics,id',
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        $question = Question::create($validated);
        return response()->json($question, 201);
    }

    // Update a question
    public function update(Request $request, $id)
    {
        $question = Question::find($id);
        if (!$question) {
            return response()->json(['error' => 'Question not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'nullable|max:255',
            'content' => 'nullable',
            'likes' => 'integer|min:0',
            'topic_id' => 'exists:topics,id',
        ]);

        $question->update($validated);
        return response()->json($question);
    }

    // Delete a question
    public function destroy($id)
    {
        $question = Question::find($id);
        if (!$question) {
            return response()->json(['error' => 'Question not found'], 404);
        }

        $question->delete();
        return response()->json(['message' => 'Question deleted successfully']);
    }
}
