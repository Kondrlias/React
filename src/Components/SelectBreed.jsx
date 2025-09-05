import { useEffect, useState } from 'react';

const SelectBreed = ({ onSelectBreed }) => {
  const [breeds, setBreeds] = useState(['all']);

  const fetchBreed = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const res = await response.json();
      setBreeds(Object.keys(res.message));
    } catch (error) {
      console.error('Ошибка при загрузке списка пород', error);
    }
  };

  useEffect(() => {
    fetchBreed();
  }, []);

  const handleChange = (e) => {
    onSelectBreed(e.target.value);
  };

  return (
    <div className="flex_container">
      <p>Порода</p>
      <select name="Порода" id="breed" onChange={handleChange}>
        <option value={'all'} autoFocus>
          Все породы
        </option>
        {breeds.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBreed;
