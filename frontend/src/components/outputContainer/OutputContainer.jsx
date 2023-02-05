import Image from "../outputImage/outputImage";
import Description from "../description/Description";
import "./OutputContainer.css";

const Output = ({ selectedLocation, imageSrc, description }) => {
  return (
    <div className="output-container">
      <Image imageSrc={imageSrc} />
      <Description description={description} />
    </div>
  );
};

export default Output;
