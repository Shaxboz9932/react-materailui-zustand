import { AppBar, Toolbar, Typography, styled, InputBase, Box } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DeviceHubIcon from '@mui/icons-material/DeviceHub'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

function Navbar() {

    const [open, setOpen] = useState(false)

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const Search =styled('div')(({theme}) => ({
        backgroundColor: 'white',
        padding: '0 10px',
        borderRadius: theme.shape.borderRadius,
        width: '40%',
        justifyContent: 'space-between',
        display: 'flex'
    }))

    const Icons =styled(Box)(({theme}) => ({
        display: 'none',
        gap: '20px',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    }))

    const UserBox =styled(Box)(({theme}) => ({
        display: 'none',
        gap: '10px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        }
    }))


    return (
        <AppBar>
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs: 'none', sm: 'block'}}}>
                    Shakhboz
                </Typography>
                <DeviceHubIcon sx={{display: {xs: 'block', sm: 'none'}}}/>
                <Search>
                    <InputBase placeholder="Search..."/>
                </Search>
                <Icons>
                    <Badge color='error' badgeContent={4}>
                        <MailIcon/>
                    </Badge>
                    <Badge color='error' badgeContent={2}>
                        <NotificationsIcon/>
                    </Badge>
                    <Avatar onClick={() => setOpen(true)} width={30} heigth={30} src='https://avatars.mds.yandex.net/i?id=96ac6e7adad5a81c28d7e50ec18abf3893ee02fe-9856853-images-thumbs&n=13.jpg'/>    
                </Icons>
                <UserBox onClick={() => setOpen(true)}>
                    <Avatar width={30} heigth={30} src='https://avatars.mds.yandex.net/i?id=96ac6e7adad5a81c28d7e50ec18abf3893ee02fe-9856853-images-thumbs&n=13.jpg'/>    
                    <Typography>John Doe</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="basic-menu"
                // anchorEl={anchorEl}
                anchorOrigin = {{
                    vertical: 'top',
                    horizontal: "right"
                }}
                transformOrigin = {{
                    vertical: 'top',
                    horizontal: "right"
                }}
                open={open}
                onClose={() => setOpen(false)}
                // onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
