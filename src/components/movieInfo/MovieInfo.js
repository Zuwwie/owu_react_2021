import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getInfo} from "../../services/movies.services";
import './MovieInfo.css'

function MovieInfo() {
    let {id} = useParams(`id`);

    let [info, setInfo] = useState({genres: [], poster_path: ``});

    useEffect(() => {
        getInfo(id).then(value => setInfo(value))
    }, [id]);

    return (
        <div className={'mainInfo'} style={{
            backgroundImage: `url(${'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/' + info.backdrop_path})`
        }}>
            <div className={'styleBG'}>
                {info.title &&
                <div className={'flex'}>
                    <div className={'img'}><img
                        src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + info.poster_path} alt=""/></div>
                    <div className={'right_block'}>
                        <h2>{info.title} <span>({info.release_date})</span></h2>
                        <p className={'genres'}>{(info.genres).map((value) => <span
                            key={value.id}>{value.name}</span>)}</p>
                        <p className={'tagline'}>{info.tagline}</p>
                        <p className={`description`}>Description : <br/> {info.overview} </p>
                        <p><a href={info.homepage}>{info.homepage}</a></p>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default MovieInfo;