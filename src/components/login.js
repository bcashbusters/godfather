import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '60%',
  }
});


class LoginForm extends React.Component {
  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const titleContainerStyle = {
        width: '100%',
        marginTop: '30px'
    };

    return (
      <form className={classes.container} noValidate autoComplete="off">
         <div style={titleContainerStyle}>
         <Typography type="headline" className='title' gutterBottom>Login</Typography>
         </div>
        <TextField
          id="username"
          label="User Name"
          className={classes.textField}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);