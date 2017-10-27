import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Link } from 'react-router-dom'
import ContentAdd from 'material-ui/svg-icons/content/add';

class ShareButton extends Component {
  render() {
    return (
      <Link to="/share" >
        <div className="share">
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </Link>
    );
  }
}

export default ShareButton;