<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class QuestionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['store', 'update', 'destroy']);
    }

    // Get all questions
    public function index()
    {
        return response()->json(Question::with(['user', 'topic'])->get());
    }

    public function show($id)
    {
        $question = Question::with(['user', 'topic'])->find($id);
        if (!$question) {
            return response()->json(['error' => 'Question not found'], 404);
        }
        return response()->json($question);
    }

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
