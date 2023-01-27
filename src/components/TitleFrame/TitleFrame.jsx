const TitleFrame = ({ status }) => {
  console.log("render title frame");
  return (
    <div className="title-frame">
      <h2>Connect 4</h2>
      <p> {status}</p>
    </div>
  );
};
export default TitleFrame;
