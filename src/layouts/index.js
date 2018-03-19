import React from 'react'
import PropTypes from 'prop-types'

// Grommet
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';

// Components
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppSidebar from '../components/AppSidebar';

// Styles
import '../scss/main.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }
  
  constructor(props) {
    super(props);

    this.toogleSidebar = this.toogleSidebar.bind(this);

    this.state =
    {
      stateShowSidebar : false,
    }
  }
  
  toogleSidebar() {
    this.setState( (prevState, props) => ({ stateShowSidebar: !prevState.stateShowSidebar }) );
  }

  render() {
    return (
        <App>
          <Split fixed={true} flex="right">
            { this.state.stateShowSidebar ? <AppSidebar propCbOnClose={ this.toogleSidebar }/>:null }
            <Box>
              <AppHeader propCbOnMenuIconClicked={ this.toogleSidebar }/>
              {this.props.children()}
              <AppFooter/>
            </Box>
          </Split>
        </App>
    )
  }
}
