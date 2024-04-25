import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();

    const { increment, decrement, add } = useCounterActions();
    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                ++
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDecrement}>
                --
            </Button>
            <Button data-testid="add-btn" onClick={handleAdd}>
                +=5
            </Button>
        </div>
    );
};
