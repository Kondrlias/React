const NumberImage = ({ numberImg, setNumberImg, count, setCount }) => {
  const handleChange = (e) => {
    setNumberImg(e.target.value);
  };

  return (
    <div className="flex_container">
      <p>Показать</p>
      <input
        type="number"
        min={1}
        max={50}
        className="border"
        onChange={handleChange}
        value={numberImg}
      />
      <button className="border" onClick={() => setCount(count + 1)}>
        Обновить
      </button>
    </div>
  );
};

export default NumberImage;
