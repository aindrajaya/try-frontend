import React from "react";

const Meal = ({ meal }) => {
    if (!meal) return null;
    const {
        strMealThumb,
        strMeal,
        strInstructions,
        strCategory,
        strArea
    } = meal;

    return (
        <div className="meal">
        <div className="meal-img">
            <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="meal-details">
            <h3 className="meal-title">{strMeal}</h3>
            <p className="meal-instructions">
                {strInstructions && strInstructions.substring(0, 100) + "..."}
            </p>
            <ul className="meal-info">
                <li>
                    Category
                    <strong>{strCategory}</strong>
                </li>
                <li>
                    Area
                    <strong>{strArea}</strong>
                </li>
            </ul>
            <button className="btn">
                View Recipe <i className="fas fa-arrow-alt-circle-right"></i>
            </button>
        </div>
    </div>
    )
}

export default Meal;