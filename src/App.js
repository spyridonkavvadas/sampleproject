import React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Button } from 'react-bootstrap';

// Variables
let title= <h1>Overview</h1>;
//let webdata = '';

const url = 'https://localhost/sampleprojektcreate3d/api/pages';


function App() {
  const [pages, setPages] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setPages(response.data.pages);
      })
      .catch(err => console.log(err));
      // .then(json => console.log(json))  
  }, []);

  console.log(pages);

  return pages ? (
    <>
    <div className="App">
     {title}

     <div className="container">
  <div class="row">
    
    <div className="col">
     
    {pages.map(page => (
      //  COL has a size 0f 6
       <div key={page.id} className="card" style={{width: "18rem"}}>
       <div className="card-body">
         <h5 className="card-title">{page.title}</h5>
         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
         <p className="card-text">{page.body}</p>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link">Another link</a>
       </div>
     </div>
    //  COL
     ))}
{/* ROW */}

    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
  </div>
{/* ROW */}
     {pages.map(page => (
      //  COL has a size 0f 6
       <div key={page.id} className="card" style={{width: "18rem"}}>
       <div className="card-body">
         <h5 className="card-title">{page.title}</h5>
         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
         <p className="card-text">{page.body}</p>
         <a href="#" className="card-link">Card link</a>
         <a href="#" className="card-link">Another link</a>
       </div>
     </div>
    //  COL
     ))}
{/* ROW */}
    </div>
    </>
  ) : ('Loading...');
}


export default App;
