import React from "react";

function Input({ success, secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return <div data-test="component-input" />
  }

  return (
    <div data-test="component-input">
      <form action="" className='form-inline'>
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess("")
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Input;
