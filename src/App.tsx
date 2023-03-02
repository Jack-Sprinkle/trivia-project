import './App.scss'
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import { useState } from 'react';
function App() {

  interface ISelected {
    id: string,
    title: string,
    checked: boolean
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const selectedCategory: ISelected = {
      id: event.target.id,
      title: event.target.value,
      checked: true
    }

    console.log(selectedCategory)
  }
  
  return (
    <div className="App">
      <Header/>
      <Questions />
      <h1>Trivia App here</h1>
    </div>
  )
}

export default App
