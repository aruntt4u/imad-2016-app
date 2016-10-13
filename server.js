var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone = {
    title: 'Arun Resume',
    img: `<div class="center">
            <img src="/ui/arun.png" class="img-small" align=right>
        </div>`,
    Heading: `<div>
            <p>
            <br>
            <br>
            Name: Arun<br>
            aruntt4u@gmail.com<br>
            9164282828<br>
            <br>
            <br>
            Gadag,Karnataka
            </p>
            <hr>
        </div>`,
    summary: `<div>
            <h2 align=left>
            Summary    
            </h2>
            <P>
                This is my summary. This is my summary. This is my summary. This is my summary. This is my summary. This is my summary. This is my summary. This is my summary. This is my summary. This is my summary. This is my summary. This is my summar.
            </P>
            <hr>
        </div>`,
    work: `<div>
            <h2 aligh=left>
                Work Experience
            </h2>
            <h3>
                Student<br>
                place: college and home
            </h3>
            <p>I work in my home and college. very difficult. Ha ha ha......</p>
            <dir>
                <li>My school</li>
                <li>My pu college</li>
                <li>My engineering college </li>    
            </dir>
            <hr>
            </div>`,
    education:`<div>
                <h2>
                    Education
                </h2>
                <p>
                    That's what i am doing.<br>
                    learnt lot of things in my school<br>
                    Studied a bit of science in pu college<br>
                    not attended regular classes in engineering to learn modern application development<br> 
                </p>
                <hr>
            </div>`,
    aditional:`<div>
                <h2>
                    Additional Information
                </h2>
                <p>
                    I dont't have much addition informational about me right now.<br>
                    When i get those additional informations, i will definitely upload.
                    That's all for now. thank u.
                </p>
            </div>`,
     scr:` <script type="text/javascript" src="/ui/arun.png">     </script>`        
};

var articletwo = {
    title: 'madi Resume',
    img: `<div class="center">
            <img src="/ui/madi.png" class="img-small" align=right>
        </div>`,
    Heading: `<div>
            <p>
            <br>
            <br>
            Name: madi<br>
            madi@gmail.com<br>
            999999999<br>
            <br>
            <br>
             india
            </p>
            <hr>
        </div>`,
    summary: `<div>
            <h2 align=left>
            Summary    
            </h2>
            <P>
                This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary. This is madi summary.
            </P>
            <hr>
        </div>`,
    work: `<div>
            <h2 aligh=left>
                Work Experience
            </h2>
            <h3>
                Student<br>
                place: college and home
            </h3>
            <p>madi work at IMAD. Ha ha ha......</p>
            <dir>
                <li>Madi school</li>
                <li>Madi college</li>
                <li>Madi iit college </li>    
            </dir>
            <hr>
            </div>`,
    education:`<div>
                <h2>
                    Education
                </h2>
                <p>
                    I have lot of education<br>
                    learnt lot of things in my school<br>
                    Studied a bit of science in pu college<br>
                    not attended regular classes in engineering to learn modern application development<br> 
                </p>
                <hr>
            </div>`,
    additional:`<div>
                <h2>
                    Additional Information
                </h2>
                <p>
                    i conduct imad course for students. I am very popular and star figure in the internet.
                </p>
            </div>`,
    scr:` <script type="text/javascript" src="/ui/madi.png">
        </script>`
};

function createtemplate (data) {
 var title = data.title;
 var img = data.img;
 var heading = data.heading;
 var summary = data.summary;
 var work = data.work;
 var additional= data.additional;
var htmltemplate = ` <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
        <h1 align=center>
            RESUME
        </h1>
        <font size=4>
        ${img}
        ${heading}
        ${summary}
        ${work}
        ${additional}
        ${scr}
    </body>
</html>
`;
 return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));
});

app.get('/article-two', function (req, res) {
  res.send(createtemplate(articletwo));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/arun.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'arun.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
