import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';


var Formulario = ({ guardarCategoria}) => {

    var OPCIONES = [
         { value: 'general', label: 'General'},
         { value: 'business', label: 'Negocios'},
         { value: 'entertainment', label: 'Entretenimiento'},
         { value: 'health', label: 'Salud'},
         { value: 'science', label: 'Ciencia'},
         { value: 'sport', label: 'Deporte'},
         { value: 'technology', label: 'Tecnologia'},
    ]

    // utilizar custom hook
    var [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    //submit al from, pasar categoria a app.js
    var buarcarNoticias = e =>{
        e.preventDefault();

        guardarCategoria(categoria);

    }

    return (
        <div className={`${styles.buscador}row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buarcarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectNoticias />
                    <div className= "input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;