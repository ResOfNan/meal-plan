const MyMealAndIngredients =({selectedDay, updateDay}) => {

    const editMyMeal=(myInput, value)=>{
        updateDay({
            ...selectedDay,
            [myInput]:value
        })
    }


    if(!selectedDay)return <p>Plan your week ahead of time</p>

    return <div className="whole-plan">
           
            <input
            type="text"
            className="myInput"
            placeholder="Today is..."
            id="title"
            value={selectedDay.title}
            onChange={(e)=> editMyMeal("title", e.target.value)}
            />

            <textarea
            placeholder="Your meal plan..."
            id="mealForADay"
            value={selectedDay.mealForADay}
            onChange={(e)=> editMyMeal("mealForADay", e.target.value)}
            />
            <textarea
            placeholder="Ingredients..."
            id="mealForADay"
            value={selectedDay.ingredients}
            onChange={(e)=> editMyMeal("ingredients", e.target.value)}/>
    </div>   
}

export default MyMealAndIngredients;