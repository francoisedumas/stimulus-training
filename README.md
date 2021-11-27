# Slim setup

Add to the Gemfile
`gem "slim-rails"`
Then run `bundle` in your terminal. That's it!

# Stimulus setup

In your terminal
`yarn add stimulus`
`mkdir app/javascript/controllers`
`touch app/javascript/controllers/index.js`

Then in the `index.js` file add
```javascript
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context(".", true, /\.js$/)
application.load(definitionsFromContext(context))
```

In the file app/javascript/packs/application.js add
`import 'controllers'`

# Your first Stimulus

In your terminal
`rails g controller pages home`
In your `config/routes.rb` add
`root to "pages#home"`
In the app/views/pages/home.html.erb file add
```
h1 Welcome to your Stimulus trail!

= content_tag :div, nil, data: {controller: "hello"} do
  h2 data-hello-target="heading" This is the home page
  .btn.btn-primary data-action="click->hello#greet" Click me to change the title
```
Let's create your first Stimulus controller in your terminal do
`touch app/javascript/controllers/hello_controller.js`
In the app/javascript/controllers/hello_controller.js add
```javascript
import { Controller } from 'stimulus';
export default class extends Controller {
  static targets = ["heading"]

  connect() {
    console.log("hello from StimulusJS")
  }
  greet() {
    console.log("click")
    this.headingTarget.innerHTML = "Hello World"
  }
}
```