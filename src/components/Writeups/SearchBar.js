import React from 'react'

export default function SearchBar({searchHandler}) {
    return (
        <div className="container">
        <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-search h4 text-body"></i>
                                    </div>
                                   
                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search WriteUps" onChange={searchHandler}/>
                                    </div>
                                   
                                </div>
                        </div>
                        {/* <!--end of col--> */}
        </div>
        </div>
        
    )
}
