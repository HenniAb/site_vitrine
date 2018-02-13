import React, { PureComponent } from "react"
import { renderToString } from "react-dom/server"
import logo from "../img/logo.png"

export default class HTML extends PureComponent {
    render() {
        const {component, store} = this.props;
        const data = JSON.stringify(store.getState());
        const content = component ? renderToString(component) : "";

        return (
            <html lang="fr"  style={{fontFamily:"'Roboto', sans-serif", background: 'linear-gradient(to left top, #F8DB6C, #E95C57)', backgroundRepeat: "no-repeat", minHeight: "100%"}}>
                <head>
                    <title>Centrale Fitness</title>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link rel="stylesheet" href={"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"}/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
                </head>
                <body style={{backgroundColor: "transparent"}}>
                    <div id="app" dangerouslySetInnerHTML={{__html: content}}/>
                    <script type="application/javascript" dangerouslySetInnerHTML={{__html: `window.__data = ${data};`}}/>
                    <script type="text/javascript" src={"/assets/app.min.js"}/>
                </body>
            </html>
        )
    }
}