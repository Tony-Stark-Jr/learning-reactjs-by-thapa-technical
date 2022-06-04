import React from 'react'
import './App.css'
import Cards from './Cards'



function App(props) {


    return (
        <>

            <h1 className='heading-style'>List of top 5 Netflix Series</h1>

            <div className="container">
                <Cards imgsrc="https://i.pinimg.com/originals/c3/79/30/c37930f12e20a00c8fa9d61b9aa46ef6.jpg"
                    category="A Netflix Original Series" seriesName="Money Heist" link="netflix.com/watch/80205342?trackId=255824129" />

                <Cards imgsrc="https://i.pinimg.com/736x/bd/9b/e9/bd9be9cfc97ba73c66f51e927f2bfcc5.jpg"
                    category="A Netflix Original Series" seriesName="Dark" link="https://www.netflix.com/watch/80114790?trackId=255824129" />

                <Cards imgsrc="https://img1.kpopmap.com/2020/03/extracurricular-netflix-poster-news-1.png"
                    category="A Netflix Original Series" seriesName="extra curricular" link="https://www.netflix.com/watch/81038343?trackId=255824129" />

                <Cards imgsrc="https://wallpaperaccess.com/full/642647.jpg"
                    category="A Netflix Original Series" seriesName="Stranger Things" link="https://www.netflix.com/watch/80077368?trackId=255824129" />

                <Cards imgsrc="https://i.pinimg.com/originals/79/0a/c1/790ac177adfb4e08a7301d1ba99dd731.png"
                    category="A Netflix Original Series" seriesName="Squid Game" link="https://www.netflix.com/watch/81262746?trackId=255824129" />
            </div>
        </>)
}

export default App