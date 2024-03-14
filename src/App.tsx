import { useEffect, useRef, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendarFill } from "react-icons/bs";
import "./App.css";
import Like from "./components/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

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

  const [category, setCategory] = useState("");

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

  const testFocus = useRef<HTMLInputElement>(null);

  //useEffect should be named as "afterRender" for more clarity
  useEffect(() => {
    //Side effect
    if (testFocus.current) testFocus.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => {
    //     setError(err.message);
    //     console.log(err);
    //   });


    //Note: the above then-catch pattern is preferred by Mosh
    // compared to the below try-catch pattern
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(res.data);
      } catch (err) {
        //'err as AxiosError' -> this pattern is "type assertion"
        setError((err as AxiosError).message);
        console.log(err);
      }
    };

    fetchUsers();
  }, []);
  //add an empty arra as a dependency of this use effect to stop infinite loop
  //on calling the endpoint

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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse
        perferendis laboriosam sequi, placeat aperiam id ullam sed quibusdam
        aliquid. Vel voluptates fugiat tenetur odit praesentium ad dolorem, iste
        aut inventore et dolore quam voluptatem! Velit quas doloribus a!
        Expedita consectetur provident nulla, dolorum sapiente neque sequi magni
        accusamus numquam obcaecati? Nam neque ducimus, possimus suscipit
        accusamus dolorem incidunt assumenda nemo, eveniet illum minus
        cupiditate voluptatibus animi recusandae odit consectetur dignissimos
        sed, necessitatibus iste. Reprehenderit magni voluptas quas nulla sint
        accusamus vitae nisi. Tempore ducimus distinctio dolor reprehenderit
        necessitatibus, quos consequuntur temporibus rerum. Nemo, laboriosam
        quam repellat aliquid earum ut.
      </ExpandableText>
      <Form></Form>
      <br></br>
      <label> Test focus:</label>
      <input ref={testFocus} type="text" className="form-control"></input>
      <br></br>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}></ProductList>
      <br></br>
      Users List
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
