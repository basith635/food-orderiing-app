import React, { Fragment } from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: 1,
        name: 'Hydrabadi Biriyani',
        price: 150,
        description: 'Biriyani is an Indian dish featuring long-grained like Basmathi flaouverd with spices',
        image: '1.jpg'
    },
    {
        id: 2,
        name: 'DUM Biriyani',
        price: 300,
        description: 'Biriyani is an Indian dish featuring long-grained like Basmathi flaouverd with spices',
        image: '2.jpg'
    },
    {
        id: 3,
        name: 'Chieck Lolipop',
        price: 200,
        description: 'Spicy Chicked with grilled onions, Spicy Chicked with grilled onions, Spicy Chicked Onions',
        image: '3.jpg'
    },
    {
        id: 4,
        name: 'POT Biriyani',
        price: 400,
        description: 'Biriyani is an Indian dish featuring long-grained like Basmathi flaouverd with spices',
        image: '4.jpg'
    },
    {
        id: 5,
        name: 'Mutton Savarma',
        price: 250,
        description: 'Indian Goat meat with stuffed vegetables, Indian Goat meat with stuffed vegetables',
        image: '5.jpg'
    }
];
const Meals = () =>
{
    const mealsList = DUMMY_MEALS.map( meal => {
        return (<MealItem
            key = {meal.id}
            id = {meal.id}
            name = {meal.name}
            price = {meal.price}
            description = { meal.description}
        />);
        
    });
    return (
        <Card>
            <ul>
                { mealsList }
            </ul>
        </Card>
    );
};
export default Meals;