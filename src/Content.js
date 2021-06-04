import React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css';
import { useParams } from "react-router";
//import ReactHtmlParser from 'react-html-parser';
//import { Button } from 'react-bootstrap';

// Variables
let title = <h1>Content</h1>;


const url = 'https://localhost/sampleprojektcreate3d/api/page/';


function Content() {

    let { id } = useParams();
    console.log(url + { id }.id);
    const [pages, setPages] = useState();

    useEffect(() => {
        axios
            .get(url + { id }.id)
            .then(response => {
                setPages(response.data.pages);
            })
            .catch(err => console.log(err));
        // .then(json => console.log(json))  
    }, []);

    console.log(pages);

    return pages ? (
        <>
            {/* <h3>My Id is {id}</h3> */}
            <div className="App">
                {title}

                <div className="container">
                    <div class="row">

                        {pages.map(page => (
                            //  COL has a size 0f 6
                            <div className="col">

                                <div className="card col-md-12 text-left mt-4" style={{ width: "43rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{page.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{page.headline}</h6>
                                        <p className="card-text">{page.body}</p>

                                        <hr />

                                        <a className="card-link">PROJECT STRUCTURE</a>

                                        {page.children.childrens.map(child => (
                                            <div>
                                                <label>{child.name}</label><br />
                                            </div>

                                        ))}

                                        <hr />
                                        {
                                            page.children.childrens.map(child => (
                                                <div>
                                                    <span><strong>{child.name}</strong></span><br />

                                                    <div dangerouslySetInnerHTML={creatInnerHtml(child)}></div><br />
                                                    <hr />
                                                    {/* <a href={child.pageUrl} /> */}

                                                </div>
                                             
                                            ))}
                                        
                                        <h5 className="card-title">{page.childrens}</h5>
                                      
                                        {/* <a href="#" className="card-link">Go To Project</a> */}
                                    </div>
                                </div>
                            </div>
                            //  COL

                        ))}
                        {/* ROW */}
                    </div>

                    

                    <div className="row">
                        <div className="col">
                                
                            

                        </div>                             
                    </div>
                </div>


            </div>
        </>
    ) : ('Loading...');
}

// Clear the body text of the Content from the image link
// Geting the image adress
function creatInnerHtml(e) {
    return { __html: e.body.replaceAll("src=\"", "src=\"https://localhost") };
}
export default Content;
