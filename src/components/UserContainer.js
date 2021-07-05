import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const UserContainer = ({ fetchUsers, userData }) => {

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? <h2>Loading..</h2> : userData.error ? <h2>{userData.error}</h2> : (
            <div className="cards">{userData && userData.users && userData.users.map(user => 
                <>
                
             <div className='card-front'>
                    <img src={user.img_url} alt='Character' />
                </div>
                <div className='card-back'>
                    <h1>{user.name}</h1>
                    <ul>
                        <li><strong>Character Name:</strong> {user.name}</li>
                        <li><strong>Species:</strong> {user.species}</li>
                        <li><strong>Origin:</strong> {user.origin}</li>
                        <li><strong>Status:</strong> {user.status}</li>
                        <li><strong>Ability:</strong> {user.abilities[0]}</li>
                    </ul>
                </div>

                </>
            )}</div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
