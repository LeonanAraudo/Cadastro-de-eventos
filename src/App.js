import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      
      <p className="com">Compartilhe seu evento</p>

      <div className="area">
       <p><i class="fa-regular fa-image"></i>Escolher Imagem</p>
      </div>
       <div className="form">

      <div className=" título">
        <label>Titulo do evento</label>
         <input type="text" placeholder="Digite o título do evento" required></input>
      </div>

      

      <div className="descricao">
        <label>Descrição do evento</label>
        <textarea  placeholder="Digite a descrição do evento" rows="4" required></textarea>
      </div>

      <div className="categorias">
          <select name="" required>
      <option value="" disabled selected>Categoria do evento</option>
      <optgroup label="">
           <option className="option" value="cater">carter1</option>
         <option className="option" value="cater">carter2</option>
        <option className="option" value="cater">carter3</option>
          </optgroup>
          </select>
          </div>


      <div className=" Local">
       <label>Localização do evento</label>
       <input type="text" placeholder="Digite a localização do evento" required></input>
      </div>

      <div className=" data">
        <label>Data do evento</label>
        <input type="date" placeholder="Digite a data do evento" required></input>
      </div>

      <div className="bot">
      <button className="botao">Publicar</button>
      </div>
      </div>
    </div>
  );
}

export default App;
