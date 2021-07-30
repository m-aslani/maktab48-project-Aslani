import React,{useState , useEffect} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WatchIcon from '@material-ui/icons/Watch';
import HeadsetIcon from '@material-ui/icons/Headset';

const SlideBarListItem = ({ category }) => {

  const [icon, setIcon] = useState(0);

  useEffect(() => {
    if(category === "گوشی همراه"){
      setIcon(1);
    }
    else if (category === "ساعت هوشمند"){
      setIcon(2);
    }
    else {
      setIcon(3);
    }
  }, [])

  return (
    <div>
      <List>
        <ListItem>
          <ListItemIcon>
            {
              icon === 1 && <PhoneAndroidIcon/>
            }
            {
              icon === 2 && <WatchIcon/>
            }
            {
              icon === 3 && <HeadsetIcon/>
            }
          </ListItemIcon>
          <ListItemText>
              <Link to={category} className="link">
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
