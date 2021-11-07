import React from 'react'

export default function Banner() {
    return (
        <div className="div_banner mb-5">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://media.istockphoto.com/vectors/computer-programming-word-concepts-banner-vector-id1173372550" alt="First slide" height="550px" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://media.istockphoto.com/vectors/programming-coding-programming-banner-vector-id623898896" alt="Second slide" height="550px" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://media.istockphoto.com/vectors/web-site-development-programming-or-coding-banner-vector-id1224384949" alt="Third slide" height="550px" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            
        </div>
    )
}
