# [React App Template](https://it-is-it.web.app/) &middot; v0.0.0

React App Template is a standard for building react project.

**Comprehensive:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.

**Scalable:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.
**Maintained:** asdasdasda.

[Learn how to use React App Template in your own project](https://it-is-it.web.app/docs/react-app-template/getting-started).

## Installation

React has been designed for gradual adoption from the start, and **you can use as little or as much React as you need**:

- Use [Online Playgrounds](https://reactjs.org/docs/getting-started.html#online-playgrounds) to get a taste of React.
- [Add React to a Website](https://reactjs.org/docs/add-react-to-a-website.html) as a `<script>` tag in one minute.
- [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html) if you're looking for a powerful JavaScript toolchain.

You can use React as a `<script>` tag from a [CDN](https://reactjs.org/docs/cdn-links.html), or as a `react` package on [npm](https://www.npmjs.com/package/react).

## Documentation

You can find the React documentation [on the website](https://reactjs.org/docs).

Check out the [Getting Started](https://reactjs.org/docs/getting-started.html) page for a quick overview.

The documentation is divided into several sections:

- [Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Main Concepts](https://reactjs.org/docs/hello-world.html)
- [Advanced Guides](https://reactjs.org/docs/jsx-in-depth.html)
- [API Reference](https://reactjs.org/docs/react-api.html)
- [Where to Get Support](https://reactjs.org/community/support.html)
- [Contributing Guide](https://reactjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/reactjs/reactjs.org).

## Examples

We have several examples [on the website](https://reactjs.org/). Here is the first one to get you started:

```jsx
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("container")
);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://reactjs.org/docs/introducing-jsx.html). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. If you're using React as a `<script>` tag, read [this section](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx) on integrating JSX; otherwise, the [recommended JavaScript toolchains](https://reactjs.org/docs/create-a-new-react-app.html) handle it automatically.

## Contributing

The main purpose of this repository is to continue evolving React core, making it faster and easier to use. Development of React happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving React.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://reactjs.org/contributing/how-to-contribute.html)

Read our [contributing guide](https://reactjs.org/contributing/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/react/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started.

### License

React is [MIT licensed](./LICENSE).

### Navigation

## Project structure

|                 Folder                  |                                      Desc                                       |
| :-------------------------------------: | :-----------------------------------------------------------------------------: |
|               **public**                |                                HTML & HEAD files                                |
|        **public / favicon.svg**         |                              Site icon svg format                               |
|         **public / index.html**         |                                    HTML file                                    |
|         **public / robots.txt**         |                                Crawler protocol                                 |
|                 **---**                 |                                       ---                                       |
|                 **src**                 |                             Pages, components, etc.                             |
|            **src/index.js**             |                                App start in here                                |
|             **src/App.jsx**             |                                       App                                       |
|            **src/App.less**             |                             App style, global style                             |
|               **src/api**               |                               Project api folder                                |
|           **src/api/ajax.js**           |                          Encapsulate the axios library                          |
|          **src/api/\*-api.js**          |                           APIs of various components                            |
|             **src/assets**              |                           Style and related documents                           |
|          **src/assets/icons**           |            Icons of various components, export in the index.js file             |
|           **src/assets/img**            |            Images of various components, export in the index.js file            |
|          **src/assets/style**           |                        Mixins, normalize, less variables                        |
|           **src/components**            |                 Various components, export in the index.js file                 |
|   **src/components/PageTemplate/\***    | All pages template, have _navbar_, _slider_, _bottom navigation bar_, _content_ |
|      **src/components/Charts/\***       |                                Chart components                                 |
| **src/components/OldKlikComponents/\*** |          Old _KlikMetrics_ project components, export in index.js file          |
|        **src/components/Popup**         |                                 All page popup                                  |
|     **src/components/WithPopup/\***     |                 Components with popup, export in index.js file                  |
|             **src/config**              |                                                                                 |
|              **src/data**               |                                                                                 |
|              **src/hooks**              |                                                                                 |
|              **src/pages**              |                                                                                 |
|              **src/redux**              |                                                                                 |
|                 **---**                 |                                       ---                                       |
|                **.env**                 |                                Environment file                                 |
|             **.gitignore**              |                                 Git ignore file                                 |
|              **README.md**              |                                    This file                                    |
|            **package.json**             |                                 Dependent file                                  |
|            **jsconfig.json**            |                           VSCode config file (Alias)                            |

|   URL    |      Page      | Desc |
| :------: | :------------: | :--: |
|   `/`    |   User Home    | None |
| `/login` |     Login      | None |
|  `/404`  | Page not found | None |
