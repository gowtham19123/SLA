import { useState } from "react";

export default function Calculator() {

    const [currentValue, setCurrentValue] = useState('0');
    const [prevValue, setPrevValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [overWrite, setOverWrite] = useState(false);

    const handleDigit = (digit) => {

        if (currentValue === '0' && digit !== '.') {
            setCurrentValue(digit);
            return;
        }
        
        if (digit === '.' && currentValue.includes('.')) return;

        if (overWrite) {
            setCurrentValue(digit);
            setOverWrite(false);
        } else {
            setCurrentValue(prev => prev + digit);
        }
    };

    
    const handleClear = () => {
        setCurrentValue('0');
        setPrevValue(null);
        setOperation(null);
        setOverWrite(false);
    };

    const handleDelete = () => {
        if (overWrite) {
            setCurrentValue('0');
            setOverWrite(false);
            return;
        }
        
        if (currentValue.toString().length === 1) {
            setCurrentValue('0');
        } else {
            setCurrentValue(currentValue.toString().slice(0, -1));
        }
    };

    
    const handleOperator = (op) => {
        if (operation && !overWrite) {
            const result = calculate();
            setPrevValue(result);
            setCurrentValue(result);
        } else {
            setPrevValue(currentValue);
        }
        setOperation(op);
        setOverWrite(true); // FIXED: Uniform casing
    };

    const calculate = () => {
        const prev = parseFloat(prevValue);
        const current = parseFloat(currentValue);
        
        if (isNaN(prev) || isNaN(current)) return '';
        
        let total = '';
        switch (operation) {
            case '+':
                total = prev + current;
                break;
            case '-':
                total = prev - current;
                break;
            case '*':
                total = prev * current;
                break;
            case '/':
                total = current === 0 ? 'Error' : prev / current;
                break;
            default:
                return '';
        }
        return total.toString();
    };

    const handleEquals = () => {
        if (!operation || prevValue === null) return;

        const finalResult = calculate();

        setCurrentValue(finalResult);
        setPrevValue(null);
        setOperation(null);
        setOverWrite(true); // FIXED: Uniform casing
    };

    return (
        <div>
            
            <div>{prevValue} {operation}</div>
            <div>{currentValue}</div>

            
            <div  >
               
                <button onClick={handleClear}>AC</button>
                <button onClick={handleDelete}>DEL</button>
                <button onClick={() => handleOperator('/')}>÷</button><br/>
                
                <button onClick={() => handleDigit('7')}>7</button>
                <button onClick={() => handleDigit('8')}>8</button>
                <button onClick={() => handleDigit('9')}>9</button>
                <button onClick={() => handleOperator('*')}>×</button><br/>
                
                <button onClick={() => handleDigit('4')}>4</button>
                <button onClick={() => handleDigit('5')}>5</button>
                <button onClick={() => handleDigit('6')}>6</button>
                <button onClick={() => handleOperator('-')}>-</button><br/>
                
                <button onClick={() => handleDigit('1')}>1</button>
                <button onClick={() => handleDigit('2')}>2</button>
                <button onClick={() => handleDigit('3')}>3</button>
                <button onClick={() => handleOperator('+')}>+</button><br/>
                
                <button onClick={() => handleDigit('.')}>.</button>
                <button onClick={() => handleDigit('0')}>0</button>
                <button onClick={handleEquals}>=</button>
            </div>
        </div>
    );
}
