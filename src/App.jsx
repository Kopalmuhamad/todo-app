import { useState } from 'react'
import './App.scss'

import { Input } from "./components"

function App() {

  const [datas, setDatas] = useState([])
  const [valueInput, setValueInput] = useState("")
  const [status, setStatus] = useState("On progress")

  const handleInput = (event) => {
    setValueInput(event.target.value)
  }

  const handleAddTask = () => {
    if (valueInput.trim() !== "") {
      const newData = {
        id: datas.length + 1,
        name: valueInput,
        status: status
      };

      setDatas([...datas, newData])
      setValueInput("");
    }

  }

  const handleComplete = (id) => {

    const updatedDatas = datas.map(data => {
      if (data.id === id) {
        return { ...data, status: "Completed" };
      }
      return data;
    });

    setDatas(updatedDatas);

  }

  const handleDelete = (id) => {
    const filteredDatas = datas.filter(data => data.id !== id);
    setDatas(filteredDatas);
  }



  return (
    <>
      <div className="container">
        <nav className="navbar-container">
          <h1 className="navbar-container-logo">Make Your Day Perfect</h1>
        </nav>
        <Input onChange={(input) => handleInput(input)} inputValue={valueInput} onClick={handleAddTask} />
        <div className={"task-container"}>
          {datas.map((data) => (
            <div className={`task-container__task-item ${data.status === "Completed" ? "complete" : ""}`} key={data.id}>
              <div className="task-container__task-item__name">{data.name}</div>
              <div className="task-container__task-item__status">{data.status}</div>
              <div className="task-container__task-item__box-cta">
                <div className="task-container__task-item__box-cta__cta-complete" onClick={() => handleComplete(data.id)}><i className='bx bx-check'></i></div>
                <div className="task-container__task-item__box-cta__cta-delete" onClick={() => handleDelete(data.id)}><i className='bx bxs-trash-alt'></i></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
