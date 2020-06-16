% Auto-generated: do not edit by hand
\name{dashIgv}

\alias{dashIgv}

\title{DashIgv component}

\description{
The DashIgv component is an interactive genome visualization component developed by the Integrative Genomics Viewer (IGV) team. It uses an  example integration of igv.js and React (https://github.com/eweitz/igv.js-react).
}

\usage{
dashIgv(id=NULL, style=NULL, className=NULL, genome=NULL,
reference=NULL, locus=NULL, minimumBases=NULL, tracks=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{style}{Named list. Generic style overrides on the plot div}

\item{className}{Character. className of the parent div}

\item{genome}{Character. String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome
    for details and list of supported identifiers. Note: One (but only one) of
    either genome or reference properties must be set.}

\item{reference}{Named list. Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome
    Note: One (but only one) of either genome or reference properties must be set.}

\item{locus}{Character. Initial genomic location(s). Either a string or an array of strings.
    If an array a viewport is created for each location.}

\item{minimumBases}{Numeric. Minimum window size in base pairs when zooming in}

\item{tracks}{Unnamed list. Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/igvteam/igv.js/wiki/Tracks-2.0}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

