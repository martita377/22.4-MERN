import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
    	<div className={styles['about-desc']}>
	      <h2>About</h2>
	      <p>Aenean ultrices ac dui nec gravida. Donec mauris sapien, sollicitudin quis nibh eget, sagittis lobortis mauris. Donec placerat nibh ut turpis finibus, in fermentum risus convallis. Proin ultricies odio tempus mollis vehicula. Donec purus nunc, tincidunt eget tristique a, vestibulum sed massa. Phasellus risus nunc, sollicitudin ac aliquam vel, scelerisque at diam. Vestibulum ut ornare erat. Duis dignissim ac nunc vel egestas. Proin ut lorem justo. Nam libero augue, congue ut laoreet id, sagittis ut urna. In hac habitasse platea dictumst. Phasellus ullamcorper purus et consequat viverra. Nam in mi sem. Duis eu leo nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mattis lacinia sem non mattis.</p>
	    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
