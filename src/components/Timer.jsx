import React ,{useState , useRef} from 'react';

const Timer = () => {

    const [timer, settimer] = useState(0);
    const timerref = useRef(null);

    const handlestart = () => {

        if(timerref.current)
        {
            return;
        }
        else{
            timerref.current = setInterval(() => {
                settimer((prev) => prev+1);
            },1000);
        }

    }

    const handlestop = () => {
        
        if(timerref.current)
         {
            clearInterval(timerref.current);
            timerref.current = null;
        }
    }

    const handlereset = () => {
        
        handlestop();
        settimer(0);
    }

  return (
    <div>Timer

    <h1>{timer}</h1>
        <div>
            <button onClick={handlestart}>START</button>
            <button onClick={handlestop}>STOP</button>
            <button onClick={handlereset}>RESET</button>
        </div>
    </div>
  )
}

export default Timer;