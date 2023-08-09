import React from 'react'
import Product from './Product'


const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/96818414-478c-4a0e-889c-40baf4643899.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" class="d-block w-100" alt="Redmi" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://oasis.opstatics.com/content/dam/oasis/page/2023/larry/larry-share.jpg" class="d-block w-100" alt="Oneplus" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://www.sammobile.com/wp-content/uploads/2023/03/Samsung-Galaxy-A54-vs-Galaxy-A53-1536x864.jpg" class="d-block w-100" alt="Samsung" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/image2.jpg" class="d-block w-100" alt="boat" height="500px" />
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home
