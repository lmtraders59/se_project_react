import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer.js";
import { useState, useEffect } from "react";
import ItemModal from "./ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "./contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import AddItemModal from "./AddItemModal/AddItemModal";
import { addItem } from "../utils/api";

import "./Profile/Profile.css";
// import { defaultClothingItems } from "../utils/constants";
import Profile from "./Profile/Profile";
import { getItems } from "../utils/api";
// import { getItems, addItem, deleteItem, baseUrl, handleServerResponse } from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  // storage for my cards
  const [clothingItems, setClothingItems] = useState([]);

  //   useEffect(() => {
  //     getForecastWeather()
  //       .then((data) => {
  //         const temperature = parseWeatherData(data);
  //         setTemp(temperature);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       )};
  //       getItems().then((response => {
  //   setClothingItems(response)})
  //  }, []);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = ({ name, link, weatherType }) => {
    addItem(name, link, weatherType)
      .then((item) => {
        const items = [...clothingItems, item.data];
        setClothingItems(items);
        // closeModal();
        // handleCloseModal();
      })
      .catch((err) => console.log(err));
    // const handleAddItemSubmit = (name, imageUrl, weatherType) => {
    //   addItem(name, imageUrl, weatherType)
    //     .then((item) => {
    //       const items = [...clothingItems, item.data];
    //       setClothingItems(items);
    //       closeModal();
    //     })
    //     .catch((err) => console.log(err));
    // };
    // here should be an API request
    // fetch(URL).then.apply...
    // /items POST {id: string}
    // console.log(values);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        // console.log(err);
      });
    // here we request items from server
    getItems();
    // .then((response) => {
    //   console.log(123);
    //   console.log(response);
    //   return response;
    // })
    // .then((response) => {
    //   setClothingItems(response);
    // });
  }, []);

  console.log("=====");
  console.log(clothingItems);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temperature} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
              clothingItems={clothingItems}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
