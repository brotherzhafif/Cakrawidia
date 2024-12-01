<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->string('username')->unique(); // Unique Username
            $table->string('email')->unique(); // Unique Email
            $table->string('password'); // Password
            $table->enum('role', ['registered', 'anonymous'])->default('anonymous'); // Role
            $table->integer('points')->default(0); // Points
            $table->timestamps(); // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
