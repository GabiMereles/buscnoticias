import React, { useState } from 'react';

var useSelect = (stateInicial, opciones) => {

    //State del custom hook

    var [state, actualizarState] = useState(stateInicial);
    
    var SelectNoticias= () =>(
        <select
            className= "browser-default"
            value={state}
            onChange= {e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state,SelectNoticias];
}    
export default useSelect;