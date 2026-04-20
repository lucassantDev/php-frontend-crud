
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import './index.css';
import FormAdm from './components/FormAdm'
import FormAlunos from './components/FormAlunos'
import InitialPage from './components/InitialPage'
import HeaderFront from './components/HeaderFront';

function App() {

  return (
    
     <BrowserRouter>
      <>
        <HeaderFront/>
        <Routes>
          <Route path="/" element ={<InitialPage/>}/>
          <Route path="/CadastroAluno" element={<FormAlunos/>} />
          <Route path="/CadastroAdm" element={ <FormAdm />} />
        </Routes>
      </>
      
     </BrowserRouter>
  )
}

export default App
