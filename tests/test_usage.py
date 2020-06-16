from dash.testing.application_runners import import_app


# Basic test for the component rendering.
def test_render_component(dash_duo):
    # Start a dash app contained as the variable `app` in `usage.py`
    app = import_app('usage')
    dash_duo.start_server(app)

    # Check that the genome loaded
    dash_duo.wait_for_text_to_equal('#igv-current_genome', 'ASM985889v3')

    # Check that both tracks leaded
    tracks = dash_duo.find_elements('.igv-track-label')

    assert tracks[0].text == 'Annotations'
    assert tracks[1].text == 'Genes'
    