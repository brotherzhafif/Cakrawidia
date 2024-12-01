<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->foreignId('question_id')->constrained('questions')->onDelete('cascade'); // Foreign Key to Questions
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign Key to Users
            $table->text('content'); // Answer Content
            $table->integer('likes')->default(0); // Likes
            $table->timestamps(); // created_at and updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('answers');
    }
}
