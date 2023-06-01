import { useState } from "react"

const InputForm = ({ onSubmit }) => {
    const [input1, setInput1] = useState ('');
    const [input2, setInput2] = useState ('');
    const [error, setError] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input1.trim().length < 3 || test(input1)) {
            setError('por favor chequea que la informacion sea correcta')
            return;
        }
        if (input2.length < 6) {
            setError ('por favor chquea que la informacion sea correcta')
        }
    }
  return (
    <form onSubmit={handleSubmit}> 
    <div>
      <label>
        <input placeholder="ingresa tu nombre"
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}/>
      </label>
    </div>
    <button type="submit">Enviar</button>
    {error && <p> {error} </p>}
    </form>
  );
};

export default InputForm;
