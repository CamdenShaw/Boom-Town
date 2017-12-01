import getMuiTheme from "material-ui/styles/getMuiTheme"
import { blueGrey900, grey50 } from "material-ui/styles/colors"

export default getMuiTheme({
    palette: {
        textColor: blueGrey900,
        alternateTextColor: grey50,
        primary1Color: "#48C6EF",
        accent1Color: blueGrey900
    },
    appBar: {
        color: grey50
    },
    button: {
        primary1Color: grey50,
        accent2Color: grey50
    }
})
