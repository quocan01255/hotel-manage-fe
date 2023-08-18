import React from 'react'
import img_1 from "../../assets/img/img_1.jpg"
function IteamHome() {
    return (
        <>
            <div className="container">

                <div className="row mt-5 mb-5  bg-muted  "  style={{display: 'flex', justifyContent: 'center'}}>
                   
                    <div className="col-sm-6 ">
                        <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/07/icon-01.svg" alt="" width="20%" />
                        <h3 className="display-4 mt-2 pt-2">Welcome to Quy Nhon</h3>
                        <p >Flanked by dramatic mountains, lush tropical forests, and pristine beaches, the coastal city of Quy Nhon is a busting center in harmony with its natural surroundings . A short drive from Phu Cat Airport, the prosperous port city is a recent addition to Vietnam’s must-visit destinations boasting an expansive golden-sanded coastline, and deftly manicured promenades that have made it popular with local tourists. The surrounding region is dotted with hidden coves, quaint fishing villages and an abundance of fresh seafood, making it the ideal vantage point for further exploration of the Binh Dinh province</p>

                    </div>
                </div>
                {/* demo */}
            </div>
            <div className="row">

                <div className="col-sm-5   order-lg-2">
                    <img className=" mt-5 mb-4 pt-4 pb-4  " src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/06/Maia-Resort-Quy-Nhon-_Sunrise-1.jpg" alt="" width="90%" height="60%" />
                    <p>Nestled on an idyllic beachside haven, Maia Resort Quy Nhon is a tropical paradise of landscaped gardens and golden sands. Fashioned with the foodie in mind, the resort takes Fusion’s down-to-earth hospitality and signature wellness vibe with a liberal sprinkling of delicious delights, taking you on culinary adventures that capture the essences of Quy Nhon’s rich cultural heritage. Stylish private pool villas offer the best of inside and outside living space with all the comforts and conveniences of home.</p>
                </div>
                <div className="col-sm-7">
                    <h1 className=" mt-3 mb-3 pt-5 pb-5  ">Maia Resort Quy Nhon</h1>
                    <img src="https://quynhon.maiaresorts.com/wp-content/uploads/2020/08/Garden-Pool-Villa-facade-02_resize.jpg" alt="" width="100%" />
                </div>
            </div>
            <div className="row mt-5 mb-5 pt-5 pb-5">
                <div className="col-sm-5  order-lg-2 ">
                    <h1 className="display-4 mt-5 pt-5">First featurette heading. It'll blow your mind</h1>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                   

                </div>
                <div className="col-sm-7">
                    <img src={img_1} alt="" width="100%" />
                </div>
            </div>
        </>

    )
}

export default IteamHome
