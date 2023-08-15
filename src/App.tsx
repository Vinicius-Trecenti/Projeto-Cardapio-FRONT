import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/foodData';
import { userFoodData } from './hooks/userFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const {data} = userFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev =>!prev)
  }

  return (
    <div className='container'>
      <h1>Cardapio</h1>
      <div className='card-grid'>
        {data?.map(foodData => 
          <Card 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        )}
        
      </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App
