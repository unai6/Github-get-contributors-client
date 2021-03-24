import React, { useState } from 'react';
import axios from 'axios';
import { Contributors } from './Contributors';
import '../CSS/appContainer.css';
import '../CSS/getContributors.css';
import '../CSS/form-css.css'


export const GetContributors = () => {

    const [data, setData] = useState([]);
    const [owner, setOwner] = useState('');
    const [repo, setRepo] = useState('');
    const [infoSent, setInfoSent] = useState(false);
    const [error, setError] = useState(null);

    const getContributors = async () => {
        try {
            setInfoSent(true);
            const result = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`);
            setData(result.data);
        } catch (error) {
            setInfoSent(false)
            setError(true)
        }
    };

    return (
        <div className='app-container'>
            {
                <>
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
                            {error && <p className='text-danger fw-bold'>This repo or owner does not exist </p>}
                            <button type='button' className='btn-search' onClick={() => getContributors()}>Search Contributors</button>
                        </form>
                    </div>
                    { infoSent && <Contributors data={data} />}
                </>
            }
        </div>
    )
}
