import './App.scss'
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import { useState, ChangeEvent, FormEvent } from 'react';
function App() {

  interface ISelected {
    id: string,
    title: string,
    checked: boolean
  }
  const [selected, setSelected] = useState<ISelected[]>([])

  const handleClick = (event: ChangeEvent<HTMLSelectElement>) => {
    const clicked: ISelected = {
      id: event.target.id,
      title: event.target.value,
      checked: true
    }
    setSelected([...selected, clicked])
  }

  const handleSubmit = (event: FormEvent ) => {
    event.preventDefault()
    console.log(selected)
  }

  console.log(selected)
  
  return (
    <div className="App">
      <Header handleClick={handleClick}/>
      <Questions />
      <h1>Trivia App here</h1>
    </div>
  )
}

export default App
