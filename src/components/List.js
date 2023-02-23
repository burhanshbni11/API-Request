import React from 'react'

function List({data}) {
    // const { data } = props;

    console.log(data)
  return (
    <div>
      {
        data && data.map((item, index) =>(
           <div className='app-container'>
           <div key={index} className="container" >
                <img src={item.urlToImage
} width="150px" alt="" />
                <h3>{item.title}</h3>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default List
