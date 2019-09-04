import React, { Component } from 'react'

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onClickHandler = () => {
        this.setState({
            active: !this.state.active
        }, () => {
            console.log(this.state.active);
        })
    }

    render() {
        return (
            <div className="accordion">
                <ul>
                    <li className={this.state.active ? 'link active' : 'link inactive'} onClick={this.onClickHandler}>{this.props.title} <i className="fa fa-angle-down"></i></li>

                    {this.state.active ? (
                        <li className="content">
                            <p>
                                {this.props.content}
                            </p>
                        </li>
                    ) : null}
                </ul>
            </div>
        )
    }
}

export default Accordion;