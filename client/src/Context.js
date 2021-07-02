import React, { useState, createContext } from 'react';

export const Context = createContext();

export const Provider = (props) => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [searchInput, setSearchInput] = useState("");


  return (
    <>
      <Context.Provider value={[user, setUser, items, setItems,
        searchResult, setSearchResult, searchInput, setSearchInput]}>
        {props.children}
      </Context.Provider>
    </>
  )
}
