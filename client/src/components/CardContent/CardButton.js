import React from "react"

import { CardActions, RaisedButton } from "material-ui"

const CardButton = ({ borrower, borrowItem }) => {
    return (
        <CardActions>
            {!borrower && <RaisedButton secondary={true} label="Borrow" />}
        </CardActions>
    )
}

export default CardButton
