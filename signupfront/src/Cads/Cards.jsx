import React, { Component } from 'react'
import Card from './CardUI'
import './card-style.css'
import img1 from '../assets/images/IMG_01.jpg'
import img2 from '../assets/images/IMG_02.jpg'
import img3 from '../assets/images/IMG_03.jpg'
import img4 from '../assets/images/IMG_05.jpg'
import img5 from '../assets/images/IMG_06.jpg'
import img6 from '../assets/images/IMG_07.jpg'
import img7 from '../assets/images/IMG_04.jpg'
import img8 from '../assets/images/IMG_08.jpg'
import img9 from '../assets/images/IMG_09.jpg'

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-fliex justify-content-center  rounded ">
                <div className="row">
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img1} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img2} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img3} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img4} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img5} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img6} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img7} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img8} title="Hello" />
                    </div>
                    <div className="col-md-4 py-4">
                        <Card imgsrc={img9} title="Hello" />
                    </div>

                </div>
            </div>
        )
    }
}
export default Cards;