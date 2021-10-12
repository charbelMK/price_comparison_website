import React, { Component } from 'react'
import './ToggleSwitch.scss'

class ToggleSwitch extends Component {
    render() {
      return (
        <div className="toggle-switch small-switch">
            <input type="checkbox" class="toggle-switch-checkbox" name={this.props.Name} id={this.props.Name} />
            <label className="toggle-switch-label" htmlFor={this.props.Name}>
                <span className="toggle-switch-inner" data-yes="Yes" data-no="No"/>
                <span className="toggle-switch-switch" />
            </label>
        </div>
    );
}
}

export default ToggleSwitch
