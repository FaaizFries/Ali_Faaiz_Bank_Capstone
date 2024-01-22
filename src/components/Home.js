import React, { useEffect, useState } from 'react';
import './Home.css';


function Home() {
    //using React Hooks
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [absoluteBalance, setAbsoluteBalance] = useState(0);

  useEffect(() => {
    getTransactions();
  }, []);
  // Function to fetch transactions from the backend
  async function getTransactions() {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/transaction`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content type. Expected JSON.');
      }

      const data = await response.json();
      setTransactions(data);

      // Calculate the initial absolute balance
      const initialBalance = data.reduce((acc, transaction) => acc + Math.abs(transaction.price), 0);
      setAbsoluteBalance(initialBalance);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }

  function addNewTransaction(ev) {
    ev.preventDefault();
    // created the URL for the backend API
    const apiUrl = process.env.REACT_APP_API_URL;
    const endpoint = '/transaction';
    const url = `${apiUrl}${endpoint}`;

    const [namePart,] = name.split(' ');
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      console.error('Invalid price input');
      return;
    }

    const requestBody = {
      name: namePart,
      description,
      datetime,
      price: parsedPrice,
    };
    //a POST request
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          setName('');
          setPrice('');
          setDatetime('');
          setDescription('');
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log('Result:', json);
        setTransactions([...transactions, json]);
        // Updates the absolute balance based on the new transaction
        setAbsoluteBalance((prevBalance) => prevBalance + parsedPrice);
      })
      .catch((error) => {
        console.error('Error during fetch:', error);
      });
  }
 //  JSX
  return (
    <div>
      <h1>${absoluteBalance.toFixed(2)}</h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={'Enter name'}
          />
          <input
            type="text"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            placeholder={'Enter price'}
          />
          <input
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder={'description'}
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">
        {transactions.length > 0 &&
          transactions.map((transaction) => (
            <div key={transaction._id} className="transaction">
              <div className="left">
                <div className="name">{transaction.name}</div>
                <div className="description">{transaction.description}</div>
              </div>
              <div className="right">
                <div className={'price ' + (transaction.price < 0 ? 'red' : 'green')}>
                  ${Math.abs(transaction.price)}
                </div>
                <div className="datetime">{transaction.datetime}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;