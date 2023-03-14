import React from 'react'

function HeaderOrphans({ setIsAdding }) {
    return (
        <header>
            <h1 className='bg-gray-900 text-white w-full'>Orphanage Home Center</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button border-radius: 40px'>Add Orphans</button>
            </div>
        </header>
    )
}

export default HeaderOrphans;