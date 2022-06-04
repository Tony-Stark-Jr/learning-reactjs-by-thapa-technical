import React from 'react'
import './App.css'
import Cards from './Cards'
import Sdata from './Sdata'



function App(props) {
    return (
        <>

            <h1 className='heading-style'>List of top 5 Netflix Series</h1>

            {
                Sdata.map((val) => {
                    return (
                        <Cards
                            imgsrc={val.imgsrc}
                            category={val.category}
                            seriesName={val.seriesName}
                            link={val.link}
                        />
                    )
                })
            }

        </>)
}

export default App