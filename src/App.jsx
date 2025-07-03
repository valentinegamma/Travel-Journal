import './App.css'
import Header from './Components/Header'
import Data from './Components/data'
import Entry from './Components/Entry'

function App() {
   const EntryElement = Data.map((data) => {
    return(
      <Entry 
        key = {data.id}
        {...data}
      />
    )
   })

  return (
    <>
      <Header />
      {EntryElement}
    </>
  )
}

export default App
