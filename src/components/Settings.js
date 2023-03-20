import React from 'react'

const Settings = (props) => {
    const [max, setMax] = props.maxState;
    const [min, setMin] = props.minState;
    const handleMax = (event) => {
        setMax(Number(event.target.value));
    }
    const handleMin = (event) => {
        setMin(Number(event.target.value));
    }
    return (
        <div className='flex flex-row p-2 bg-slate-50 dark:bg-slate-700 w-5/6 mx-auto my-6 rounded shadow-md justify-evenly'>
            <label className='m-2'>
                Min
                <input className='dark:bg-slate-500 w-20 mx-3' id='min' type={'text'} onChange={handleMin} />
            </label>
            <label className='m-2'>
                Max
                <input className='dark:bg-slate-500 w-20 mx-3' id='max' type={'text'} onChange={handleMax} />
            </label>
        </div>
    )
}

export default Settings