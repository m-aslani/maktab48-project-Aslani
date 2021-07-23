import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";

const SlideBarListItem = ({ category }) => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon />
          </ListItemIcon>
          <ListItemText>
              <Link to={category}>
            <h3>
              <strong>{category}</strong>
            </h3>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>سامسونگ</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>اپل</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>شیائومی</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>هوآوی</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};
export default SlideBarListItem;
