import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card my-3 m-auto shadow-sm rounded-3 position-relative overflow-hidden">
          <div className="image">
            <a href={`/productdetails/${props.data.id}`} className='my-0 py-0'>
            <img src={props.data.thumbnail} className="card-img-top border-bottom" alt={props.data.title} height={'100%'} />
            </a>
            </div>
            {/* <small className='position-absolute badge' style={{top:'15px',right:'-3px',background:'#ff9100'}}>{props.data.tags[1]}</small> */}
            <div className="card-body px-2 py-1">
              <small className="text-secondary">{props.data.category}</small>
              <h4 className="card-title" title={props.data.title}>{props.data.title.slice(0,17)}
                {
                  props.data.title.length>20? '...' : ''
                }
              </h4>
              <div className="d-flex justify-content-between align-items-center mb-0 py-0">
                <p className="card-text color fw-bold my-0">${props.data.price.marketvalue}</p>
                <a href={`/productdetails/${props.data.id}`} className="px-2 btn text-info py-0">View More <i className="bi bi-arrow-right text-info"></i></a>
              </div>
              {/* <p className="card-text my-0"><small className="text-secondary">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
    </>
  )
}

export default Card
