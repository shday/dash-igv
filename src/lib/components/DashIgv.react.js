import React, {Component} from 'react';
import PropTypes from 'prop-types';

import igv from 'tmp_es6_igv';


/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashIgv extends Component {

    componentDidMount() {
        var igvContainer = document.getElementById('igv-div');
        var igvOptions = {
            genom: this.props.genome,
            locus: this.props.locus,
            reference: this.props.reference,
            minimumBases: this.props.minimumBases,
            tracks: this.props.tracks,
        };
        return igv.createBrowser(igvContainer, igvOptions);
    }

    render() {
        const {id, setProps, value, style} = this.props;

        return (
            <div id={id}>
                <h2>ExampleComponent:</h2>&nbsp;
                <input
                    value={value}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        e => setProps({ value: e.target.value })
                    }
                />
                <div id="igv-div" style={style}></div>
            </div>
        );
    }


}

DashIgv.defaultProps = {};

DashIgv.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Generic style overrides on the plot div
     */
    style: PropTypes.object,

    /**
     * className of the parent div
     */
    className: PropTypes.string,

     /**
    String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome
    for details and list of supported identifiers. Note: One (but only one) of
    either genome or reference properties must be set.
    */   
    genome: PropTypes.string,

    /**
    Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome
    Note: One (but only one) of either genome or reference properties must be set.
    */
    reference: PropTypes.object,

    /**
    Initial genomic location(s). Either a string or an array of strings.
    If an array a viewport is created for each location.
    */
    locus: PropTypes.string,

    /**
     * Minimum window size in base pairs when zooming in
     */
    minimumBases: PropTypes.number,

    /**
    Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/igvteam/igv.js/wiki/Tracks-2.0
    */
    tracks: PropTypes.array,

};
