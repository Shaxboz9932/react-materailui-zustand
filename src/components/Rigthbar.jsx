import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

function Rigthbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" }}} >
      <Box position="fixed">
        <Typography variant="h6" fontFamily={100} m={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="John Doe" src="https://avatars.mds.yandex.net/i?id=7bfd172b8432905ec2dea338ff5b155f5b5c5789-10696775-images-thumbs&n=13.jpg"/>
          <Avatar alt="Ivan" src='https://avatars.mds.yandex.net/i?id=cc42248dc705dc5254754781e06df97c4aa9d5bb-8425660-images-thumbs&n=13.jpg'/>
          <Avatar alt="Sarverbek" src="https://avatars.mds.yandex.net/i?id=0210ac53b02d557e2d8914524dd122865e9a9e11-9095341-images-thumbs&n=13.jpg"/>
          <Avatar alt="Xander" src="https://avatars.mds.yandex.net/i?id=a522f885316f09b6ec6e52f94ed833568148f439-7030343-images-thumbs&n=13.jpg"/>
          <Avatar alt="Wayne" src="https://avatars.mds.yandex.net/i?id=e067be6e45a7d3ad71caba1af5676268738249b4-8312318-images-thumbs&n=13.jpg"/>
          <Avatar alt="Phoenix" src="https://avatars.mds.yandex.net/i?id=8ee76ca82ea93b37d4aea174fbb131fe2e52786b-9229153-images-thumbs&n=13.jpg"/>
          <Avatar alt="Eric" src="https://avatars.mds.yandex.net/i?id=b0cda853070bd50d948ce025bf71d6866afd382d-12512933-images-thumbs&n=13.jpg"/>
        </AvatarGroup>
        <Typography variant="h6" m={2}>Latest Posts</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://avatars.mds.yandex.net/i?id=a370c7a541c162c801c9eb41d016cf81b583fbd5-8326073-images-thumbs&n=13.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://avatars.mds.yandex.net/i?id=f6419d2d294cab1c91e9e3f5aaf8c74cfb1fe4ce-11402271-images-thumbs&n=13.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://avatars.mds.yandex.net/i?id=ede8c66c6c97140a3039361a9f8a61d40173844c-10636921-images-thumbs&n=13.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://avatars.mds.yandex.net/i?id=a129b50e80fb503343d665c47f783f2682a0d789-12569941-images-thumbs&n=13.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rigthbar;
