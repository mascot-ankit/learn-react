import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import elephant from './assets/elephant.jpeg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };

  let myArray = [1, 2, 3, 4, 5];

  return (
    <>

      <div className="card bg-base-100 w-96 shadow-sm mx-auto">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <Card cardTitle="Custom Card Title" cardDescription="This is a custom card with props." someProp={myObject} />
      <Card cardTitle="Another Card" cardDescription="This is another card with different props." myarr={myArray} />
    </>
  )
}

export default App
