import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemText,
} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
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

function LeaderBoard(props) {

    const { classes } = props;

    const data = [
            {userName: 'Joe', highScore: 152},
            {userName: 'Jenny', highScore: 120}
        ];

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
            <div>
                <Paper className={classes.rootPaper} elevation={1}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography type="Title" component="h2" >
                                LeaderBoard
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography type="headline" component="h4" className={classes.lb_head_detail}>
                                4th
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Avatar src="images/temp.jpeg" className={classes.bigAvatar}>

                            </Avatar>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography type="headline" component="h4" className={classes.lb_head_detail}>
                                46pts
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <Button raised className={classes.button}>
                                Friends
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button raised className={classes.button}>
                                Local
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button raised className={classes.button}>
                                global
                            </Button>
                        </Grid>
                    </Grid>

                </Paper>
                <List>
                    {generateWithData(data)}
                </List>
            </div>
        </div>
    );
}

LeaderBoard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeaderBoard);