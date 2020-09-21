/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MatrixParam from './helpers/MatrixParam';
import SingleValueParam from './helpers/SingleValueParam';
import {
  singleNumberValidCheck,
  successParamMsg,
  errorParamMsg,
} from './helpers/ParamHelper';
import '../../styles/Param.scss';

const DEFAULT_SIZE = 7;
const TRANSITIVE_CLOSURE = 'Transitive Closure';
const TRANSITIVE_CLOSURE_EXAMPLE = 'Example: 0,1';

function TransitiveClosureParam() {
  const [message, setMessage] = useState(null);
  const [size, setSize] = useState(DEFAULT_SIZE);

  /**
   * For Transitive Closure, since the first param is just to set the matrix's size,
   * we don't want to dispatch an algorithm only using the size, we need to implement
   * a new handle function instead of using the default one.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    if (singleNumberValidCheck(inputValue)) {
      const target = parseInt(inputValue, 10);
      setSize(target);
      setMessage(successParamMsg(TRANSITIVE_CLOSURE));
    } else {
      // when the input cannot be converted to a number
      setMessage(errorParamMsg(TRANSITIVE_CLOSURE, TRANSITIVE_CLOSURE_EXAMPLE));
    }
  };

  return (
    <>
      <div className="matrixForm">
        {/* Size input */}
        <SingleValueParam
          name="transitiveClosure"
          buttonName="Set"
          // TODO: replace mode for Transitive Closure
          // mode="search"
          formClassName="singleInput"
          DEFAULT_VAL={DEFAULT_SIZE}
          ALGORITHM_NAME={TRANSITIVE_CLOSURE}
          EXAMPLE={TRANSITIVE_CLOSURE_EXAMPLE}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
        />

        {/* Matrix input */}
        <MatrixParam
          size={size}
          ALGORITHM_NAME={TRANSITIVE_CLOSURE}
          EXAMPLE={TRANSITIVE_CLOSURE_EXAMPLE}
          setMessage={setMessage}
        />
      </div>

      {/* render success/error message */}
      {message}
    </>
  );
}

export default TransitiveClosureParam;