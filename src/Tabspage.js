import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TagsInput from "./TagsInput";
import BasicModal from "./Modal";
import axios from "axios";



  function TabPanel(props) {
    const { children, value, index, ...other } = props;
   

    return (
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function handleSelecetedTags(items) {
  console.log(items);
}
export default function Tabspage() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const[data,setData]= React.useState([]);
  React.useEffect(()=>{
    axios.get("./data.json")
    .then((res)=> {
      console.log('data', res.data);
      setData(res.data)
    })

    .catch(err=>console.log(err));
  },[]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ fontWeight: 700, fontSize: '16px' }} label="NOTES" {...a11yProps(0)} />
          <Tab style={{ fontWeight: 670, fontSize: '16px' }} label="TAGS" {...a11yProps(1)} />
        </Tabs>
      
      </Box>
      <TabPanel value={value} index={0}>
      <Button variant="outlined" onClick={handleOpen} style = {{ fontWeight:500 }}> 
     <strong> Add Note </strong> </Button>
      <br></br>
      <br></br>
       {
         data && data.map(item => (
         <div>
         <div style={{ fontWeight: 600 }}>{item.title}</div>
         <div style={{ marginBottom: '10px',borderBottom: '0.5px solid grey'}}>{item.description}</div>
         </div>
         ))
       }
  
     
      </TabPanel>
      <TabPanel value={value} index={1}>
     
      <TagsInput style = {{ width: '500px'}}
         selectedTags={handleSelecetedTags}
        variant="outlined"
        id="tags"
        name="tags"
        placeholder="Type in tag name" 
      />
       {/* <Button variant="outlined"><strong> Add Tag </strong> </Button> */}
      </TabPanel>
      <BasicModal open={open} handleClose={handleClose} />
    </Box>
  );
}