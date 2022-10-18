import './modal.css';
const Modal = (props: any, element: any) => {
  console.log('ele', element);

  return (
    <div className="modalBody">
      <div className="modalTitle">{props.props}</div>
      {props.props === 'Site Details' ? (
        <div className="modaledit">
          <button className="modalEditButton">Edit</button>
        </div>
      ) : (
        ''
      )}
      <form className="modalBodyForm">
        <div className="modalInput occupy">
          <div>URL</div>
          <input type="text" className="modalInputBar" />
        </div>
        <div className="modalInput">
          <div>Site Name</div>
          <input type="text" className="modalInputBar" />
        </div>
        <div className="modalInput">
          <div>Sector/Folder</div>
          <div className="paswordEyeContainer">
            <input type="text" className="modalInputBar passwordEye" />
            <img src={require('../../assets/icons/Path Copy.png')} alt="eye" />
          </div>
        </div>
        <div className="modalInput">
          <div>User Name</div>
          <input type="text" className="modalInputBar" />
        </div>
        <div className="modalInput">
          <div>Site Password</div>
          <div className="paswordEyeContainer">
            <input type="text" className="modalInputBar passwordEye" />
            <img src={require('../../assets/icons/eye_on.png')} alt="eye" />
          </div>
        </div>
        <div className="modalInput occupy">
          <div>Notes</div>
          <textarea className="modalInputBar" />
        </div>
      </form>
      {props.props === 'Add Site' ? (
        <div className="modalButtons">
          <button className="modalButton modalResetButton">Reset</button>
          <button className="modalButton modalSaveButton">Save</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Modal;
