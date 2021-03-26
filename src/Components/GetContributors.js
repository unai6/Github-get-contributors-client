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
    const [errorMessage, setErrorMessage] = useState('');

    const getContributors = async () => {
        try {
            setInfoSent(true);
            setError(false);
            const result = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`);
            setData(result.data);
        } catch (error) {
            setInfoSent(false);
            setError(true);
            if (error.response) {
                if(error.response.status === 403){
                    setErrorMessage('You have exceeded the amount of API calls')
                } else{
                    setErrorMessage(`The repository or owner you are looking for does not exist`)
                }
            } else if (error.request) {
                setErrorMessage(`There has been an error while retrieving data, please try again.`)
            } else {
                setErrorMessage(error)
            }
        }
    };

    return (
        <main className='app-container'>
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
                        {error && <p className='text-danger fw-bold'>{errorMessage}</p>}
                        <button type='button' className='btn-search' onClick={() => getContributors()}>Search Contributors</button>
                    </form>
                    {infoSent && <Contributors data={data} />}
        </main>
    )
}
