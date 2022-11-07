import React from 'react'
import { useNavigate } from 'react-router-dom';
import PreviewItems from '../preview-Item/PreviewItems'
import './styles.scss'

export default function Preview({title, items}) {
    let navigate = useNavigate(); 
  return (
    <div>
        <div className="collection-preview">
            <h1 className="title" onClick={()=> navigate(`${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <PreviewItems key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
