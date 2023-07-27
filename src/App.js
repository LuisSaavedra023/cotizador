import React,{useState} from 'react'
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  
  // const { datos } = resumen;
  //extraer datos.
  const { datos, cotizacion } = resumen;

  const [ cargando, guardarCargando ] = useState(false);

  return (
    <Contenedor>

      <Header
      titulo={'Cotizador de seguros'}
    />
    <ContenedorFormulario>
      <Formulario
        guardarResumen={guardarResumen}
        guardarCargando={guardarCargando}
      />
      {/* {datos ? <Resumen></Resumen>:null} */}
      {cargando ? <Spinner/>: null}
      
      <Resumen
        datos={datos}
      />
      {!cargando
      ?<Resultado
        cotizacion={cotizacion}
      ></Resultado>
      :null
      }
      
    </ContenedorFormulario>

    </Contenedor>
  ); 
}

export default App;
