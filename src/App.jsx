import './App.css'
import ButtonPlus from './components/ButtonPlus'
import SetColor from './components/SetColor'
import ShowInput from './components/ShowInput'
import ShowText from './components/ShowText'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <ButtonPlus />
      <div>
        <ShowText />
      </div>
      <ShowInput />
      <SetColor />
    </>
  )
}

export default App
