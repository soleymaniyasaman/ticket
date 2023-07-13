import React from 'react'
import Select from 'react-select'
import './style.scss'

function CustomSelect({ options, value, onChange }) {
    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : ""
    }
    const customStyles = {
        // Define styles here
        container: (provided, state) => ({
            ...provided,
            marginBottom: '10px',

        }),
        control: (provided, state) => ({
            ...provided,
            border: '1px solid gray',
            borderRadius: '.375rem',
            boxShadow: state.isFocused ? '0 0 0 2px lightblue' : 'none',

        }),
        option: (provided, state) => ({
            ...provided,
            color: '#212529'
        })
    };
    return (
        <div>
            <Select
                options={options}
                value={defaultValue(options, value)}
                onChange={value => onChange(value)}
                styles={customStyles}
            />
        </div>
    )
}

export default CustomSelect