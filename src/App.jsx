import { useEffect, useState } from 'react';
import './App.css';
import CreateGalary from './Components/CreateGalary';
import Loading from './Components/Loading';
import NumberImage from './Components/NumberImage';
import SelectBreed from './Components/SelectBreed';
import UpdateCount from './Components/UpdateCount';

function App() {
  const [count, setCount] = useState(0);
  const [numberImg, setNumberImg] = useState(3);
  const [images, setImages] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const fetchNum = async () => {
    setIsLoading(true);
    try {
      let response;
      if (selectedBreed !== 'all') {
        response = await fetch(
          `https://dog.ceo/api/breed/${selectedBreed}/images/random/${numberImg}`
        );
      } else {
        response = await fetch(
          `https://dog.ceo/api/breeds/image/random/${numberImg}`
        );
      }
      const res = await response.json();
      setImages(res.message);
      console.log('Render');
    } catch (error) {
      console.error('Ошибка при загрузке изображений:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNum();
  }, [count, selectedBreed]);

  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <>
      <h1>Галерея собак</h1>
      <UpdateCount count={count} />
      <SelectBreed onSelectBreed={handleSelectBreed} />
      <NumberImage
        numberImg={numberImg}
        setNumberImg={setNumberImg}
        count={count}
        setCount={setCount}
      />
      {isLoading ? <Loading /> : <CreateGalary images={images} />}
    </>
  );
}

export default App;
