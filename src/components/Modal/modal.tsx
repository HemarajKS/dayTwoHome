import { useEffect, useState } from 'react';
import './modal.css';

const Modal = (props: any) => {
  console.log('ele', props);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState({
    siteName: '',
    url: '',
    sector: '',
    userName: '',
    sitePassword: '',
    notes: '',
  });

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]');
  console.log('current', currentUser);

  const previousData: any = JSON.parse(
    localStorage.getItem(currentUser) || '[]'
  );

  console.log('current', previousData);

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
  };

  const currentItem = previousData[props.element];
  console.log('current', currentItem);

  const editVal = () => {
    if (props.props === 'Add Site') {
      setEdit(true);
    }
  };

  useEffect(() => {
    editVal();
  });
  return (
    <div className="modalBody">
      <div className="modalTitle">{props.props}</div>
      {props.props === 'Site Details' ? (
        <div className="modaledit">
          <button
            className="modalEditButton"
            onClick={() => {
              setEdit(!edit);
              if (props.props === 'Add Site') {
                setEdit(true);
              }
            }}
          >
            Edit
          </button>
        </div>
      ) : (
        ''
      )}
      <form className="modalBodyForm">
        <div className="modalInput occupy">
          <div>URL</div>
          <input
            type="text"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.url : currentItem.url}
          />
        </div>
        <div className="modalInput">
          <div>Site Name</div>
          <input
            type="text"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.siteName : currentItem.siteName}
          />
        </div>
        <div className="modalInput">
          <div>Sector/Folder</div>
          <div className="paswordEyeContainer">
            <input
              type="text"
              className="modalInputBar passwordEye"
              onChange={onChangeHandler}
              value={edit ? value.sector : currentItem.sector}
            />
            <img src={require('../../assets/icons/Path Copy.png')} alt="eye" />
          </div>
        </div>
        <div className="modalInput">
          <div>User Name</div>
          <input
            type="text"
            className="modalInputBar"
            onChange={onChangeHandler}
            value={edit ? value.userName : currentItem.userName}
          />
        </div>
        <div className="modalInput">
          <div>Site Password</div>
          <div className="paswordEyeContainer">
            <input
              type="text"
              className="modalInputBar passwordEye"
              onChange={onChangeHandler}
              value={edit ? value.sitePassword : currentItem.sitePassword}
            />
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
