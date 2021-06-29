import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Field from 'src/components/Home/Modals/Signup/Form/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import imageModale from 'src/assets/Imagemodale.png'
import './style.scss';
import moment from 'moment';

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
    <div key={obj} id="theme" className="modal_signup--typesresultsthemes" onClick={handleSelectDelete}>
      {obj}
      <FontAwesomeIcon className="no-pointer" icon={faTimes} />
    </div>
  ));
  const catChoosen = selectCat.map((cat) => (
    <div key={cat} id="category" className="modal_signup--typesresultscat" onClick={handleSelectDelete}>
      {cat}
      <FontAwesomeIcon className="no-pointer" icon={faTimes} />
    </div>
  ));
  // Selects lists end
  const refreshPage = () => {
    window.location.reload();
  };
  const dateSetUp = moment(birthdate).format("yyyy-MM-DD");
  return (
    <Modal
      isOpen={modalEditOpen}
      className="customStyleEditProfil"
      contentLabel="Inscription"
    >
      <div className="modal_signup">
      <div className="modal_signup--part1">
      <img className="modal_signup--img" src={imageModale} alt=""/>
      <FontAwesomeIcon onClick={refreshPage} className="modal_signup--close" icon={faTimes} />
      </div>
      <div className="modal_signup--part2">
      <form className="modal_signup--form" onSubmit={handleSubmit}>
      <h1 className="modal_signup--title">Modifier son profil</h1>
      <div className="modal_signup--name">
        <Field
          type="text"
          name="firstname"
          placeholder="Prénom"
          onChange={changefieldEdit}
          value={firstname}
        />
        <Field
          type="text"
          name="lastname"
          placeholder="Nom"
          onChange={changefieldEdit}
          value={lastname}
        />
        </div>
        <Field
          type="email"
          name="email"
          placeholder="email"
          onChange={changefieldEdit}
          value={email}
        />
        <div className="modal_signup--pwdate">
        <Field
          type="date"
          name="birthdate"
          onChange={changefieldEdit}
          value={dateSetUp}
        />
        
        <select name="department" id="department" onChange={handlechangeSelect} className="field__input--dpt">
          <option value={department}>{department}</option>
          {listDepartements}
        </select>
        </div>
        <div className="modal_signup--types">
          <div className="modal_signup--cat">
            <label htmlFor="category" className="field__input--cattitle"> Modifiez vos catégories préférés :</label>
            <select name="category" id="category" onChange={handlechangeSelect} className="field__input--type">
              <option value="">Choisissez vos catégories</option>
              {listCategories}
            </select>
            <p className="modal_signup--maxtypes">(max. 3)</p>
            {catChoosen}
            </div>
            <div className="modal_signup--themes">
              <label htmlFor="theme" className="field__input--themestitle"> Modifiez vos thèmes préférés :</label>
              <select name="theme" id="theme" onChange={handlechangeSelect} className="field__input--type">
                <option value="">Choisissez vos thèmes</option>
              {listThemes}
              </select>
              <p className="modal_signup--maxtypes">(max. 3)</p>
              {themesChoosen}
            </div>
          </div>
          <div className="form__login-inscript">
            <button type="submit" className="form__login-button">Envoyer</button>
          </div>
      </form>
      </div>
      </div>
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
