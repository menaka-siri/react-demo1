import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendarFill } from "react-icons/bs";
import "./App.css";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const onAlertClose = () => {
    setAlertVisibility(false);
    console.log("Alert Closed");
  };

  let items = ["Wattala", "Kandana", "Colombo", "Jaffna", "Negombo"];
  // items = [];
  // items = ["Wattala", "Kandana", "Colombo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  //Managing Component States - Exercise-12-a
  /* const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick =  () => {
    //here the use of spread operator is to future proof the player object within game object
    setGame({ ...game, player: { ...game.player, name: 'Bob'}})
  } */

  //Managing Component States - Exercise-12-b
  /* const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Mozzarella']});
  } */

  //Managing Component States - Exercise-12-b
  /* const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  }; */

  return (
    <div>
      {alertVisible && <Alert onClose={onAlertClose}>My Alert</Alert>}
      <Button
        // color="danger"
        onClick={() => {
          console.log("Clicked");
          setAlertVisibility(true);
        }}
      >
        Show Alert
      </Button>
      <ListGroup
        items={items}
        heading="LK Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <BsCalendarFill color="red" size="80"></BsCalendarFill>
      <br></br>
      <Like onClick={() => console.log("Heart clicked from App.tsx")} />

      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
