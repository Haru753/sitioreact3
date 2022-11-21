import React from 'react';
import Componente from './components/P1componente';
import Contador from './components/P2estado';
import Contador2 from './components/P3dobleestado';
import Variable from './components/P4variable';
import Matriz from './components/P6matriz';
import MatrizOperaciones from './components/P7matrizOperaciones';
import CoponenteCss from './components/C03compCss';

function App() {
  return (
    <div className="App">
      <h1 >Practicas React</h1>
        <Componente/>
        <hr/>
        <Contador/>
        <hr/>
        <Contador2/>
        <hr/>
        <Variable xVariable="Lectura a variables"/>
        <hr/>
        <Matriz/>
        <hr/>
        <MatrizOperaciones/>
        <hr/>
        <CoponenteCss/>
        </div>
  );
}
        

export default App;
