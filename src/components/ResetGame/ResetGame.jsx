function ResetGame({ handleClickNo, handleClickYes }) {
  return (
    <div>
      <div className="yesResetGame-container">
        <h1>another game?</h1>
      </div>
      <div>
        <button onClick={handleClickYes}>Yes</button>
      </div>
      <div>
        <button onClick={handleClickNo}>No</button>
      </div>
    </div>
  );
}

export default ResetGame;
