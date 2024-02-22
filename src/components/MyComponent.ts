import { useSelector } from 'react-redux';
import { selectCalculatorValue } from './calculatorReducer';

const MyComponent = () => {
  const calculatorValue = useSelector(selectCalculatorValue);

  return (
    <div>
      {calculatorValue && (
        <div>
          <p>{calculatorValue.id}</p>
          <p>{calculatorValue.name}</p>
          
        </div>
      )}
    </div>
  );
};

export default MyComponent;