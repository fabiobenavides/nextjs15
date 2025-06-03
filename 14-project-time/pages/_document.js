// _document.js is used to add global styles and scripts
import Document from 'next/document';
import { Html, Head, Main, NextScript } from 'next/document';
//This Head is different from the Head in _app.js

//This is the default document that NextJS uses to render the page
//Here we can add extra tags to the page
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en"> 
                {/* Lang is an extra attribute that can be added to the Html tag to specify the language of the page */}
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

