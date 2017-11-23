import React from 'react';

import { withStyles } from 'material-ui/styles';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui-icons/AccountCircle';
import './rankings.css';


const styles = theme => ({

    lb_rank: {
        margin : `0 10px 0 0`,
    }

});

function rankings(props) {

    const { classes } = props;
    const { actData } = props;

    function generateWithData(data){

        let elements = [];
        data.map((dt,index) => {
           elements.push(
               <ListItem button divider className="anim_list" key={dt.userName} style={getAnimationdelay(index)}>
                   <div className={classes.lb_rank}>{index+1}</div>

                   <ListItemAvatar>
                       <Avatar>
                           <AccountCircle />
                       </Avatar>
                   </ListItemAvatar>
                   <ListItemText
                       primary={dt.userName}
                       secondary={dt.highScore}
                   />
               </ListItem>
           )
        });

        return elements;
    }

  function getAnimationdelay(n) {
      return { animationDelay : 200 * (n+1) + 'ms'};
   }

    return (
        <div className="LeaderBoard">
              <List>
                  {generateWithData(actData)}
              </List>
        </div>
    );
}

export default withStyles(styles)(rankings);