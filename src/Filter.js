import React from 'react';
import Select from 'react-select';

const Filter = ({ filter, labels, onFilterSelect }) => {
    console.log('filter val: ' + filter);
    const options = [{ value: '', label: '-- No filter --' }, ...labels.map((label) => ({ value: label, label }))];
    const currentValue = options.find((option) => option.value === filter);
    return (
        <div className='filter'>
            <label>
                Select Label to Filter by
                <Select
                    className='label-select'
                    defaultValue={options[0]}
                    value={currentValue}
                    onChange={onFilterSelect}
                    options={options}
                    isClearable
                />
            </label>
        </div>
    );
};
export default Filter;
