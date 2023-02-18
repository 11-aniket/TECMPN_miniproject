import React from 'react'

function HeaderDoctors({ setIsAdding }) {
    return (
        <header>
            <h1>Orphanage Home Center</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Doctors</button>
            </div>
        </header>
    )
}

export default HeaderDoctors;