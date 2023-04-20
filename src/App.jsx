import { useState } from 'react'
import List from './List'
import data from './data'


function App() {
const [people, setPeople] = useState(data)
  return (
    <main>
      <h1>{`${people.length} Birthdays Today`}</h1>
      <List people={people} setPeople={setPeople}/>
    </main>
  )
}

export default App
