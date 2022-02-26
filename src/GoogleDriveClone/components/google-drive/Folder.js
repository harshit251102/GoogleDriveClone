import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import {useNavigate , Link} from 'react-router-dom';
import image from './folder.png';


export default function Folder({ folder }) {

  function stringer(a){
    let aa = "";
    if(a.length<10){
    return a;
    }
    for(let i =0; i<8;i++){
        aa += a[i];
    }
    aa+="...";
    return aa;
    }

  const navigate = useNavigate();

  return (    
    <>
    <span style={{marginRight:"1px"}}><img src={image} style={{height:"15px", width:"15px"}} alt="image"/></span>
      <Link  style={{marginRight:"15px"}} className='text-gray-200
        no-underline hover:text-red-300'  
        to ={folder.id===null ? "/dashboard" : `/folder/${folder.id}`}
      >
        {stringer(folder.name)}
      </Link>
    </>

  )
}


            