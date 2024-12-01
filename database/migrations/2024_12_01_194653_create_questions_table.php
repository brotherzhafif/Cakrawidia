<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign Key to Users
            $table->foreignId('topic_id')->constrained('topics')->onDelete('cascade'); // Foreign Key to Topics
            $table->string('title'); // Title of the question
            $table->text('content'); // Content of the question
            $table->integer('likes')->default(0); // Likes
            $table->timestamps(); // created_at and updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('questions');
    }
}