import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';


const styles = theme => ({
    rootPaper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        background:`#2196f3`,
        textAlign:`-webkit-center`,
        color:`white`
    }),
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        background: theme.palette.background.paper,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    lb_rank: {
        margin : `0 10px 0 0`,
    },
    lb_avatar: {
        height:`90px`,
    },
    bigAvatar: {
        width: 80,
        height: 80,
    },
    lb_head_detail: {
        lineHeight: `80px`,
        color:`white`
    },
    lb_head_buttons: {
        padding: 8,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius:`4px`,
        cursor:`pointer`
    },
    button: {
        background:`white`,
        width: `100%`,
    }
});

function rankings(props) {

    const { classes } = props;
    const { actData } = props;

    function generateWithData(data){

        let elements = [];
        data.map((dt,index) => {
           elements.push(
               <ListItem button divider>
                   <div className={classes.lb_rank}>{index+1}</div>

                   <ListItemAvatar>
                       <Avatar>
                           <FolderIcon />
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

    return (
        <div className="LeaderBoard">
              <List>
                  {generateWithData(actData)}
              </List>
        </div>
    );
}

rankings.propTypes = {
    data: PropTypes.object.isRequired,
};

export default withStyles(styles)(rankings);