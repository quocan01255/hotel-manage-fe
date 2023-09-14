import React from 'react'
import '../Css/stylebill.css'

export default function DetailBill(props) {
    const { bookings } = props
    return (
        <div className='width:100%;height:100%;'>
            <div className="es-wrapper-color" style={{ backgroundColor: '#F6F6F6' }}>
                {bookings.map((booking) => (
                    <table className="es-wrapper" width="100%" cellSpacing={0} cellPadding={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', padding: 0, margin: 0, width: '100%', height: '100%', backgroundRepeat: 'repeat', backgroundPosition: 'center top', backgroundColor: '#F6F6F6' }}>
                        <tbody><tr>
                            <td valign="top" style={{ padding: 0, margin: 0 }}>
                                <table cellPadding={0} cellSpacing={0} className="es-header" align="center" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '100%', tableLayout: 'fixed !important', backgroundColor: 'transparent', backgroundRepeat: 'repeat', backgroundPosition: 'center top' }}>
                                    <tbody><tr>
                                        <td align="center" style={{ padding: 0, margin: 0 }}>
                                            <table className="es-header-body" cellSpacing={0} cellPadding={0} bgcolor="#ffffff" align="center" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundColor: '#FFFFFF', width: '600px' }}>
                                                <tbody><tr>
                                                    <td align="left" style={{ margin: 0, paddingTop: '20px', paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px' }}>
                                                        <table cellSpacing={0} cellPadding={0} width="100%" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                            <tbody><tr>
                                                                <td align="left" style={{ padding: 0, margin: 0, width: '560px' }}>
                                                                    <table width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                        <tbody><tr>
                                                                            <td align="left" style={{ padding: 0, margin: 0 }}><h1 style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '48px', letterSpacing: 0, color: '#259b97', fontSize: '32px' }}>CLEMENT HOTEL</h1></td>
                                                                        </tr>
                                                                        </tbody></table></td>
                                                            </tr>
                                                            </tbody></table></td>
                                                </tr>
                                                </tbody></table></td>
                                    </tr>
                                    </tbody></table>
                                {/* table detailbill */}
                                <table cellPadding={0} cellSpacing={0} className="es-content" align="center" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '100%', tableLayout: 'fixed !important' }}>
                                    <tbody><tr>
                                        <td align="center" style={{ padding: 0, margin: 0 }}>
                                            <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding={0} cellSpacing={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundColor: '#FFFFFF', width: '600px' }}>
                                                <tbody><tr>
                                                    <td align="left" style={{ padding: 0, margin: 0, paddingTop: '20px', paddingRight: '20px', paddingLeft: '20px', backgroundPosition: 'center top' }}>
                                                        <table cellPadding={0} cellSpacing={0} width="100%" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                            <tbody><tr>
                                                                <td align="center" valign="top" style={{ padding: 0, margin: 0, width: '560px' }}>
                                                                    <table cellPadding={0} cellSpacing={0} width="100%" role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                        <tbody><tr>
                                                                            <td align="center" style={{ padding: 0, margin: 0 }}><h2 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '26px', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '31px', color: '#259b97' }}>Detail Bill</h2></td>
                                                                        </tr>
                                                                        </tbody></table></td>
                                                            </tr>
                                                            </tbody></table></td>
                                                </tr>
                                                    <tr>
                                                        <td align="left" style={{ margin: 0, paddingTop: '20px', paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px', backgroundPosition: 'center top' }}>
                                                            <table className="es-right" cellSpacing={0} cellPadding={0} align="right" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', float: 'right' }}>
                                                                <tbody><tr>
                                                                    <td align="left" style={{ padding: 0, margin: 0, width: '580px' }}>
                                                                        <table style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'separate', borderSpacing: '0px', borderLeft: '1px solid transparent', borderTop: '1px solid transparent', borderBottom: '1px solid transparent', backgroundColor: '#efefef', backgroundPosition: 'center top' }} width="100%" cellSpacing={0} cellPadding={0} bgcolor="#efefef" role="presentation">
                                                                            <tbody><tr>
                                                                                <td align="left" style={{ margin: 0, paddingTop: '20px', paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px' }}><h4 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', color: '#259b97' }}>SUMMARY:</h4></td>
                                                                            </tr>
                                                                                <tr>
                                                                                    <td align="left" style={{ padding: 0, margin: 0, paddingRight: '20px', paddingLeft: '20px', paddingBottom: '20px' }}>
                                                                                        <table style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '100%' }} className="cke_show_border" cellSpacing={1} cellPadding={1} border={0} align="left" role="presentation">
                                                                                            <tbody><tr>
                                                                                                <td style={{ padding: 0, margin: 0, fontSize: '14px', lineHeight: '21px' }}>Name:</td>
                                                                                                <td style={{ padding: 0, margin: 0 }}><span style={{ fontSize: '14px' }}><b>{booking.firstname}</b></span></td>
                                                                                            </tr>
                                                                                                <tr>
                                                                                                    <td style={{ padding: 0, margin: 0, fontSize: '14px', lineHeight: '21px' }}>Email:</td>
                                                                                                    <td style={{ padding: 0, margin: 0 }}><strong><span style={{ fontSize: '14px', lineHeight: '21px' }}>{booking.email}</span></strong></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style={{ padding: 0, margin: 0, fontSize: '14px', lineHeight: '21px' }}>Address</td>
                                                                                                    <td style={{ padding: 0, margin: 0 }}>{booking.address}</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style={{ padding: 0, margin: 0, fontSize: '14px', lineHeight: '21px' }}>Phone<br /></td>
                                                                                                    <td style={{ padding: 0, margin: 0 }}>{booking.phone}</td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td style={{ padding: 0, margin: 0, fontSize: '14px', lineHeight: '21px' }}>Order Total:</td>
                                                                                                    <td style={{ padding: 0, margin: 0 }}><strong><span style={{ fontSize: '14px', lineHeight: '21px' }}> {new Intl.NumberFormat("vi-VN", {
                                                                                                        style: "currency",
                                                                                                        currency: "VND",
                                                                                                    }).format(booking.totalRoomPrice)}</span></strong></td>
                                                                                                </tr>
                                                                                            </tbody></table><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '21px', letterSpacing: 0, fontSize: '14px', color: '#333333' }}><br /></p></td>
                                                                                </tr>
                                                                            </tbody></table></td>
                                                                </tr>
                                                                </tbody></table></td>
                                                    </tr>
                                                </tbody></table></td>
                                    </tr>
                                    </tbody></table>
                                {/*  end table detailbill */}


                                {/* table detailroom */}
                                {booking.rooms.map((room) => (
                                    <>
                                        <table cellPadding={0} cellSpacing={0} className="es-content" align="center" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '100%', tableLayout: 'fixed !important' }}>
                                            <tbody><tr>
                                                <td align="center" style={{ padding: 0, margin: 0 }}>
                                                    <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding={0} cellSpacing={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundColor: '#FFFFFF', width: '600px' }}>
                                                        <tbody><tr>
                                                            <td align="left" style={{ margin: 0, paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px', paddingTop: '10px', backgroundPosition: 'center top' }}>
                                                                <table cellPadding={0} cellSpacing={0} className="es-left" align="left" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', float: 'left' }}>
                                                                    <tbody><tr>
                                                                        <td className="es-m-p20b" align="left" style={{ padding: 0, margin: 0, width: '154px' }}>
                                                                            <table cellPadding={0} cellSpacing={0} width="100%" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundPosition: 'left top' }} role="presentation">
                                                                                <tbody><tr>
                                                                                    <td align="center" style={{ padding: 0, margin: 0, fontSize: 0 }}><a target="_blank" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', color: '#659C35', fontSize: '14px' }}><img className="adapt-img" src={room.img} alt="" style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} width={154} /></a></td>
                                                                                </tr>
                                                                                </tbody></table></td>
                                                                    </tr>
                                                                    </tbody></table>
                                                                <table cellPadding={0} cellSpacing={0} className="es-right" align="right" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', float: 'right' }}>
                                                                    <tbody><tr>
                                                                        <td align="left" style={{ padding: 0, margin: 0, width: '386px' }}>
                                                                            <table cellPadding={0} cellSpacing={0} width="100%" role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                                <tbody><tr>
                                                                                    <td align="left" className="es-m-txt-l" style={{ padding: 0, margin: 0, paddingTop: '10px' }}><h3 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '19px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '23px', color: '#259b97' }}><strong>{room.name}</strong></h3></td>
                                                                                </tr>
                                                                                    <tr>
                                                                                        <td align="left" style={{ padding: 0, margin: 0, paddingTop: '5px' }}><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '21px', letterSpacing: 0, fontSize: '14px', color: '#333333' }}>{room.detail}</p></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" className="es-m-txt-l" style={{ padding: 0, margin: 0, paddingTop: '10px' }}><h3 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '16px', lineHeight: '23px', color: '#259b97' }}><strong><span style={{ color: '#000000' }}>Qty:</span>&nbsp;{room.quantity}</strong></h3></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" className="es-m-txt-l" style={{ padding: 0, margin: 0, paddingTop: '10px' }}><h3 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '16px',  lineHeight: '23px', color: '#259b97' }}><strong><span style={{ color: '#000000' }}>Price:</span>&nbsp; {new Intl.NumberFormat("vi-VN", {
                                                                                            style: "currency",
                                                                                            currency: "VND",
                                                                                        }).format(room.price)}</strong></h3></td>                                                                                       
                                                                                    </tr>
                                                                                    
                                                                                </tbody></table></td>
                                                                    </tr>
                                                                    </tbody></table></td>
                                                        </tr>
                                                        </tbody></table></td>
                                            </tr>
                                            </tbody></table>
                                    </>

                                ))}

                                {/*end table detailroom */}


                                {/* table total */}
                                <table cellPadding={0} cellSpacing={0} className="es-content" align="center" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '100%', tableLayout: 'fixed !important' }}>
                                    <tbody><tr>
                                        <td align="center" style={{ padding: 0, margin: 0 }}>
                                            <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding={0} cellSpacing={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundColor: '#FFFFFF', width: '600px' }}>
                                                <tbody><tr>
                                                    <td align="left" style={{ padding: 0, margin: 0, paddingRight: '20px', paddingLeft: '20px', paddingTop: '15px', backgroundPosition: 'center top' }}>
                                                        <table cellPadding={0} cellSpacing={0} width="100%" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                            <tbody><tr>
                                                                <td align="center" valign="top" style={{ padding: 0, margin: 0, width: '560px' }}>
                                                                    <table cellPadding={0} cellSpacing={0} width="100%" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', borderTop: '1px solid #cccccc', borderBottom: '1px solid #cccccc', backgroundPosition: 'center top' }} role="presentation">
                                                                        <tbody><tr>
                                                                            <td align="left" style={{ padding: 0, margin: 0, paddingTop: '10px' }}>
                                                                                <table border={0} cellSpacing={1} cellPadding={1} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '500px' }} className="cke_show_border" role="presentation">
                                                                                    <tbody><tr>
                                                                                        <td style={{ padding: 0, margin: 0 }}><h4 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '24px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '48px', color: '#259b97' }}>Order Total:</h4></td>
                                                                                        <td style={{ padding: 0, margin: 0, color: '#279EFF', fontSize: '24px' }}><strong>  {new Intl.NumberFormat("vi-VN", {
                                                                                            style: "currency",
                                                                                            currency: "VND",
                                                                                        }).format(booking.totalRoomPrice)}</strong></td>
                                                                                    </tr>
                                                                                    </tbody></table></td>
                                                                        </tr>
                                                                        </tbody></table></td>
                                                            </tr>
                                                            </tbody></table></td>
                                                </tr>
                                                    <tr>
                                                        <td align="left" style={{ margin: 0, paddingRight: '20px', paddingLeft: '20px', paddingTop: '30px', paddingBottom: '30px', backgroundPosition: 'left top' }}>{/*[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]*/}
                                                            <table className="es-left" cellSpacing={0} cellPadding={0} align="left" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', float: 'left' }}>
                                                                <tbody><tr>
                                                                    <td className="es-m-p20b" align="left" style={{ padding: 0, margin: 0, width: '270px' }}>
                                                                        <table width="100%" cellSpacing={0} cellPadding={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundPosition: 'center center' }} role="presentation">
                                                                            <tbody><tr>
                                                                                <td align="left" style={{ padding: 0, margin: 0 }}><h4 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', color: '#259b97' }}>Contact Us:</h4></td>
                                                                            </tr>
                                                                                <tr>
                                                                                    <td style={{ padding: 0, margin: 0 }}>
                                                                                        <table className="es-table-not-adapt" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                                            <tbody><tr>
                                                                                                <td valign="top" align="left" style={{ padding: 0, margin: 0, paddingBottom: '5px', paddingRight: '10px', paddingTop: '5px', fontSize: 0 }}><img src="https://qmficx.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/30981556869899567.png" alt="" width={16} style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} /></td>
                                                                                                <td align="left" style={{ padding: 0, margin: 0 }}>
                                                                                                    <table width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                                                        <tbody><tr>
                                                                                                            <td align="left" style={{ padding: 0, margin: 0 }}><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '21px', letterSpacing: 0, fontSize: '14px', color: '#333333' }}><a target="_blank" href="mailto:help@mail.com" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', color: '#333333', fontSize: '14px' }}>help@mail.com</a></p></td>
                                                                                                        </tr>
                                                                                                        </tbody></table></td>
                                                                                            </tr>
                                                                                                <tr>
                                                                                                    <td valign="top" align="left" style={{ padding: 0, margin: 0, paddingBottom: '5px', paddingRight: '10px', paddingTop: '5px', fontSize: 0 }}><img src="https://qmficx.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/58031556869792224.png" alt="" width={16} style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} /></td>
                                                                                                    <td align="left" style={{ padding: 0, margin: 0 }}>
                                                                                                        <table width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                                                            <tbody><tr>
                                                                                                                <td align="left" style={{ padding: 0, margin: 0 }}><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '21px', letterSpacing: 0, fontSize: '14px', color: '#333333' }}><a target="_blank" href style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', color: '#333333', fontSize: '14px' }}>+14155555553</a></p></td>
                                                                                                            </tr>
                                                                                                            </tbody></table></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td valign="top" align="left" style={{ padding: 0, margin: 0, paddingBottom: '5px', paddingRight: '10px', paddingTop: '5px', fontSize: 0 }}><img src="https://qmficx.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/78111556870146007.png" alt="" width={16} style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} /></td>
                                                                                                    <td align="left" style={{ padding: 0, margin: 0 }}>
                                                                                                        <table width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                                                            <tbody><tr>
                                                                                                                <td align="left" style={{ padding: 0, margin: 0 }}><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '21px', letterSpacing: 0, fontSize: '14px', color: '#333333' }}>Quy Nhơn Bình Định</p></td>
                                                                                                            </tr>
                                                                                                            </tbody></table></td>
                                                                                                </tr>
                                                                                            </tbody></table></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" style={{ padding: 0, margin: 0, paddingTop: '15px' }}><span className="es-button-border es-button-3" style={{ borderStyle: 'solid', borderColor: '#659C35', background: '#259b97', borderWidth: '0px', display: 'inline-block', borderRadius: '0px', width: 'auto' }}><a className="es-button es-button-3" target="_blank" style={{ msoStylePriority: '100 !important', textDecoration: 'none !important', msoLineHeightRule: 'exactly', color: '#FFFFFF', fontSize: '18px', padding: '10px 20px 10px 20px', display: 'inline-block', background: '#259b97', borderRadius: '0px', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', fontWeight: 'normal', fontStyle: 'normal', lineHeight: '22px !important', width: 'auto', textAlign: 'center', letterSpacing: 0, msoPaddingAlt: 0, msoBorderAlt: '10px solid #259b97' }}>GET IT NOW</a></span></td>
                                                                                </tr>
                                                                            </tbody></table></td>
                                                                </tr>
                                                                </tbody></table>
                                                            <table className="es-right" cellSpacing={0} cellPadding={0} align="right" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', float: 'right' }}>
                                                                <tbody><tr>
                                                                    <td align="left" style={{ padding: 0, margin: 0, width: '270px' }}>
                                                                        <table width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                            <tbody><tr>
                                                                                <td align="center" style={{ padding: 0, margin: 0, fontSize: 0 }}><img className="adapt-img" src="https://qmficx.stripocdn.email/content/guids/CABINET_45fbd8c6c971a605c8e5debe242aebf1/images/52821556874243897.jpg" alt="" style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} width={270} /></td>
                                                                            </tr>
                                                                            </tbody></table></td>
                                                                </tr>
                                                                </tbody></table></td>
                                                    </tr>
                                                </tbody></table></td>
                                    </tr>
                                    </tbody></table>
                                {/*end table total */}


                                {/* table sp */}
                                <table cellPadding={0} cellSpacing={0} className="es-footer" align="center" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '100%', tableLayout: 'fixed !important', backgroundColor: 'transparent', backgroundRepeat: 'repeat', backgroundPosition: 'center top' }}>
                                    <tbody><tr>
                                        <td align="center" style={{ padding: 0, margin: 0 }}>
                                            <table className="es-footer-body" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundColor: '#333333', width: '600px' }} cellSpacing={0} cellPadding={0} bgcolor="#333333" align="center">
                                                <tbody><tr>
                                                    <td style={{ padding: 0, margin: 0, paddingTop: '20px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: '#259b97' }} bgcolor="#259b97" align="left">
                                                        <table width="100%" cellSpacing={0} cellPadding={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                            <tbody><tr>
                                                                <td valign="top" align="center" style={{ padding: 0, margin: 0, width: '560px' }}>
                                                                    <table width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                        <tbody><tr>
                                                                            <td style={{ padding: 0, margin: 0 }}>
                                                                                <table className="es-menu" width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                                    <tbody><tr className="links">
                                                                                        <td style={{ margin: 0, border: 0, paddingBottom: '0px', paddingTop: '0px', paddingRight: '5px', paddingLeft: '5px' }} width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', display: 'block', color: '#ffffff', fontSize: '14px' }} >Hotel</a></td>
                                                                                        <td style={{ margin: 0, border: 0, paddingBottom: '0px', paddingTop: '0px', paddingRight: '5px', paddingLeft: '5px', borderLeft: '1px solid #ffffff' }} width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', display: 'block', color: '#ffffff', fontSize: '14px' }} >Delivery</a></td>
                                                                                        <td style={{ margin: 0, border: 0, paddingBottom: '0px', paddingTop: '0px', paddingRight: '5px', paddingLeft: '5px', borderLeft: '1px solid #ffffff' }} width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', display: 'block', color: '#ffffff', fontSize: '14px' }}>Forum</a></td>
                                                                                    </tr>
                                                                                    </tbody></table></td>
                                                                        </tr>
                                                                        </tbody></table></td>
                                                            </tr>
                                                            </tbody></table></td>
                                                </tr>
                                                    <tr>
                                                        <td style={{ margin: 0, paddingTop: '20px', paddingRight: '20px', paddingLeft: '20px', paddingBottom: '15px', backgroundColor: '#259b97' }} bgcolor="#259b97" align="left">
                                                            <table width="100%" cellSpacing={0} cellPadding={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                <tbody><tr>
                                                                    <td valign="top" align="center" style={{ padding: 0, margin: 0, width: '560px' }}>
                                                                        <table width="100%" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                            <tbody><tr>
                                                                                <td align="center" style={{ padding: 0, margin: 0, paddingBottom: '15px', fontSize: 0 }}>
                                                                                    <table className="es-table-not-adapt es-social" cellSpacing={0} cellPadding={0} role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                                                        <tbody><tr>
                                                                                            <td valign="top" align="center" style={{ padding: 0, margin: 0, paddingRight: '15px' }}><img title="Facebook" src="https://qmficx.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width={32} style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} /></td>
                                                                                            <td valign="top" align="center" style={{ padding: 0, margin: 0, paddingRight: '15px' }}><img title="X.com" src="https://qmficx.stripocdn.email/content/assets/img/social-icons/circle-white/x-circle-white.png" alt="X" width={32} style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} /></td>
                                                                                            <td valign="top" align="center" style={{ padding: 0, margin: 0 }}><img title="Youtube" src="https://qmficx.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Yt" width={32} style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} /></td>
                                                                                        </tr>
                                                                                        </tbody></table></td>
                                                                            </tr>
                                                                                <tr>
                                                                                    <td align="center" style={{ padding: 0, margin: 0 }}><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '20px', letterSpacing: 0, color: '#ffffff', fontSize: '13px' }}>You are receiving this email because you have visited our site or asked us about a regular newsletter. Make sure our messages get to your inbox (and not your bulk or junk folders).</p></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" style={{ padding: 0, margin: 0, paddingBottom: '10px', paddingTop: '15px', fontSize: 0 }}><img src="https://qmficx.stripocdn.email/content/guids/CABINET_c6d6983b8f90c1ab10065255fbabfbaf/images/15841556884046468.png" alt="" style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} width={140} /></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" style={{ padding: 0, margin: 0, paddingTop: '5px' }}><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '20px', letterSpacing: 0, color: '#ffffff', fontSize: '13px' }}><a target="_blank" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', color: '#FFFFFF', fontSize: '13px' }} >Privacy</a> | <a target="_blank" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', color: '#FFFFFF', fontSize: '13px' }} className="unsubscribe" href>Unsubscribe</a></p></td>
                                                                                </tr>
                                                                            </tbody></table></td>
                                                                </tr>
                                                                </tbody></table></td>
                                                    </tr>
                                                </tbody></table></td>
                                    </tr>
                                    </tbody></table></td>
                        </tr>
                        </tbody></table>
                ))}

            </div>
        </div>

    )
}
