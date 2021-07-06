import React, { useState, createContext } from 'react';

export const userContext = createContext();
export const itemContext = createContext();
export const resultContext = createContext();
export const inputContext = createContext();

export const Provider = (props) => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [searchInput, setSearchInput] = useState("");


  return (
    <>
      <userContext.Provider value={[user, setUser ]} >
        <itemContext.Provider value={[items, setItems]}>
          <resultContext.Provider value={[searchResult, setSearchResult]}>
            <inputContext.Provider value={[searchInput, setSearchInput]}>
        
              {props.children}
             </inputContext.Provider>
          </resultContext.Provider>
        </itemContext.Provider>
      </userContext.Provider>
    </>
  )
}