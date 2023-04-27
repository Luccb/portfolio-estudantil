import { useState } from 'react'
import fundoMatrix from './assets/fundo-matrix.jpg'
import './App.css'

function App() {
  const [foldSobre, setFoldSobre] = useState(0);
  const [foldHabilidades, setFoldHabilidades] = useState(0);
  const [foldExperiencia, setFoldExperiencia] = useState(0);

  return (
    <div className="App">
      
      <div className="topo">
        <h1>Desenvolvedor Full-Stack</h1>
        
        <div className="cardPessoal">
          <div className="identificacao">
            <div className="foto"></div>
            <p></p>
          </div>
          <div></div>
        </div>

        <div className="descricao">
        </div>

      </div>



      <div>

      </div>
      
      <div className="conteudo">
        <button onClick={() => setFoldSobre(() => foldSobre = foldSobre ? 0 : 1 )}>
          {foldSobre ? '+' : '-'}
        </button>
        <p>
          <span className={`
            {foldSobre ? 'folded' : 'expanded'}    
          
          `}>
            
          </span>
        </p>
      </div>
      
      
      <div className="footer">

      </div>


    </div>
  )
}

export default App
