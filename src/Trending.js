import { useEffect, useState } from "react"
import { Card } from 'primereact/card';
import axios from 'axios'
import MiniChart from './MiniChart'
import Marquee from "react-fast-marquee";


const Trending = (props) => {

    const trenddata = () => {
        let content = []

        for (const key in props.chart) {
            let percentchange = (((props.chart[key].slice(-1)[0] - props.chart[key][0]) / props.chart[key][0]) * 100).toFixed(1)
            let color = (props.chart[key][0] > props.chart[key].slice(-1)[0]) ? '#FF0000' : '#008000'
            let currentprice = (props.chart[key].slice(-1)[0] > 1) ? props.chart[key].slice(-1)[0].toFixed(2) : props.chart[key].slice(-1)[0].toFixed(7)
            content.push(
                <>
                    
                    <div key={key} className='ps-custom-box-tending'>
                        <div className='grid p-0 m-0'>
                            <div className='col-2'>
                                <img style={{ width: '40px' }} src={props.data[key]?.small}onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                            </div>
                            <div className='col-7'>
                                <div className='pl-1 font-medium'>{props.data[key]?.name}</div>
                                <div className='pl-1'>${currentprice}</div>
                            </div>
                            <div className='col-3 p-0'>
                                <p className={(props.chart[key][0] > props.chart[key].slice(-1)[0]) ? "textred pt-2" : "textgreen pt-2"}>{percentchange}%</p>

                            </div>
                        </div>

                        <div class="col-12">
                            <MiniChart data={props.chart[key]} chartcolor={color} />
                        </div>

                    </div>

                    
                </>



            )
        }

        return content


    }

    return (

        <>

            <div className="p-grid p-0 m-0">
                <div className="p-col-12">
                    <div className='ps-custom-box-5'>
                        <div className="mb-3">
                        <strong className='text-2xl mb-3'>Trending</strong>
                        </div>
                        <Marquee pauseOnHover gradient={false}>
                            {trenddata()}
                        </Marquee>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Trending;