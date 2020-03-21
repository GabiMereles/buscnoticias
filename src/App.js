import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias
  var [categoria, guardarCategoria]= useState('');
  var [noticias, guardarNoticias] = useState ([]);
  
  useEffect(() => {
    var consultarApi=async() =>{
      var url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=e6ec70ad3f4244cab5bc13271f6d44b1`;
      var respuesta = await fetch (url);
      var noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarApi();
  }, [categoria]);

  return (

    <Fragment>
      <Header
        titulo='Buscador de noticias'
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>

    </Fragment>
  );
}

export default App;
