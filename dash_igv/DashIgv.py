# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashIgv(Component):
    """A DashIgv component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- label (string; required): A label that will be printed when this component is rendered.
- value (string; optional): The value displayed in the input.
- style (dict; optional): Generic style overrides on the plot div
- className (string; optional): className of the parent div
- genome (string; optional): String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome
    for details and list of supported identifiers. Note: One (but only one) of
    either genome or reference properties must be set.
- reference (dict; optional): Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome
    Note: One (but only one) of either genome or reference properties must be set.
- locus (string; optional): Initial genomic location(s). Either a string or an array of strings.
    If an array a viewport is created for each location.
- minimumBases (number; optional): Minimum window size in base pairs when zooming in
- tracks (list; optional): Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/igvteam/igv.js/wiki/Tracks-2.0"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.REQUIRED, value=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, genome=Component.UNDEFINED, reference=Component.UNDEFINED, locus=Component.UNDEFINED, minimumBases=Component.UNDEFINED, tracks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'label', 'value', 'style', 'className', 'genome', 'reference', 'locus', 'minimumBases', 'tracks']
        self._type = 'DashIgv'
        self._namespace = 'dash_igv'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'label', 'value', 'style', 'className', 'genome', 'reference', 'locus', 'minimumBases', 'tracks']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashIgv, self).__init__(**args)
