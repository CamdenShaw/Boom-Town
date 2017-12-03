import React from "react"
import { CardTitle } from "material-ui"

const CardTitles = ({ title = "Amazing Item Title", tags }) => {
    return <CardTitle title={title} subtitle={tags} />
}

export default CardTitles
