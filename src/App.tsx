import { useState } from 'react'
import './App.css'
import { AddCategory } from './components/AddCategory';
import { GridCategory } from './components/GridCategory';

function App() {

  const [categories, setCategories] = useState<string[]>(['dragon ball z']);

  const onAddCategory = (inputValue: string) => {
    if(categories.includes(inputValue)) return;
    setCategories( currencyValue => (
      [
        ...currencyValue,
        inputValue
      ]
    ));
  };

  return (
    <>
      <h1>Gif App</h1>
      <div>
        {/* <AddCategory
          setCategories={ (categories) => {
            setCategory(categories);
          } }
        /> */}

        <AddCategory
          onNewCategory={ onAddCategory }
        />
      </div>

      {
        categories.map(category => (
          <GridCategory
            key={ category }
            category={ category }
          />
        ))
      }
    </>
  )
}

export default App
