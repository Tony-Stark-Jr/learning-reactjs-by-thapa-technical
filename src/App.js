import React from 'react'
import './App.css'
import Cards from './Cards'
import Sdata from './Sdata'



function App(props) {
    return (
        <>

            <h1 className='heading-style'>List of top 5 Netflix Series</h1>
            <div className="container">

                {
                    Sdata.map((val) => {
                        return (

                            < Cards
                                key={val.id}
                                imgsrc={val.imgsrc}
                                category={val.category}
                                seriesName={val.seriesName}
                                link={val.link}
                            />
                        )
                    })
                }
            </div>

        </>)
}

export default App