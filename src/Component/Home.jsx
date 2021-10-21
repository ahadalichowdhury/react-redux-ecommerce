import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className="home">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" height="550px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container-fluid">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p class="card-text lead fs-2">Checkout All the trends</p>
                    </div>
                    
                   
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home
