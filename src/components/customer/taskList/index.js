import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';
import Done from 'material-ui-icons/Done';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
    textAlign: 'left',
    marginTop: '30px'
  },
  secondaryTextColor: 'red'

});

class TaskList extends React.Component {

  prepareTaskList(tasks){
    let taskList = [];
    for(let key in tasks){
      let secondaryText = "Earn "+  tasks[key].score+"pts";
      let taskColor = tasks[key].isCompleted == true ? "#228B22":"#2196f3" ;
      console.log( tasks[key].isCompleted);
      taskList.push(<div>
        <Link to="gameCam" style={{textDecoration: 'none'}}>
        <ListItem button>
          <Avatar style={{backgroundColor: taskColor}}>
            <Done/>
          </Avatar>
          <ListItemText primary={tasks[key].name} secondary={secondaryText}/>
        </ListItem>
      </Link>
        <Divider/>
      </div>);

    }
    return taskList;

  }

  filterTaskList(user, levels){
    const tasks = levels[user.level.id].tasks;
    for(let i in user.level){
      if(user.level[i] == 'true')
        tasks[i].isCompleted = true;
    }
    return tasks;

  }

  render() {
    const {classes, levels, userInfo} = this.props;
    if(!(levels[1] && Object.keys(userInfo).length)){
      return(
        <CircularProgress className={classes.progress} size={50} />);
    }

    const taskList = this.prepareTaskList(this.filterTaskList(userInfo, levels));
    const titleStyle = {
      width: "100%",
      textAlign: "center",
    };
    return (
      <div className={classes.root}>
        <div style={titleStyle}>
          <Typography
            type="headline" gutterBottom>Rewards Hunt</Typography>
        </div>
        <List>
          <Divider/>
          {taskList}
        </List>
      </div>
    );
  }
}

export default connect(state=>state)(withStyles(styles)(TaskList));