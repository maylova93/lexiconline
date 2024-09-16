import React from "react";
import style from '../style/InputContainer.module.scss';

const InputContainer = ({ isPlaceholderOnly }) => {
  return (
    <>
      {isPlaceholderOnly ? (
        <div className={style.emptyContainer}>
          <h2>About Lexiconline</h2>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default InputContainer;
