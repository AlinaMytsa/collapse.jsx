import React from "react";
import cn from "classnames";


class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
    }
  }

  handleClick = () => {
    this.setState({
      opened: !this.state.opened,
    })
  }

  renderCollapse = () => {
    if (this.state.opened === true) {

      const isShowing = cn('collapse',{
        'show': true
      })

      return (
        <div className={isShowing}>
          <div className="card card-body">
            {this.props.text}
          </div>
        </div>
      )
    }
  }

  render() {

    return (
      <div>
        <p>
          <a onClick={this.handleClick} className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
             aria-expanded={this.state.opened}>Link with
            href</a>
        </p>
        {this.renderCollapse()}
      </div>
    )
  }
}


export default Collapse;
