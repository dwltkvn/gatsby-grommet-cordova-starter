import React from "react";
import PropTypes from "prop-types";

// Grommet
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Title from 'grommet/components/Title';

// Icons
import ActionsIcon from "grommet/components/icons/base/Actions";

class AppHeader extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Title>Sample Title</Title>
        <Box flex={true} justify='end' direction='row' responsive={false}>
          <Search inline={true} fill={true} size='medium' placeHolder='Search' dropAlign={{"right": "right"}} />
          <Menu icon={<ActionsIcon />} dropAlign={{"right": "right"}}>
            <Anchor href='#' className='active'>First</Anchor>
            <Anchor href='#'>Second</Anchor>
            <Anchor href='#'>Third</Anchor>
          </Menu>
        </Box>
      </Header>
    );
  }
}

export default (AppHeader);
