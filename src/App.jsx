import './App.css'
import ShowAge from './components/ShowAge'
import ShowArray from './components/ShowArray'
import ShowFun from './components/ShowFun'
import ShowName from './components/ShowName'
import ShowObj from './components/ShowObj'
import ShowStatus from './components/ShowStatus'

function App() {
  // const [count, setCount] = useState(0)
  const cardData = {
    title: 'Laptop',
    price: 29
  }
  const array = [1, 2, 3, 4, 5]

  return (
    <>
      <ShowName str='Julia' />
      <ShowAge num={18} />
      <ShowStatus isHuman={true} />
      <ShowObj cardData={cardData} />
      <ShowArray array={array} />
      <ShowFun onClick={() => alert('Нажал!')} />
    </>
  )
}

export default App
