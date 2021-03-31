import React from 'react'


export const Contributors = ({ data }) => {
    return (
        <div className='contributors--container'>
            <h2 className='contributors-h2'>Contributors</h2>
            {
                data !== undefined &&
                data.map((item, index) => {
                    return (
                        <div key={index} className='d-flex flex-column justify-content-center align-content-center text-center border-1 border-white'>
                                <img className='user-pic d-block mx-auto' src={item.avatar_url} alt='user-pic' />
                                <span className='text-user--info'>{item.contributions} contributions</span>
                                <span className=''><a className='' href={item.html_url}>Contributor's Github</a></span>
                                <p className='text-user--info'>Github User</p>
                                <p className='text-user--info'>{item.login}</p>
                        </div>

                    );
                })
            }
        </div>
    )
}
