import { useState } from 'react'
import './App.css'

function App() {
  const [transactionList, setTransactionList] = useState([])
  const [transaction, setTransaction] = useState({
    amount: 0,
    description:''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setTransactionList(prevState => ([...prevState, transaction]))  
  }

  return (
    <>
      <form className='form'onSubmit={handleSubmit}>
        <input 
          type='number' 
          value={transaction.amount} 
          onChange={(e) => setTransaction(prevState => ({
            ...prevState,
            amount: e.target.value
          }))}
        />
        <input 
          type='text' 
          value={transaction.description} 
          onChange={(e) => setTransaction(prevState => ({
            ...prevState,
            description: e.target.value
          }))}
        />
        <button type='submit'>Add transaction</button>
      </form>
      <ul>
          {
            transactionList.map(transactionEl => (
              <li>
                <span>Amount: {transactionEl.amount}</span>
                <span>Description: {transactionEl.description}</span>
              </li>
            ))
          }
      </ul>
    </>
  )
}

export default App
