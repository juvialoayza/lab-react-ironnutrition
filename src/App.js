import logo from './logo.svg';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import { useState } from "react"
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [showFoodList, setShowFoodList] = useState(foods)

  const addFood = (newFood) => {

    const copy = [...foodList]
    copy.unshift(newFood)
    setFoodList(copy)

    const copy2 = [...showFoodList]
    copy2.push(newFood)
    setShowFoodList(copy2)
  }


  const filterFoodList = (filterQuery) => {

    const filteredArr = foodList.filter((eachFood) => {
      console.log(filterQuery)
      return eachFood.name.includes(filterQuery)

    })
    setShowFoodList(filteredArr)
  }

  // const deleteFood = (foodToDelete) => {
  //   const filteredFoodList = foodList.filter((eachFood) => {
  //     return eachFood.name === foodToDelete ? false : true
  //   })
  //   setShowFoodList(filteredFoodList)
  // }


  return (
    <div className="App">
      <h1>Food List</h1>
      <div>
        <AddFoodForm
          addNewFood={addFood}
          setFoodList={setFoodList}
        />
      </div>

      <hr />
      <Search filterFoodList={filterFoodList} />
      <hr />

      <div>

        {showFoodList.map((food, index) => {
          return (
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
              // deleteFood={deleteFood}
            />

          )
        })}
      </div>

    </div>
  )
}

export default App;
