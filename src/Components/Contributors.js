import React from 'react'


export const Contributors = ({ data }) => {
    return (
        <div>
            <h2 className='contributors-h2'>Contributors</h2>
            {
                data !== undefined &&
                data.map((item, index) => {
                    return (
                        <div key={index} className='get-contr-container'>
                            <div className='get-contr-card'>
                                <img className='user-pic' src={item.avatar_url} alt='user-pic' />
                                <span className='contributions'>{item.contributions} contributions</span>
                                <span className='contributor-git'><a className='contributor-git' href={`${item.html_url}`}>Contributor's Github</a></span>
                                <p className='contributor-p'>Github User</p>
                                <p className='p-child'>{item.login}</p>
                            </div>
                        </div>

                    );
                })
            }
        </div>
    )
}
