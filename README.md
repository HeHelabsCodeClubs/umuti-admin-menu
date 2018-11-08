# A simple component to render a list of errors

It is very common when working on react projects to want to display a list of errors.
With this component you can accomplish just that.

### How to install

```
> npm install errors-render-component
```

### An exmple of how to use

```
> import React from 'react'
> import RenderErrors from 'errors-render-component'
>
> const errors = ['The password is required', 'The email is required'];
> const Example = () => (
>   <RenderErrors errorData={errors} />
>);
```

### Props

```
> errorData //must be an array of errors
```

### License

MIT License