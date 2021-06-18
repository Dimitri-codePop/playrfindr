import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export default function Edit({
  modalEditOpen,
  setModalEditOpen,
  changefieldEdit,
  email,
  firstname,
  lastname,
  categories,
  themes,
  birthdate,
  departements,
  department,
  selectCat,
  selectThemes,
  changeSelectField,
  deleteSelectField,
  handleEdit,
  showMessage,
  setShowMessage,
}) {
  // MODAL SETTINGS START
  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top                   : '50%',
      left                  : '50%',
      right                 : '10%',
      bottom                : '10%',
      height                : '450px',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      zIndex                : '1000',
    },
  };

  function closeModal() {
    setModalEditOpen(!modalEditOpen);
  }
  // MODAL SETTINGS END
  // FORM SETTINGS START
  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit();
    closeModal();
    setShowMessage(!showMessage);
  };
  // select change form
  const handlechangeSelect = (event) => {
    changeSelectField(event.target.value, event.target.name);
  };
  const handleSelectDelete = (event) => {
    deleteSelectField(event.target.textContent, event.target.id);
  };
  // Selects lists start
  const listDepartements = departements.map((obj, i) => {
    return (
      <option value={obj.dataValues.id} key={i}>{obj.dataValues.label}</option>
    )
  });
  const listCategories = categories.map((category, i) => {
    return (
      <option value={category.label} key={i} >{category.label}</option>
    )
  });
  const listThemes = themes.map((themes, i) => {
    return (
      <option value={themes.label} key={i} >{themes.label}</option>
    )
  });
  const themesChoosen = selectThemes.map((obj) => (
    <div key={obj} id="theme" className="profil__tag__theme" onClick={handleSelectDelete}>
      {obj}
      <FontAwesomeIcon className="no-pointer" icon={faTimes} />
    </div>
  ));
  const catChoosen = selectCat.map((cat) => (
    <div key={cat} id="category" className="profil__tag__cat" onClick={handleSelectDelete}>
      {cat}
      <FontAwesomeIcon className="no-pointer" icon={faTimes} />
    </div>
  ));
  // Selects lists end
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <Modal
      bodyOpenClassName={"Edit Profil"}
      isOpen={modalEditOpen}
      style={customStyles}
      contentLabel="Inscription"
    >
      <button onClick={refreshPage} type="button">
        <FontAwesomeIcon className="no-pointer" icon={faTimes} />
      </button>
      <form className="form__login" onSubmit={handleSubmit}>
        <Field
          type="email"
          name="email"
          placeholder={email}
          onChange={changefieldEdit}
          value={email}
        />
        <Field
          type="text"
          name="firstname"
          placeholder={firstname}
          onChange={changefieldEdit}
          value={firstname}
        />
        <Field
          type="text"
          name="lastname"
          placeholder={lastname}
          onChange={changefieldEdit}
          value={lastname}
        />
        <Field
          type="date"
          name="birthdate"
          placeholder={birthdate}
          onChange={changefieldEdit}
          value={birthdate}
        />
        <select name="department" id="department" onChange={handlechangeSelect} className="field__input">
          <option value="">--Modifier votre département--</option>
          {listDepartements}
        </select>
        <label htmlFor="category"> Modifiez vos catégories préférés :</label>
        <select name="category" id="category" onChange={handlechangeSelect} className="field__input">
          <option value="">--Ajouter une catégorie--</option>
          {listCategories}
        </select>
        {catChoosen}
        <label htmlFor="theme"> Modifiez vos thèmes préférés :</label>
        <select name="theme" id="theme" onChange={handlechangeSelect} className="field__input">
          <option value="">--Choisissez vos thèmes--</option>
          {listThemes}
        </select>
        {themesChoosen}
        <button onClick={refreshPage} type="button">
          Annuler
          <FontAwesomeIcon className="no-pointer" icon={faTimes} />
        </button>
        <button type="submit" className="form__login-button">Envoyer</button>
      </form>
    </Modal>

  );
}

Edit.propTypes = {
  modalEditOpen: PropTypes.bool.isRequired,
  setModalEditOpen: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  changefieldEdit: PropTypes.func.isRequired,
  deleteSelectField: PropTypes.func.isRequired,

  email: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  categories: PropTypes.array,
  themes: PropTypes.array,
  departements: PropTypes.array,
  selectCat: PropTypes.array,
  selectThemes: PropTypes.array,
  department: PropTypes.number,
  changeSelectField: PropTypes.func.isRequired,
  birthdate: PropTypes.string.isRequired,
};
Edit.defaultProps = {
  departements: [],
  department: 0,
  selectCat: [],
  selectThemes: [],
  categories: [],
  themes: [],
};
