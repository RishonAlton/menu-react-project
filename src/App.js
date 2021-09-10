import React, {useState} from "react"
import data from "./data"
import Menu from "./Menu"
import Categories from "./Categories"


const buttonItems = ["all", ...new Set(data.map(item => item.category))]


const App = () => {

  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(buttonItems)

  const filterItems = (category) => {
      if(category === "all") {
        setMenu(data)
        return
      }
      const newItems = data.filter(item => item.category === category)
      setMenu(newItems)
  }

  return (
    <>
      <h1 className="main-heading">Our Menu</h1>
      <div className="underline"></div>
      <Categories items={categories} filterItems={filterItems} />
      <Menu menu={menu} />
    </>
  )

}


export default App

