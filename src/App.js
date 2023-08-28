import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './footer/Footer.js';
import ModalWithForm from './ModalWithForm/ModalWithForm';
import { useState } from 'react';
import ItemModal from './ItemModal/ItemModal';

function App() {
  const weatherTemp = 75
  // const weatherTemp = '75°F'
  const [activeModal, setActiveModal] = useState('')
  const [selectedCard, setSelectedCard] = useState({})

  const handleCreateModal = () => {
    setActiveModal('create');
  };
  
  const handleCloseModal = () => {
    setActiveModal('');
  };

  const handleSelectedCard = (card) => {
    setActiveModal('preview')
    setSelectedCard(card);
  }

  // useEffect (() => {
  //   getForecastWeather().then((data) => {
  //     const temperature = parseWeatherData(data);
  //     setTemp(temperature)
  //   });
  // }, []);
  // console.log(temperature)

  return (
    <div>
       <Header onCreateModal = {handleCreateModal} /> 
      <Main weatherTemp={ weatherTemp } onSelectCard={handleSelectedCard}/>
      <Footer />   
      {activeModal === 'create' && ( 
      <ModalWithForm title="New Garment" onClose={handleCloseModal}>
        <label>
          Name
          <input type='text' name='name' minLength={1} maxLength={30}/>
        </label>
        <label>
          Image
          <input type='url' name='link' minLength={1} maxLength={30}/>
        </label>
        <p>Select the weather type:</p>
        <div>
          <div>
            <input type='radio' id='hot' value='hot'/>
            <label>Hot</label>
          </div>
          <div>
            <input type='radio' id='warm' value='warm'/>
            <label>Warm</label>
          </div>
          <div>
            <input type='radio' id='cold' value='Cold'/>
            <label>Cold</label>
          </div>
        </div>
      </ModalWithForm>
      )}
      {activeModal === 'preview' && <ItemModal selectedCard={selectedCard}
       onClose={handleCloseModal}
      />}
    </div>
  );
}

export default App;
