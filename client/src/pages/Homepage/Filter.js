import * as React from 'react';

import Title from './Title';
import { Box, Button, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, Switch } from '@mui/material';

const Filter = ({onFilterSubmit}) => {
  const [ formData, setFormData ] = React.useState({
    province: "NL",
    price: 5000,
    availability: 3,
    breed_type: "Poodle",
    ckc_registered: false
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterSubmit(formData)
  };

  const handleInputChange = (e, formId) => {
    const updatedFormData = {...formData}
    const value = e.target.value
    updatedFormData[formId] = value
    setFormData(updatedFormData)
  }

  const handleCKCChange = () => {
    
    const updatedFormData = {...formData}
    updatedFormData.ckc_registered = !updatedFormData.ckc_registered

    setFormData(updatedFormData)
  }


  return (
    <React.Fragment>
      <Title>Filter</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

          <InputLabel id="province-label">Province</InputLabel>
          <Select id="province" labelId="province-label" name="province" value={formData.province} onChange={(e)=>{handleInputChange(e, 'province')}}>
            <MenuItem value={"NL"}>Newfoundland and Labrador</MenuItem>
            <MenuItem value={"ON"}>Ontario</MenuItem>
            <MenuItem value={"BC"}>British Columbia</MenuItem>
          </Select>

          <br/>
          <br/>

          <InputLabel >Price</InputLabel>
          <div style={{marginLeft:"15px", marginRight:"15px"}}>
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} max={5000} value={formData.price}  onChange={(e)=>{handleInputChange(e, 'price')}} />
          </div>

          <br/>
          <br/>
          
          <InputLabel >Availability</InputLabel>
          <div style={{marginLeft:"15px", marginRight:"15px"}}>
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" min={0} max={3} step={0.5} value={formData.availability} onChange={(e)=>{handleInputChange(e, 'availability')}}/>
          </div>


          <br/>
          <br/>

          <InputLabel id="breed-label">Breed Type</InputLabel>
          <Select id="breed" labelId="breed-label" name="breed" value={formData.breed_type} onChange={(e)=>{handleInputChange(e, 'breed_type')}}>
            <MenuItem value={"Poodle"}>Poodle</MenuItem>
            <MenuItem value={"Husky"}>Husky</MenuItem>
            <MenuItem value={"German"}>German Shephard</MenuItem>
          </Select>

          <br/>
          <br/>

          <FormGroup style={{marginLeft:"15px"}}>
            <FormControlLabel control={<Switch value={formData.ckc_registered} onChange={(e)=>{handleCKCChange()}}/>} label="CKC Registered"/>
          </FormGroup>

          <Button

            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Search
          </Button>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default Filter