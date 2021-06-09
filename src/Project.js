import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Project.css';
import './Content.js'

// Variables
let title = <h1>Overview</h1>;


const url = 'https://sampleprojektcreate3d.000webhostapp.com/sampleprojektcreate3d/api/pages';


function Project() {
    const [pages, setPages] = useState();

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setPages(response.data.pages);
            })
            .catch(err => console.log(err))
            .then(json => console.log(json));  
    }, []);

    // console.log(pages);

    return pages ? (
        <>
            <div className="App">
                {title}

                <div className="container">
                    <div class="row">

                        {pages.map(page => (
                            //  COL has a size 0f 6
                            <div className="col">
                                <div key={page.id} className="card text-left mt-4" style={{ width: "20rem" }}>
                                    <div className="card-body">
                                        <h4 className="card-title">{page.title}</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">{page.headline}</h6>
                                        <h6 className="card-link">Amount of Content: {page.childCount}</h6>

                                        <a href={"Content/" + page.id} className="card-link">Go To Project</a>

                                    </div>
                                </div>

                            </div>
                            //  COL

                        ))}
                        {/* ROW */}
                    </div>

                    <div className="col">

                    </div>
                </div>


            </div>
        </>
    ) : ('Loading...');
}


export default Project;
