# AUTO GENERATED FILE - DO NOT EDIT

dashIgv <- function(id=NULL, label=NULL, value=NULL, reference=NULL, minimumBases=NULL, style=NULL, className=NULL) {
    
    props <- list(id=id, label=label, value=value, reference=reference, minimumBases=minimumBases, style=style, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashIgv',
        namespace = 'dash_igv',
        propNames = c('id', 'label', 'value', 'reference', 'minimumBases', 'style', 'className'),
        package = 'dashIgv'
        )

    structure(component, class = c('dash_component', 'list'))
}
