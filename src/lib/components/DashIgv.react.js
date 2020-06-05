import React, {Component} from 'react';
import PropTypes from 'prop-types';

import igv from 'tmp_es6_igv';

var igvStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
  margin: '8px',
  border: '1px solid lightgray'
}

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
            locus: "all",
            reference: {
                    "id": "ASM985889v3",
                    "name": "Sars-CoV-2 (ASM985889v3)",
                    "fastaURL": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna",
                    "indexURL": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna.fai",
                    "order": 1000000,
                    "tracks": [
                      {
                        "name": "Annotations",
                        "url": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.gff.gz",
                        "displayMode": "EXPANDED",
                        "nameField": "gene",
                        "height": 150
                      }
                    ]

                  }
        };
        return igv.createBrowser(igvContainer, igvOptions);
    }

    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id}>
                <h2>ExampleComponent:</h2> {label}&nbsp;
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
                <div id="igv-div" style={igvStyle}></div>
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
    setProps: PropTypes.func
};
