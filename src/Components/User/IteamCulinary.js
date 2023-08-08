import React from 'react'

function IteamCulinary() {
  return (

    <div className="container">

      <div className="row mt-5 mb-5  bg-muted   " style={{ display: 'flex', justifyContent: 'center' }}>

        <div className="col-sm-6 ">
          <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/05/Dine.svg" alt="" width="20%" />

          <h3 className="display-4 mt-2 pt-2">Culinary awakening & unexpected discoveries</h3>

          <p >Dining punctuates the day and gives meaning to each hour. As such we’ve taken great care designing the dining experience for our guests. Our menus are crafted to recall local flavors and far flung tastes, using fresh produce from the region. We invite you to experience the touches that make Maia Resort Quy Nhon a singular culinary experience.</p>


        </div>


      </div>

      {/* demo */}

      <div className="row">

        <div className="col-sm-5 ">
          <h1 className="display-6 mb-5 pt-5 pb-5">VỊ RESTAURANT</h1>
          <p>Vị meaning “taste” is the resort’s culinary centrepiece, and with views of Quy Nhon Bay’s shimmering waters and a refreshing sea breeze, it’s the perfect place to grab a bite, or just sit back, relax and enjoy the view. The restaurant’s live cooking stations showcase the best of the region’s local produce and bountiful seafood, and with a warm and welcoming atmosphere, this is the ideal setting for breakfast, lunch and dinner.</p>
          {/* <a href="#" className="text-info display-6 d-flex p-2">Menu</a> */}

        </div>
        <div className="col-sm-7">
          <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/06/Maia-Resort-Quy-Nhon-VI_RESTAUTANT-2.jpg" alt="" width="100%" />
        </div>
      </div>

      <div className="row mt-5 mb-5 pt-5 pb-5">
        {/* order-lg-2  */}
        <div className="col-sm-5 order-lg-2">
          <h1 className="display-6  mb-5 pt-5 pb-5">AD HOC RESTAURANT</h1>
          <p>Capturing the resort’s culinary identity through dishes of pared-back simplicity, Ad Hoc’s chefs scour the local markets daily, sourcing the freshest seasonal ingredients before returning to the kitchen and crafting them into a unique, daily changing menu designed for a communal dining experience. </p>

        </div>
        <div className="col-sm-7">
          <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2021/04/MAQ0472.jpg" alt="" width="100%" />
        </div>
      </div>

      <div className="row mt-5 mb-5 pt-5 pb-5">
        <div className="col-sm-5 ">
          <h1 className="display-6  mb-5 pt-5 pb-5">POOL BAR</h1>
          <p>As another day of blissful relaxation or exploration of the surrounding region comes to an end, what better place to relax and watch the sun sink slowly behind the horizon than our open-air Pool Bar. With comfortable seating and a creatively enticing décor, our beachside bar provides a place to reflect on the day’s events and plan for tomorrow’s.</p>

        </div>
        <div className="col-sm-7">
          <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2021/04/MAQ0491.jpg" alt="" width="100%" />
        </div>
      </div>

      <div className="row mt-5 mb-5 pt-5 pb-5">
        {/* order-lg-2  */}
        <div className="col-sm-5 order-lg-2">
          <h1 className="display-6  mb-5 pt-5 pb-5">First featurette heading. It'll blow your mind</h1>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>

        </div>
        <div className="col-sm-7">
          <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/06/Maia-Resort-Quy-Nhon-_Sunrise-1.jpg" alt="" width="100%" />
        </div>
      </div>

    </div>
  )
}

export default IteamCulinary
