import { useState } from 'react'
import { contractAddress, web3 } from './web3'
import VedToken from './VedToken.json'

function App() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [amount, setAmount] = useState("")

  const sendToken = () => {
    const vedToken = new web3.eth.Contract(VedToken.abi, contractAddress)
    vedToken.methods.transfer(to, amount).send({ from })
  }

  return (
    <div className="App">
      <input placeholder="From" value={from} onChange={e => setFrom(e.currentTarget.value)} />
      <input placeholder="To" value={to} onChange={e => setTo(e.currentTarget.value)} />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
      <button type="button" onClick={sendToken}>Send</button>
    </div>
  )
}

export default App
