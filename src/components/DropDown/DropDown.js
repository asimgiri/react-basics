import React, { Component } from 'react';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    onClickHandler = () => {
        this.setState({
            visible: !this.state.visible
        }, () => {
            console.log(this.state.visible);
        })
    }

    render() {
        return (
            <div className="dropdown">
                <ul>
                    <li className={this.state.visible ? 'link active' : 'link'} onClick={this.onClickHandler}>{this.state.visible ? ('Activated') : 'DropDown'}</li>

                    {this.state.visible ? (
                        <ul className="content">
                            <a href="#"><li>{this.props.first_link}</li></a>
                            <a href="#"><li>{this.props.second_link}</li></a>
                            <a href="#"><li>{this.props.third_link}</li></a>
                            <a href="#"><li>{this.props.forth_link}</li></a>
                            <a href="#"><li>{this.props.fifth_link}</li></a>
                        </ul>
                    ) : null}
                </ul>
            </div>
        )
    }

}

export default DropDown;