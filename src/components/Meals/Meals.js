import React, { useState, useCallback, useEffect } from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card';
const Meals = () => {
    const [availableMeals, setavailableMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const loadMeals = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3004/meals', {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const data = await response.json();
            setavailableMeals(data);
        } catch (error) {
            setError(error.message || 'Something went wrong');
        }
        setIsLoading(false);

    }, []);
    useEffect(() => {
        loadMeals();
    }, [loadMeals]);
    const mealsList = availableMeals.map(meal => {
        return (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                price={meal.price}
                description={meal.description}
            />
        );

    });
    let content = <p> No Meals Found..</p>;
    if (availableMeals.length > 0) {
        content = <ul>{mealsList}</ul>;
    }
    if (isLoading) {
        content = <p>Loading meals. Please wait...!</p>;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    return (
        <Card>
            {content}
        </Card>
    );
};
export default Meals;