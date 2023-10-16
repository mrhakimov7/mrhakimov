import React from 'react'

function Contact() {
  return (
    <div className='Contact'>
      <section class="section" id="contact">
        <div class="container text-center">
            <p class="section-subtitle">How can you communicate?</p>
            <h6 class="section-title mb-5">Contact Me</h6>
            <form action="" class="contact-form col-md-10 col-lg-8 m-auto">
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <input type="text" size="50" class="form-control" placeholder="Your Name" required/>                 
                    </div>
                    <div class="form-group col-sm-6">
                        <input type="email" class="form-control" placeholder="Enter Email"requried/>                 
                    </div>
                    <div class="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6"   class="form-control" placeholder="Write Something"></textarea>
                    </div>
                    <div class="form-group col-sm-12 mt-3">
                        <input type="text" class="btn btn-outline-primary rounded" placeholder="submit" />                
                    </div>
                </div>
            </form>
        </div>
    </section>
        <div className="bottom p-5 border-top">
           <div className='d-flex justify-content-between'>
           <p>
             Copyright 2023  
            </p>
            <span>
            designed by Hakimov Abdurazzoq
            </span>
           </div>
        </div>
    </div>
  )
}

export default Contact
