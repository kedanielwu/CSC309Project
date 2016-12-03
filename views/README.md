# Front End

## Overview

In a nutshell, we use EJS for making our front end more modular and easier to write/maintain/change.

Each view or partial (parts of views) that we render are .ejs files, and when we render them in our application in `server.js` it will look like:

(To render page_name.ejs - you drop the .ejs extension)
```
res.render('pages/<page_name>')
```

Think of partials as just pieces of html code that we can use in our pages. Anything that is used in multiple pages should be in a partial, that way for each individual page, the actual html is pertinent specifically to that page, and any irrelevant html is abstracted into partials.

Other than partials, we can directly use Javascript in .ejs files. For example, when rendering a page, we can send some kind of data object to the .ejs file and inside the .ejs file we can have code that expects data and manipulates it into desired html (kind of like jquery).

### Directory (should also make one for root readme)

```
- public
----- css
----- img
----- js
----- less
----- vendor
----- gulpfile.js
- views
----- partials
---------- head.ejs
---------- nav.ejs
---------- scripts.ejs 
---------- footer.ejs
----- pages
---------- index.ejs
---------- profile.ejs
---------- search.ejs
---------- signup.ejs
```

### EJS

#### Rendering

In `server.js`, we set the `view engine` of Express to use ejs, so when we call `res.render(<filename>)`, it will look in /views/ for <filename>.ejs

To render a view, you can just do:

```
app.get('/<route_to_view>', function(req, res) {
    res.render('pages/<page_to_render>');
});
```

ie.

```
app.get('/index_view', function(req, res) {
    res.render('pages/index');
});
```

Run the server using `node server.js` then go to the route you specified to see the rendered view.

#### Embedded Javascript

In EJS we can call and use Javascript functions and variables.

Any EJS is denoted by `<% code %>` tags. 

As a quick example, in our head.ejs we have

`<%= title %>`

It will be replaced by whatever variable title is that is given when rendering a .ejs file that uses the head.ejs partial.

To use this, we would render it like this:

```
res.render('pages/index', {title:"Index Page"});
```

#### Partials

Partials are just reusable snippets of html. To use them, create a `<partial_name>.ejs` in `/partials/` with desired html code.

To "inject" it into a .ejs page (or another partial if you want), you can just use (without including .ejs extension)

`<% include <relative_path_to_partial> %>`

ie.

`<% include ../partials/head %>`

#### Other

For further docs/tut see:
* https://scotch.io/tutorials/use-ejs-to-template-your-node-application
* https://www.codementor.io/nodejs/tutorial/node-with-express-and-ejs
* http://www.embeddedjs.com/getting_started.html\n