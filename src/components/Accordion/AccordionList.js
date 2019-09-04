import React, { Component } from 'react';
import Accordion from './Accordion';

class AccordionList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.items.length) {
            return (
                <div className="accordionList">
                    {this.props.items.map((value) => {
                        return (
                            <Accordion
                                title={value.title}
                                content={value.content}
                            />
                        )
                    })}
                </div>
            )
        }
        return (
            <p>No Data</p>
        )
    }
}


export default AccordionList;