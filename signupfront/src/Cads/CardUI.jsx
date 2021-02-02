import React from 'react'


const Card = props => {
    return (
        <div classsName="card.text-center .justify-content-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Farid" className="card-img-top" />
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Tempore eaque architecto molestias nemo iste, numquam soluta
                        autem explicabo.
                         </p>
                    <a href="#" className="btn btn-outline-success">Go Anywhere</a>

                </div>
            </div>
        </div>

    )

}
export default Card;