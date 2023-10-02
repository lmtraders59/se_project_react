import React, {useState} from "react"
import ModalWithForm from "../ModalWithForm/ModalWithForm"

const AddItemModal =({handleCloseModal, onAddItem, isOpen}) => {
    const [name, setName] = useState('')
    const handleNameChange =(e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const [link, setUrl] = useState('')
    const handleUrlChange =(e) => {
        console.log(e.target.value)
        setUrl(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddItem({name, link})
    };

    return (
        <ModalWithForm title="New Garment" onClose={handleCloseModal} isOpen={isOpen} onSubmit={handleSubmit}>
          <div>
            <label>
              <b>Name</b>
              <input
                className="modal__name"
                type="text"
                placeholder="Name"
                name="name"
                minLength={1}
                maxLength={30}
                value={name}
                onChange={handleNameChange}
              />
            </label>
          </div>
          <label>
            <b>Image</b>
            <input
              className="modal__link"
              type="text"
              placeholder="Image URL"
              name="link"
              minLength={1}
              maxLength={30}
              value={link}
              onChange={handleUrlChange}
            />
          </label>
          <p>
            <b>Select the weather type:</b>
          </p>
          <div className="ModalWithForm__radio-buttons">
            <div>
              <label>
                <input
                  className="modal__hot"
                  type="radio"
                  id="hot"
                  value="hot"
                />
                Hot
              </label>
            </div>
            <div>
              <input
                className="modal__warm"
                type="radio"
                id="warm"
                value="warm"
              />
              <label>Warm</label>
            </div>
            <div>
              <input
                className="modal__cold"
                type="radio"
                id="cold"
                value="Cold"
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
    )
}

export default AddItemModal