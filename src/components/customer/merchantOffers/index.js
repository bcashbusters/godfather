import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import { connect } from 'react-redux';
import { addToScore } from '../../../actions/scoreActions';
import { openOffers, closeOffers } from '../../../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 600,
  },
});

class MerchantOffers extends React.Component {
  componentDidMount() {
    openOffers();
  }

  componentWillUnMount() {
    closeOffers();
  }

  render() {
    const { offers } = this.props;

    console.log(offers);
    
    const offerTile = (key, tile) =>
      <GridListTile key={key} cols={tile.cols || 1}>
        <img src={tile.img} alt={tile.title} />
        <GridListTileBar
          title={tile.title}
          subtitle={<span>by: {tile.author}</span>}
          actionIcon={
            <IconButton onClick={() => this.props.addScore(10)
            }>
              <InfoIcon color="rgba(255, 255, 255, 0.54)" />
            </IconButton>
          }
        />
      </GridListTile>;

    return (
      <div>
        <GridList cellHeight={180} cols={2} >
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Subheader component="div">Merchant Offers</Subheader>
          </GridListTile>
          {Object.keys(offers).map(key => offerTile(key, offers[key]))}
        </GridList>
      </div>
    );
  }
}

MerchantOffers.propTypes = {
  classes: PropTypes.object.isRequired,
  addScore: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    addScore: (value) => {
      dispatch(addToScore(value))
    }
  };
};


export default connect(state => state, mapDispatchToProps)(withStyles(styles)(MerchantOffers));
