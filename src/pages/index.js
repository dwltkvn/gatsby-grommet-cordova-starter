import React from "react";
import PropTypes from "prop-types";

// Grommet
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';

class MainPage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Article>
        <Section pad='large' justify='center' align='center' full='vertical' colorIndex='grey-5'>
          <Headline margin='none'>Section 1</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' colorIndex='grey-4' full='vertical'>
          <Headline margin='none'>Section 2</Headline>
        </Section>
      </Article>
    );
  }
}

MainPage.propTypes = {

};

export default (MainPage);
