<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Question;
use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['store', 'destroy']);
    }

    public function index()
    {
        return response()->json(Like::all());
    }

    public function getLikesByEntity($entityType, $entityId)
    {
        $likes = Like::where('entity_type', $entityType)
            ->where('entity_id', $entityId)
            ->get();

        return response()->json($likes);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'entity_type' => 'required|in:question,answer',
            'entity_id' => 'required|integer',
        ]);

        // Validate if the entity exists
        if ($validated['entity_type'] === 'question') {
            if (!Question::find($validated['entity_id'])) {
                return response()->json(['error' => 'Question not found'], 404);
            }
        } elseif ($validated['entity_type'] === 'answer') {
            if (!Answer::find($validated['entity_id'])) {
                return response()->json(['error' => 'Answer not found'], 404);
            }
        }

        $like = Like::create($validated);
        return response()->json($like, 201);
    }

    public function destroy($id)
    {
        $like = Like::find($id);
        if (!$like) {
            return response()->json(['error' => 'Like not found'], 404);
        }

        $like->delete();
        return response()->json(['message' => 'Like deleted successfully']);
    }
}
