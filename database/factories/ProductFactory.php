<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' =>  $faker->word,
        'category_id' => function () {
            // Get random category id
            return App\Category::inRandomOrder()->first()->id;
        },
        'description' => $faker->realText(rand(80, 600)),
        'price' => $faker->randomFloat(2, 0, 100),
        'image'=> $faker->imageUrl(260,280, 'food'),
    ];
});
