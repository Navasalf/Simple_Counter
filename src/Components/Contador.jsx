import React, { useState, useEffect } from 'react';

export function SecondsCounter() {
    const [counter, setCounter] = useState(0);

    if (counter === 10) {
        alert('¡Se agoto el tiempo!');
    };
    if (counter === 20) {
        alert ('¡Se super agoto el tiempo!')
    }

    // sin el useEffect la funcion no se ejecuta correctamente.
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);
        

        return () => clearInterval(interval);
    }, []);

    return (

        <div className="App">

            <div className="container">
                <div className="row mt-4 bg-black p-4">
                    <div className="col text-light fs-1"><p className='icon'><i className="fa-regular fa-clock"></i></p></div>
                    <div className="col text-light fs-1" ><p className='element'>{Math.floor((counter / 10000) % 10)}</p></div>
                    <div className="col text-light fs-1"><p className='element'>{Math.floor((counter / 10000) % 10)}</p></div>
                    <div className="col text-light fs-1"><p className='element'>{Math.floor((counter / 1000) % 10)}</p></div>
                    <div className="col text-light fs-1"><p className='element'>{Math.floor((counter / 100) % 10)}</p></div>
                    <div className="col text-light fs-1"><p className='element'>{Math.floor((counter / 10) % 10)}</p></div>
                    <div className="col text-light fs-1"><p className='element'>{counter % 10}</p></div>
                </div>
            </div>

        </div>
    );
};

console.log(SecondsCounter)


