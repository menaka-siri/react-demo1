import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Wattala", "Kandana", "Colombo", "Jaffna", "Negombo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="LK Cities" onSelectItem={handleSelectItem}></ListGroup>
    </div>
  );
}

export default App;
