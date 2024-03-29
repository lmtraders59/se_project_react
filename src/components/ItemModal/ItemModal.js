import "./ItemModal.css";
import closeButton from "../../images/close_button.svg";

const ItemModal = ({ selectedCard, onClose, handleDeleteModal }) => {
  return (
    <div className={`modal item__modal`}>
      <div className="item__content item__content_type_image">
        <button className="item__close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button>
        <div className="item item__container">
          <img
            className="item__image"
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          />
        </div>
        <div className="item__selected-card">{selectedCard.name}</div>
        <div className="item__weather-type">
          Weather: {selectedCard.weather}
        </div>
        <button
          className="item__modal-delete"
          type="button"
          onClick={handleDeleteModal}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
