import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import tileData from './merchant-data';

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
    height: 500,
  },
});

function MerchantOffers(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <GridList cellHeight={180} className={classes.gridList} cols={3} >
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <Subheader component="div">Merchant Offers</Subheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton>
                  <InfoIcon color="rgba(255, 255, 255, 0.54)" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

MerchantOffers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MerchantOffers);