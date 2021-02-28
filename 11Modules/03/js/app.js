import { render } from './react-dom/index.js'
import Title from './components/title.js'

render(Title, window.container) // Title is the content argument for the return fn in styled.h1 fn 
// render(user, window.container)
// render('hello world!', window.container)