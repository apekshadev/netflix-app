import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { DropDownProps } from '../type';



const CustomDropDown:React.FC<DropDownProps> = ({items, icon, onchange}) => {
    const[selected, setSelected]= useState('');

    const handleOnChange=(e:any)=>{
      const {value} = e.target;
        setSelected(value);
        if(onchange){
            onchange(value);
        }
    
    };
    
    useEffect(() => {
      if (items && items.length > 0) {
          setSelected(items[0].value);
      }
  }, [items]);
  return (
    <FormControl className='border-none' variant="standard">
    <Select
      onChange={handleOnChange}
      value={selected}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      style={{color:"white"}}
    >
      <MenuItem value="">
        <em>{icon}</em>
      </MenuItem>
      {items?.map((item:any, i:number)=>{
        return(<MenuItem key={i} value={item.value}>{item.name}</MenuItem>)
      })}
    </Select>
  </FormControl>
  )
}

export default CustomDropDown;