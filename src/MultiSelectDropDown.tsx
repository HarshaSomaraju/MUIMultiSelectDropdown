import React, { useEffect } from 'react';
import { Select, MenuItem, Checkbox, ListItemText, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

interface PropsTypes {
    name: string,
    options: string[];
    selectedValues: string[];
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
    onChange?: (event: SelectChangeEvent<string[]>) => void;
    classNames?: string;
    required?: boolean;
}


const MultiSelectDropdown: React.FC<PropsTypes> = ({ name, options, selectedValues, setSelectedValues, onChange, classNames, required }) => {
    // const [selectedValues, setSelectedValues] = useState<string[]>([]);
    options = ["select all", ...options]

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const isAllSelectedPreviously = selectedValues.indexOf("select all") > -1;
        const isAllSelectedNow = event.target.value.indexOf("select all") > -1;
        if (!isAllSelectedPreviously && isAllSelectedNow) {
            console.log(event.currentTarget);
            setSelectedValues(options);
        }
        else if (isAllSelectedPreviously && !isAllSelectedNow) {
            setSelectedValues([]);
        }
        else {
            setSelectedValues(event.target.value as string[]);
        }

        // Calling onChange function
        if (onChange) {
            onChange(event);
        }
    };

    useEffect(() => {
        setSelectedValues([]);
    }, [setSelectedValues])

    return (
        <FormControl
            required={required ? required : false}
            fullWidth
            className={classNames ? classNames : ""}
        >
            <InputLabel>{name}</InputLabel>
            <Select
                // unselectable='on'
                // sx={{padding: ".375rem 2.25rem .375rem .75rem"}}
                // size='small'
                MenuProps={{ autoFocus: false }}
                multiple
                value={selectedValues}
                onChange={handleChange}
                renderValue={(selected: string[]) => (
                    <div>
                        {selected.map((value) => (
                            <span key={value}>
                                {value === "select all" ? "" : `${value},`}
                            </span>
                        ))}
                    </div>
                )}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        <Checkbox checked={selectedValues.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MultiSelectDropdown;
