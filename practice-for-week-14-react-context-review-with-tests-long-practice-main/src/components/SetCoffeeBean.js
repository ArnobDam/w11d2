import { CoffeeContext } from "../context/CoffeeContext";
import { useContext } from "react";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { coffeeBean, setCoffeeBeanId } = useContext(CoffeeContext);
  // const [ beanId, setBeanId ] = useState(0);

// const handleChange =  e => {
//   e.preventDefault();
//   setCoffeeBeanId(bean.id)
// }
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={e => setCoffeeBeanId(e.target.value)}
        value={coffeeBean.id}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
            {/* {console.log(bean.id)} */}
            {/* setBeanId(bean.id) */}
            
          </option>
          
        ))}
        
      </select>
    </div>
  );
}

export default SetCoffeeBean;