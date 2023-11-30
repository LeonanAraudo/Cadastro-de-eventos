import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [imageURL, setImageURL] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    }
  };

  return (
      <form>
    <div className="App">
      <p className="com">Compartilhe seu evento</p>
      
      <label htmlFor="input" id="area" style={{ backgroundImage: `url(${imageURL})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <input
          id="input"
          type="file"
          onChange={handleImageChange}
      
        />
        <i className="far fa-image"></i><p>Selecione uma imagem</p>
      </label>

      <div className="forme">
        <div className="título">
          <label>Título do evento</label>
          <input type="text" name='form' placeholder="Digite o título do evento" required></input>
        </div>

        <div className="descricao">
          <label>Descrição do evento</label>
          <textarea placeholder="Digite a descrição do evento" rows="4" required></textarea>
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

        <div className="Local">
          <label>Localização do evento</label>
          <input type="text" name="Local" placeholder="Digite a localização do evento" required></input>
        </div>

        <div className="dates">
          <div className="data">
            <label>Data do evento</label>
            <input type="date" name='data' placeholder="Digite a data do evento" required></input>
          </div>

          <p>Até</p>


          <div className="data2">
            <label>opcional</label>
            <input type="date" name='data2' placeholder="Digite a data do evento" required></input>
          </div>
        </div>
        
        <div className='Faixa'>
          <label>Defina a Faixa Etária</label>
          <input type='number' name='idade'></input>
        </div>
        <div className='entes'>
          <div className='orga'>
            <label>Organizadores</label>
            <input type='text' name='organizadores'></input>
          </div>
          <div className='patro'>
            <label>Patrocinadores(opcional)</label>
            <input type='text' name='patrocinadores'></input>
          </div>
        </div>

        <div className="bot">
          <button className="botao">Publicar</button>
        </div>
      </div>
      
    </div>
    </form>
  );
}

export default App;
