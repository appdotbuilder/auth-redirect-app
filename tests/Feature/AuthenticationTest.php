<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('can access home page without authentication', function () {
    $response = $this->get('/');
    
    $response->assertStatus(200);
});

it('requires authentication for dashboard', function () {
    $response = $this->get('/dashboard');
    
    $response->assertRedirect(route('login'));
});

it('requires authentication for protected content', function () {
    $response = $this->get('/protected-content');
    
    $response->assertRedirect(route('login'));
});

it('requires authentication for user area', function () {
    $response = $this->get('/user-area');
    
    $response->assertRedirect(route('login'));
});

it('allows authenticated users to access dashboard', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/dashboard');
    
    $response->assertStatus(200);
});

it('allows authenticated users to access protected content', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/protected-content');
    
    $response->assertStatus(200);
});

it('allows authenticated users to access user area', function () {
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/user-area');
    
    $response->assertStatus(200);
});

it('shows personalized content for authenticated users on welcome page', function () {
    $user = User::factory()->create(['name' => 'John Doe']);
    
    $response = $this->actingAs($user)->get('/');
    
    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('welcome')
        ->has('auth.user')
        ->where('auth.user.name', 'John Doe')
    );
});

it('shows login and registration options for guests', function () {
    $response = $this->get('/');
    
    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('welcome')
        ->where('auth.user', null)
    );
});