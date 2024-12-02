<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    // Get all questions
    public function index(Request $request)
    {
        $query = Question::query();

        // Filter berdasarkan judul
        if ($request->has('title')) {
            $query->where('title', 'like', '%' . $request->input('title') . '%');
        }

        // Filter berdasarkan topic_id
        if ($request->has('topic_id')) {
            $query->where('topic_id', $request->input('topic_id'));
        }

        // Tambahkan pagination
        $questions = $query->paginate(10); // Pagination 10 item per halaman

        return response()->json($questions);
    }

    // Get a single question
    public function show($id)
    {
        $question = Question::with(['user', 'topic'])->find($id);
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
