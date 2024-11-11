'use client';
import React, { useEffect, useState, useId, useSyncExternalStore } from 'react';
import { Card, Button, Drawer, Select, Input, Form } from 'antd';

// import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';
import { createRoot } from 'react-dom/client';
import {
  CopyOutlined,
  DeleteOutlined,
  HeartOutlined,
  HomeOutlined,
  PlusOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';

// import App as AppView from './App';
// import { Card, App } from 'antd';
// import { log } from 'console';

// // import { useState } from "react";

// // let DataSources = {
// //   "local": localStorage.getItem('store')
// //   "server": ''
// // }
// // // Usage

// // // console.log(Intl);

// // const setD = (d: any[]) => {
// //   //   if(!window) {
// //   //     log("window not found")
// //   //   } else {
// //   // log("window found")
// //   //   }
// //   // store = window.localStorage.getItem('store')
// //   //  JSON.parse(d).map(i =>  { i.filter => (fi => fi === 2)})
// // };
// // let userFields = ["name", "phone"]
// function SaveLocalApp() {
//   /*
//   // Similar to useState but first arg is key to the value in local storage.
//   // const nameLocal = useLocalStorage('name', 'Bob'); <Input
//         type="text"
//         placeholder="Enter your name"
//         value={nameLocal}
//         onChange={(e) => setName(e.target.value)}
//       />
// */
//   return (<div>1 loc</div>);
// }

// Hook

// "https://jsonplaceholder.typicode.com/todos"
// const getData = (u: string, data: any[]) =>
//   fetch(u)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       return data;
//       // return getData;
//     });

// const store = { key: 'store' };
// function SaveData(data) {
//   localStorage.setItem('store', JSON.stringify([1, 2, 3]));
// }
// let timestamp = Date.now();

// function getSavedData(data) {
//   localStorage.setItem('store', JSON.stringify([1, 2, 3]));
// }

/* 

 "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
      "lat": "-43.9509",
      "lng": "-34.4618"
    }
  },
  
  */
interface User {
  id: number;
  username: string;
  fullname: {
    last: string;
    first: string;
    middle: string;
  };
  organization?: string;
  description?: string;
}
async function getServerStatus() {
  // const cb

  await fetch('api.srvio.pro:1337/_health')
    .then((res) => res.json())
    .then((resJson) => {
      const data = JSON.parse(resJson);

      if (data) {
        console.log(data);
        return data;
      } else {
        console.log('no data');

        return { data: null };
      }
      // console.log(data);
      // const serverLocalData = useLocalStorage('data', data);

      // localStorage.setItem('data', JSON.stringify(data));

      // setItems(data);
    });
  // const dns require('dns')
}

function MyComponent() {
  const [items, setItems] = useState([]);
  const [sync, setSyncState] = useState(false);

  // const f1 = (a: any[]) => console.log('subscribe'),
  //   f2 = () => console.log('f2');
  // const isS = useSyncExternalStore(f1, f2);

  async function syncData() {
    console.log('start sync');
    setSyncState(true);
    console.log(sync);
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((resJson) => {
        const data = JSON.parse(resJson);
        console.log(data);
        const serverLocalData = useLocalStorage('data', data);

        localStorage.setItem('data', JSON.stringify(data));

        // setItems(data);
      });
  }, []);

  const { Option } = Select;
  return (
    <>
      <div>{items.toString()}</div>
      <Card
        extra={
          <Button size={'large'} type={'primary'} onClick={() => syncData()}>
            <SyncOutlined />
          </Button>
        }
        title={'Store'}
      ></Card>
    </>
  );
}

function useLocalStorage(key, initialValue) {
  const serverId = useId();

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
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<MyComponent />);
