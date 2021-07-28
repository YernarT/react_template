# React-App-Template

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
