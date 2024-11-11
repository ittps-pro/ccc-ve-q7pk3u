'use client';
import React, { useState, useEffect } from 'react';

// import isOnline from 'is-online';

function MyComponent() {
  const [items, setItems] = useState([]);

  // const f1 = (a: any[]) => console.log('subscribe'),
  //   f2 = () => console.log('f2');
  // const isS = useSyncExternalStore(f1, f2);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((resJson) => {
        const data = JSON.parse(resJson);
        setItems(data);

        // localStorage.setItem('data', JSON.stringify(data));
      });
  }, []);

  return (
    <div style={{ background: '#333' }}>
      <div>serverLocalData</div>
      <code>{items.map((item) => item)}</code>
    </div>
    //  items.map((item) => <div key={item.id} title={item.title} />)
  );
}
function SaveLocalApp() {
  // Similar to useState but first arg is key to the value in local storage.
  const [name, setName] = useLocalStorage('name', 'Bob');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
