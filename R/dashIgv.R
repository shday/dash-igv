# AUTO GENERATED FILE - DO NOT EDIT

dashIgv <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashIgv',
        namespace = 'dash_igv',
        propNames = c('id', 'label', 'value'),
        package = 'dashIgv'
        )

    structure(component, class = c('dash_component', 'list'))
}
