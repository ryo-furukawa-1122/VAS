import React, {useState} from 'react'

const ScaleBar = () => {
    const [value, setValue] = useState(50);
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className='m-auto'>
            <input
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
            />
            <p className='text-slate-900 dark:text-slate-50'>{value}</p>
        </div>
    )
}

export default ScaleBar