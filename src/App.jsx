import './App.css'
import Header from './Components/Header'
import Data from './Components/data'
import Entry from './Components/Entry'

function App() {
   const EntryElement = Data.map((data) => {
    return(
      <Entry 
        mainImage= {data.mainImage} 
        alt = {data.alt}
        country = {data.country}
        location = {data.location}
        date = {data.date}
        description = {data.description}
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
