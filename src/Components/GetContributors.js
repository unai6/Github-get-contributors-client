import React, { useState, useEffect } from 'react';
import { getContributors } from '../api/apiCalls';
import {Link} from 'react-router-dom';
import '../CSS/appContainer.css';
import '../CSS/getContributors.css';
import '../CSS/form-css.css'

export const GetContributors = () => {

    const [data, setData] = useState([]);
    const [owner, setOwner] = useState('');
    const [repo, setRepo] = useState('');
    const [infoSent, setInfoSent] = useState(false);
   

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await getContributors();
                if(!result.data.message) {
                    setInfoSent(true)
                    setData(result.data);
                } else{
                    setData([...result])
                    setInfoSent(false)
                }
                console.log(result)
            } catch(error){
                console.log(error)
                
            }
        }
        fetchData()
    }, []);

    console.log(data)
    return (
        <div className='app-container'>
            {
                !infoSent ?
                    <div>
                    <h2 className='contributors-h2'>Search Github Repository</h2>
                        <form className='form'>
                            <input
                                value={owner}
                                onChange={e => setOwner(e.target.value)}
                                className='form-input'
                                placeholder="Type Github Repository's owner"
                                type="text"
                                name="owner"
                                required
                            />
                            <input
                                value={repo}
                                onChange={e => setRepo(e.target.value)}
                                className='form-input'
                                placeholder="Type  Github Repository's name"
                                type="text"
                                name="repo"
                                required
                            />
                           
        
                            <button className='btn-search'>Search Contributors</button>
                        </form>
                    </div>

                    :

                    <div>
                    <Link><button className='back-btn' onClick={() => setInfoSent(false)}>go back</button></Link>
                        <h2 className='contributors-h2'>Contributors</h2>
                        {

                            data !== undefined ?

                                data.map((item, index) => {
                                    return (
                                        <div  key={index} className='get-contr-container'>
                                            <div className='get-contr-card'>
                                                <img className='user-pic' src={item.avatar_url} alt='user-pic'/>
                                                <span className='contributions'>{item.contributions} contributions</span>
                                                <span className='contributor-git'><a className='contributor-git' href={`${item.html_url}`}>Contributor's Github</a></span>
                                                <p className='contributor-p'>Github User</p>
                                                <p className='p-child'>{item.login}</p>
                                            </div>
                                        </div>

                                    );
                                })

                                :

                                null
                        }
                    </div>
            }
        </div>
    )
}
