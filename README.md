# react-cmaker

A cli to create react components

## v3.0.3

support `css`,`scss`,`less`,`sass`

## support

1. support create multiple components
2. support use custom template
3. support `css`,`scss`,`less`,`sass`

### Usage

```
npm i -g react-cmaker
cmaker -n App
// create React component named App

cmaker -n Header,Body,Footer
// create React compoennts named Header,Body,Footer

cmaker -s (css|scss|sass|less)
// create React Component with (css|scss|sass|less), default scss

cmaker -t custom.template
// create React components with custom template custom.template, you can define custom template file of any extension.

```

## component details

- index.js
- handler.js
- index.css


### [index].js

```
import React, { Component, PropTypes } from 'react';
import * as handler from './handler.js';
import './index.$cssType$';

class $dirName$ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="$className$">

      </div>
    );
  }
}

$dirName$.proptype = {

}

export default $dirName$;

```

### [index].css

```
.$dirName$ {

}
```

### [handler].js

```
// handlers write here
```
