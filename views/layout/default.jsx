var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
        <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
                    <link href="https://fonts.googleapis.com/css?family=Archivo+Black" rel="stylesheet"></link>
                    <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                    {this.props.children}

                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                </body>
        </html>
    );
  }
}

module.exports = DefaultLayout;
