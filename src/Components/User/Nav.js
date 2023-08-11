import React from 'react'
import All from './All'
import "../../css/hover.css"
import Villa from './Villa'
import Dine from './Dine'
import Relax from './Relax'
import Explore from './Explore'
import '../user/room_item/roomitem.css'

function Nav() {
  return (
    <div style={{marginTop: '24px'}}>
      <nav>
        <div className="nav nav-tabs justify-content-center " id="nav-tab " role="tablist">
          <button className="nav-link active room__detail-navtab" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">ALL</button>
          <button className="nav-link room__detail-navtab" id="nav-villa-tab" data-bs-toggle="tab" data-bs-target="#nav-villa" type="button" role="tab" aria-controls="nav-villa" aria-selected="false">VILLA</button>
          <button className="nav-link room__detail-navtab" id="nav-dine-tab" data-bs-toggle="tab" data-bs-target="#nav-dine" type="button" role="tab" aria-controls="nav-dine" aria-selected="false">DINE</button>
          <button className="nav-link room__detail-navtab" id="nav-relax-tab" data-bs-toggle="tab" data-bs-target="#nav-relax" type="button" role="tab" aria-controls="nav-relax" aria-selected="false">RELAX</button>
          <button className="nav-link room__detail-navtab" id="nav-explore-tab" data-bs-toggle="tab" data-bs-target="#nav-explore" type="button" role="tab" aria-controls="nav-explore" aria-selected="false">EXPLORE</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab"><All />
        </div>
        <div className="tab-pane fade" id="nav-villa" role="tabpanel" aria-labelledby="nav-villa-tab"><Villa /></div>
        <div className="tab-pane fade" id="nav-dine" role="tabpanel" aria-labelledby="nav-dine-tab"><Dine /></div>
        <div className="tab-pane fade" id="nav-relax" role="tabpanel" aria-labelledby="nav-relax-tab"><Relax /></div>
        <div className="tab-pane fade" id="nav-explore" role="tabpanel" aria-labelledby="nav-explore-tab"><Explore /></div>
      </div>
    </div>


  )
}

export default Nav
