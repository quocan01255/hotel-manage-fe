import React from 'react'
import iconExplore from '../../assets/icon/Explore.svg'
import img1 from '../../assets/Banh-It-Tower_resize.webp'
import img2 from '../../assets/DJI_0789_resize.webp'
import img3 from '../../assets/Hon-Kho-island_resize.webp'
import img4 from '../../assets/food-exploration-scaled.webp'

function ItemExplore() {
    return (
        <div className="container">

            <div className="row mt-5 mb-5  bg-muted  " style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-sm-6 ">
                    <img src={iconExplore} alt="" width="20%" />
                    <h3 className="display-4 mt-2 pt-2">Beautiful & untouched Quy Nhon</h3>
                    <p >Relatively obscure, and unfrequented by mass tourism, the coastal city of Quy Nhon is a gateway destination replete with stunning beaches, dramatic mountain ranges and quintessential Vietnamese culture. Enjoy the unique traditions of one of Vietnam’s most charming cities through its rich folkloric and culinary history.</p>
                </div>
            </div>

            {/* demo */}

            <div className="row">

                <div className="col-sm-5 ">
                    <h1 className="display-6  mb-5 pt-5 pb-5">BANH IT TOWERS</h1>
                    <p>Embarking on a journey through endless rice paddies and bucolic communities, you will visit the Banh It Towers or ‘Silver Towers’. This complex comprises of four towers and is one of the best preserved examples of late Cham architecture. After conquering a small ascent lined by local conifers, the peak is spiritual awakening and overlooks the untouched beauty of the surrounding landscape.</p>
                </div>
                <div className="col-sm-7">
                    <img src={img1} alt="" width="100%" />
                </div>
            </div>

            <div className="row mt-5 mb-5 pt-5 pb-5">
                {/* order-lg-2  */}
                <div className="col-sm-5 order-lg-2">
                    <h1 className="display-6 mb-5 pt-5 pb-5">KY CO BEACH</h1>
                    <p>Renowned as one of Quy Nhon’s best-kept secrets, Ky Co becomes the must-visit beach for those who love pristine seaside landscapes. Located approximately 15 minutes from Maia Resort Quy Nhon, the sleepy village of Ky Co is nestled within a secluded cove which boasts impossibly turquoise waters and glistening white sand beaches. Dip into the ‘natural swimming pool’, put on your snorkeling gears to gaze its rich house reef or explore the collection of caves lining the shores. A remarkable experience you should not miss while in Quy Nhon.</p>

                </div>
                <div className="col-sm-7">
                    <img src={img2} alt="" width="100%" />
                </div>
            </div>

            <div className="row mt-5 mb-5 pt-5 pb-5">
                <div className="col-sm-5 ">
                    <h1 className="display-6  mb-5 pt-5 pb-5">HON KHO ISLAND</h1>
                    <p>A short boat ride away brings you to Hon Kho island, a small rocky islet featuring unspoiled sandy beaches, turquoise waters and mountain cliffs. Enjoy sunbathing on the beach while experiencing the local culinary scene comprised mostly of the freshest seafood imaginable. Take a stroll around the island and be amazed by its natural beauty or hire a boat to experience the rejuvenating waters that surround this local treasure. The ideal day-trip!</p>

                </div>
                <div className="col-sm-7">
                    <img src={img3} alt="" width="100%" />
                </div>
            </div>

            <div className="row mt-5 mb-5 pt-5 pb-5">
                {/* order-lg-2  */}
                <div className="col-sm-5 order-lg-2">
                    <h1 className="display-6  mb-5 pt-5 pb-5">FOOD EXPLORATION</h1>
                    <p>Quy Nhon, one of the rare cities that captures the essence of beach and urban life in equal measure, also offers the added temptations of local art, classic Vietnamese architecture and, most importantly, fabulous cuisine. Surrounded by verdant pastures; charming townships and bountiful waters, this diminutive yet bustling coastal city is a gastronomic gateway teeming with culinary treasures.</p>

                </div>
                <div className="col-sm-7">
                    <img src={img4} alt="" width="100%" />
                </div>
            </div>

        </div>
    )
}

export default ItemExplore
