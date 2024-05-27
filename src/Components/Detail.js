import {React , useState, useEffect} from 'react'
import { getRoomById } from '../services/api';

function Detail({idRoom, quantity, total}) {
    const [info, setInfo] = useState({})

    const getInfo = async () => {
        const response = await getRoomById(idRoom);
        console.log(response)
        setInfo(response[0])
    }

    useEffect(() => {
        getInfo();
    }, [idRoom])

    return (
        // Logged in
        <table cellPadding={0} cellSpacing={0} className="es-content" align="center" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', width: '100%', tableLayout: 'fixed !important' }}>
            <tbody>
                <tr>
                    <td align="center" style={{ padding: 0, margin: 0 }}>
                        <table bgcolor="#ffffff" className="es-content-body" align="center" cellPadding={0} cellSpacing={0} style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundColor: '#FFFFFF', width: '600px' }}>
                            <tbody>
                                <tr>
                                    <td align="left" style={{ margin: 0, paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px', paddingTop: '10px', backgroundPosition: 'center top' }}>
                                        <table cellPadding={0} cellSpacing={0} className="es-left" align="left" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', float: 'left' }}>
                                            <tbody>
                                                <tr>
                                                    <td className="es-m-p20b" align="left" style={{ padding: 0, margin: 0, width: '154px' }}>
                                                        <table cellPadding={0} cellSpacing={0} width="100%" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', backgroundPosition: 'left top' }} role="presentation">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" style={{ padding: 0, margin: 0, fontSize: 0 }}><a target="_blank" style={{ msoLineHeightRule: 'exactly', textDecoration: 'none', color: '#659C35', fontSize: '14px' }}><img className="adapt-img" src={info.img} alt="" style={{ display: 'block', fontSize: '14px', border: 0, outline: 'none', textDecoration: 'none' }} width={154} /></a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table cellPadding={0} cellSpacing={0} className="es-right" align="right" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px', float: 'right' }}>
                                            <tbody>
                                                <tr>
                                                    <td align="left" style={{ padding: 0, margin: 0, width: '386px' }}>
                                                        <table cellPadding={0} cellSpacing={0} width="100%" role="presentation" style={{ msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', borderSpacing: '0px' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" className="es-m-txt-l" style={{ padding: 0, margin: 0, paddingTop: '10px' }}><h3 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '19px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '23px', color: '#259b97' }}><strong>{info.name}</strong></h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" style={{ padding: 0, margin: 0, paddingTop: '5px' }}><p style={{ margin: 0, msoLineHeightRule: 'exactly', fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', lineHeight: '21px', letterSpacing: 0, fontSize: '14px', color: '#333333' }}>{info.detail}</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" className="es-m-txt-l" style={{ padding: 0, margin: 0, paddingTop: '10px' }}><h3 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '16px', lineHeight: '23px', color: '#259b97' }}><strong><span style={{ color: '#000000' }}>Qty:</span>&nbsp;{quantity}</strong></h3></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" className="es-m-txt-l" style={{ padding: 0, margin: 0, paddingTop: '10px' }}><h3 style={{ margin: 0, fontFamily: 'arial, "helvetica neue", helvetica, sans-serif', msoLineHeightRule: 'exactly', letterSpacing: 0, fontSize: '16px', lineHeight: '23px', color: '#259b97' }}><strong><span style={{ color: '#000000' }}>Price:</span>&nbsp; {new Intl.NumberFormat("vi-VN", {
                                                                        style: "currency",
                                                                        currency: "VND",
                                                                    }).format(total)}</strong></h3>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Detail
