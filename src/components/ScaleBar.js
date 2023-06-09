import React, {useState} from 'react'

const ScaleBar = (props) => {
    const [max, setMax] = props.maxState;
    const [min, setMin] = props.minState;
    const [value, setValue] = useState(50);
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className='flex flex-col m-4'>
            <input
                className="w-9/12 h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer dark:bg-slate-600 mx-auto my-6"
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
            <p className='text-slate-900 dark:text-slate-50 my-6'>Value: {value}</p>
        </div>
    )
}

export default ScaleBar