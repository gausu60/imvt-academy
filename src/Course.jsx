import React from 'react'
import list from './ListCourses'

export default function Course() {
    var style = {
        'width': '18rem'
    }
    return (
        <div className="card-group d-flex flex-wrap my-5">
            {list.map( (value,index)=>{
                return(
                    <div className="card " key={index} style={style}>
                        <img className="card-img-top" src={value.icon} alt="Card image cap" width="150px" height="150px" />
                        <div className="card-body">
                            <h5 className="card-title">{value.courseName} </h5>
                            <p className="card-text">{value.description}</p>
                        </div>
                        <div className="card-footer">
                            <a href="" className="btn btn-outline-primary">Get Start</a>
                        </div>

                    </div>

                );
            })}
        
        </div>
        
        
    )
}
