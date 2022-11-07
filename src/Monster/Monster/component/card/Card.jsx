import React, { useRef, useState } from 'react';
import { Modal } from 'antd';
import Draggable from 'react-draggable';

export default function Card(props) {
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();

    if (!targetRect) {
      return;
    }

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  
  const { street, suite, city, zipcode} = props.monsters.address
  const { name, catchPhrase, bs} = props.monsters.company
  return (
    <div>
        <img alt='Monster Img' src={`https://robohash.org/${props.monsters.id}/set=set2&size=180*180`}/>
        <span className='flex justify-center text-3xl pt-2'> {props.monsters.name} </span>
        <span className='flex justify-center text-xl py-2'> {props.monsters.email} </span>
        <div className='flex justify-center'>
        <button onClick={showModal} class="bg-[#1F582D] hover:bg-blue-100 text-white font-bold py-2 px-8 w-auto border-b-4 border-[#13321B] hover:border-[#13321B] rounded">
          For more Details...
        </button>
        </div>
        <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }} // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}} // end
          >
            <span className='flex justify-center text-4xl pt-2'> {props.monsters.name} </span>
          </div>
        }
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <span className='text-xl py-2'> Username: {props.monsters.username} </span>
        <span className='flex text-xl py-2'> {`Adress: ${street}, ${suite}, ${city}`}</span>
        <span className='flex text-xl py-2'> Zipcode: {zipcode} </span>
        <span className='flex text-xl py-2'> Website: {props.monsters.website} </span>
        <span className='flex text-xl py-2'> Company Name: {`${name}`}</span>
        <span className='flex text-xl py-2'> {`CatchPhrase: ${catchPhrase}`} </span>
        <span className='flex text-xl py-2'> Company Info: {bs} </span>

      </Modal>
    </div>
  )
}
