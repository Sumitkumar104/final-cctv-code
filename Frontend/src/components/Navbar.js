import React from 'react'
import { AppBar, Toolbar, styled, Button, Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { LivePage } from './Livepage'
import { faClockRotateLeft, faFolder, faForward, faTriangleExclamation, faTv, faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link, Outlet } from 'react-router-dom'
let Appbar = styled(AppBar)`
  --tw-bg-opacity: 2;
    background-color: rgb(126 34 206 / var(--tw-bg-opacity));
  box-shadow:none;
  padding:0;
  position:sticky;
  height:70px;
`;

let style = {
   textAlign: "center",
   fontSize: "0.8rem",
   fontWeight: "100",
};
let style2 = {
   borderLeft: "1px solid 	#717171",
   padding: "10px",
   left: "-10px",
};
let style3 = {
   borderLeft: "1px solid 	#717171",
   borderRight: "1px solid #717171",
   padding: "10px",
};
const Navbar = ({active}) => {
   return (
      <div>
         <Appbar>
            <Toolbar>
            <Link to="/Livepage">
               <Box sx={{paddingRight: "10px", paddingLeft: "-5px"}} >
                  <Button><FontAwesomeIcon icon={faTv} size="xl" style={{ color: "#FFFFFF", opacity: active === 1 ? "1": "0.6" }}/></Button>
                  <Box sx={style} style={{ color: "#FFFFFF", opacity: active === 1 ? "1": "0.6" }}>Live</Box>
               </Box>
               </Link>
               <Box sx={style2}>
                  <Button><FontAwesomeIcon icon={faForward} size="xl" style={{ color: "#FFFFFF", opacity: active === 2 ? "1": "0.6" }} /></Button>
                  <Box sx={style} style={{ color: "#FFFFFF", opacity: active === 2 ? "1": "0.6" }}>Playback</Box>
               </Box>
               <Box sx={style2}>
                  <Button ><FontAwesomeIcon icon={faFolder} size="xl" style={{ color: "#FFFFFF", opacity: active === 3 ? "1": "0.6" }} /></Button>
                  <Box sx={style} style={{ color: "#FFFFFF", opacity: active === 3 ? "1": "0.6" }}>Folders</Box>
               </Box>
               <Link to="/Videoupload">
               <Box sx={style2}>
                  <Button ><FontAwesomeIcon icon={faUpload} size="xl" style={{ color: "#FFFFFF", opacity: active === 4 ? "1": "0.6" }} /></Button>
                  <Box sx={style} style={{ color: "#FFFFFF", opacity: active === 4 ? "1": "0.6" }}>Uploads</Box>
               </Box>
               </Link>
               <Box sx={style2}>
                  <Button><FontAwesomeIcon icon={faClockRotateLeft} size="xl" style={{ color: "#FFFFFF", opacity: active === 5 ? "1": "0.6" }} /></Button>
                  <Box sx={style} style={{ color: "#FFFFFF", opacity: active === 5 ? "1": "0.6" }}>History</Box>
               </Box>
               <Box sx={style3}>
                  <Button ><FontAwesomeIcon icon={faTriangleExclamation} size="xl" style={{ color: "#FFFFFF", opacity: active === 6 ? "1": "0.6" }} /></Button>
                  <Box sx={style} style={{ color: "#FFFFFF", opacity: active === 6 ? "1": "0.6" }}>Anomaly</Box>
               </Box>
            </Toolbar>
         </Appbar>
         <Outlet />
      </div>
   )
}

export default Navbar
