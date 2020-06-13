import dash_igv
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

igvStyle = dict(
  paddingTop = '10px',
  paddingBottom = '10px',
  margin = '8px',
  border = '1px solid lightgray'
)

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_igv.DashIgv(
        id='myigv',
        value='my-value',
        label='my-label',
        reference = {
                    "id": "ASM985889v3",
                    "name": "Sars-CoV-2 (ASM985889v3)",
                    "fastaURL": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna",
                    "indexURL": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna.fai",
                    "order": 1000000,
                    "tracks" : [
                      {
                        "name": "Annotations",
                        "url": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.gff.gz",
                        "displayMode": "EXPANDED",
                        "nameField": "gene",
                        "height": 150
                      }
                    ]

                  },
        tracks = [{ #normally, tracks listed here would not duplicate those already present above
                
              "name": "Genes",
              "type": "annotation",
              "url": "https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/009/858/895/GCF_009858895.2_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.gff.gz",
              "displayMode": "EXPANDED"
    
            }],
        minimumBases = 100, 
        style = igvStyle
    ),
    html.Div(id='output')
])


#@app.callback(Output('output', 'children'), [Input('myigv', 'value')])
#def display_output(value):
#    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
