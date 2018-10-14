var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
        <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                        {this.props.children}
                </body>
        </html>
    );
  }
}

module.exports = DefaultLayout;
