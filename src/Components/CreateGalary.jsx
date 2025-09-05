const CreateGalary = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Dog`} />
      ))}
    </div>
  );
};

export default CreateGalary;
