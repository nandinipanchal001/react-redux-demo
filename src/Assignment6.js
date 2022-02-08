import React, { useState } from 'react'
import axios from 'axios'
import Loader from './components/Loader'  

const Assignment6 = () => {
    const [LeaguesState, setLeagues] = useState({
        LegueData:[],
        loadingLegueData:false
    })

    const [SportState, setSport] = useState({
        SportsData:[],
        loadingSportData : false
    })

    const handleClickLeague = async () => {
        setSport({
            SportsData:[]
        })
        setLeagues({
            LegueData:[],
            loadingLegueData:true
        })
        await axios.get('https://www.thesportsdb.com/api/v1/json/2/all_leagues.php')
            .then(res => {
                const dataAns = res.data
                setLeagues({ LegueData: [dataAns] ,loadingLegueData:false})

            })
            .catch(err => {
                console.error(err)
                setLeagues({LegueData: [],loadingLegueData:false})
            })
    }

    const clearResult = () => {
        setLeagues({
            LegueData:[]
        })
        setSport({
            SportsData:[]
        })
    }

    const handleClickSport = async() => {
        setLeagues({
            LegueData:[]
        })
        setSport({
            SportsData:[],
            loadingSportData:true
        })
        await axios.get('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
            .then(res => {
                console.log(res.data)
                setSport({SportsData:[res.data],loadingSportData:false})
            })
            .catch(err => {
                console.error(err)
                setSport({SportsData:[],loadingSportData:false})
            })

    }

    const {LegueData,loadingLegueData} = LeaguesState
    const {SportsData,loadingSportData} = SportState
    return (
        <>
            
            <div style={{ "width": "200px", "float": "right" }}>
                <button onClick={clearResult}>Clear Results</button>
            </div>
            <div>
                <button onClick={handleClickLeague}>Leagues</button>
                <button onClick={handleClickSport}>Sports</button>
                <div style={{"margin":"0 auto","width":"300px"}}>{loadingLegueData || loadingSportData ? <Loader/> :null}</div>
                {
                    LegueData.map((league, index) => {
                        return (
                            league.leagues.map((actualData) => {
                                return (
                                    <ul key={index}>
                                        <li>{actualData.strLeague}</li>
                                    </ul>
                                )

                            })
                        )
                    })
                }

                {
                    SportsData.map((sport, index) => {
                        return (
                            sport.sports.map((actualData) => {
                                return (
                                    <ul key={index}>
                                        <li>{actualData.strSport}</li>
                                    </ul>
                                )
                            })
                        )
                    })
                }
            </div>
          


        </>)
}

export default Assignment6;