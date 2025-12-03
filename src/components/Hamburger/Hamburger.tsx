import useMediaQuery from '@mui/material/useMediaQuery'; 
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuContentsType{
  menuContents: string[];
}

const Hamburger = (props: MenuContentsType) => {
    const menuContents: Array<string> = props.menuContents;
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md')); 

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };
  return (
    <div>
      {isMobileView && (
        <Button
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {
          menuContents.map((elem) => (
            <MenuItem onClick={handleClose}>{elem}</MenuItem>
          ))
        }
      </Menu>

      {/* You would typically render your full desktop navigation 
        when the view is NOT mobile: 
      */}
      {!isMobileView && (
          <nav>
              <Button>About</Button>
              <Button>Experience</Button>
              <Button>Example Projects</Button>
              <Button>CV</Button>
              <Button>Contact</Button>
          </nav>
      )}

    </div>
  )
}
export default Hamburger