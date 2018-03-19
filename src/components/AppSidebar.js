import React from "react";
import PropTypes from "prop-types";

// Grommet
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

// Icons
import UserIcon from "grommet/components/icons/base/User";

class AppSidebar extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sidebar colorIndex='neutral-1' fixed={true}>
        <Header pad='medium' justify='between'>
          <Title>Title</Title>
        </Header>
        <Box flex='grow' justify='start'>
          <Menu primary={true}>
            <Anchor href='#' className='active'>First</Anchor>
            <Anchor href='#'>Second</Anchor>
            <Anchor href='#'>Third</Anchor>
          </Menu>
        </Box>
        <Footer pad='medium'>
          <Button icon={<UserIcon />} />
        </Footer>
      </Sidebar>
    );
  }
}

export default (AppSidebar);
