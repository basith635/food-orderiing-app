import React, { useState, useEffect } from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card';
import useHttp from '../../hooks/use-http';
const Meals = () => {
    const [availableMeals, setavailableMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    // Use Effect to load once for http request and re=evalutes once dependencies changed
    useEffect(() => {
        const loadedMeals = mealsList => {
            setavailableMeals(mealsList);
        };
        fetchMeals(
            { url: 'http://localhost:3004/meals' },
            loadedMeals
        );
    }, [fetchMeals]);
    let content = <p> No Meals Found..</p>;
    if (isLoading) {
        content = <p>Loading meals. Please wait...!</p>;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    if (availableMeals.length > 0) {
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
        content = <ul>{mealsList}</ul>;
    }
    return (
        <Card>
            {content}
        </Card>
    );
};
export default Meals;