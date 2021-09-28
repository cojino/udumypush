import "./App.css";
import ExpenseItem from "./componets/ExpenseItem";
import Expenses from "./componets/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(2040, 2, 20),
      item: "it's just a car",
      price: 20.39,
    },
    {
      date: new Date(2075, 2, 20),
      item: "it's just a game",
      price: 20.39,
    },
    {
      date: new Date(2020, 2, 20),
      item: "it's just a boy",
      price: 20.39,
    },
    {
      date: new Date(2020, 2, 20),
      item: "it's just a bike",
      price: 20.39,
    },
  ];
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
