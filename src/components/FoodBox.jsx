import { Card, Col, Button } from 'antd';

function FoodBox({ food }) {

  // const deleteFood = (event) => {

  //   const foodToDelete = food.name

  //   food.deleteFood(foodToDelete)

    return (
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >

          <img src={food.image} height={60} alt="food" />
          <p>Calories:{food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories:{food.calories * food.servings} </b>
          </p>
          <Button type="primary"> Delete </Button>
          {/* <Button type="primary" onClick={deleteFood}> Delete </Button> */}

        </Card>
      </Col>
    );
  }

export default FoodBox;