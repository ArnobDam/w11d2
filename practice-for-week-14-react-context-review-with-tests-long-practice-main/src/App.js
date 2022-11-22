import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import SetCoffeeBean from "./components/SetCoffeeBean";

function App() {
  return (
    <>
    <SelectedCoffeeBean/>
    <SetCoffeeBean coffeeBeans={coffeeBeans}/>
      <h1>Welcome to Coffee App</h1>
    </>
  );
}

export default App;