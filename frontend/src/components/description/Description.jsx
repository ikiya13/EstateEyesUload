import "./Description.css";

const Description = ({ description }) => {
  return (
    <div className="description-container">
      <h3>Description component</h3>
      <p>{description}</p>
    </div>
  );
};

export default Description;
