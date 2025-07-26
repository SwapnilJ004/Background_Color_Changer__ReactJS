import { useState } from 'react'
import Color from './Color'

function App() {
    const [color = "black", setColor] = useState("black")
  return (
    <div className="h-screen w-screen duration-200"
      style={{
        backgroundColor: color,
      }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full">
          <Color color="red" textColor="white" setColor={setColor}/>
          <Color color="blue" textColor="white" setColor={setColor}/>
          <Color color="green" textColor="white" setColor={setColor}/>
          <Color color="black" textColor="white" setColor={setColor}/>
          <Color color="gray" textColor="white" setColor={setColor}/>
          <Color color="lavender" textColor="black" setColor={setColor}/>
          <Color color="purple" textColor="white" setColor={setColor}/>
          <Color color="pink" textColor="black" setColor={setColor}/>
          <Color color="olive" textColor="white" setColor={setColor}/>
          <Color color="brown" textColor="white" setColor={setColor}/>
          <Color color="orange" textColor="white" setColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App
