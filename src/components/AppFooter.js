import React from "react";
import PropTypes from "prop-types";

// Grommet
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

class AppFooter extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer justify='between'>
        <Title><s />Title</Title>
        <Box direction='row' align='center' pad={{"between": "medium"}}>
          <Paragraph margin='none'>© 2016 Grommet Labs</Paragraph>
          <Menu direction='row' size='small' dropAlign={{"right": "right"}}>
            <Anchor href='#'>Support</Anchor>
            <Anchor href='#'>Contact</Anchor>
            <Anchor href='#'>About</Anchor>
          </Menu>
        </Box>
      </Footer>
    );
  }
}

AppFooter.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default (AppFooter);
