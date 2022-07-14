React Training Day 2

npx create-react-app app-name
npx create-react-app app-name --template typescript

DOM - Is painted so any thing drawn on it needs to be erased
DIV/SPAN - Is atached on document so it can be replaced with new div
		   DIV is as per contents
		   SPAN occupies whole page



index.html -> index.js -> app.js (include components here)
Dont append index.js/append app.js

index.html is in public

export default App; //identifies default component in the class
its like entrypoint to the class


CDNs - 
```
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

State - Local to person
Context - Local to Johndeere (has boundries)
Redux - Google Drive
Stateless - No state maintained

Class with no member vars are stateless
Class with member vars are stateful
To tell computer to remember the vars we use state{} block for current session

--------------------------------------------------------------------------------------------------

Class has own state
State of 1 component dosenot go to State of other component
Passing values between classes uses attributes (consumed using props)
To pass state of 1 component to other component use props

prevent default method used to avoid event bubbling from parent to child

Lifecycle = continues
Lifcycle Hooks = attach functionality to specific phase of lifecycle

Basic Hooks: 3 Hooks in react
Advance Hooks : 9 to 10

Hooks post 16.8 of react version
Hooks cannot be created using classes (need to use functional programming)


Lifecycle methods - 
componentDidMount
componentWillUnmount

No event is required to call the lifecycle method

If we have only package.json and install project run npm install

--------------------------------------------------------------------------------------------------

Routers
 
Static - Hash Router
Dynamic - Browser/Memory Router

Recommended - Browser Router - Refer sixth-example

```
import { Route, Routes, BrowserRouter } from 'react-router-dom';

 <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>

        </div>
 </BrowserRouter>
```

This gives a jerk effect because of a href

So use Link tag given by materials ui
link tag in html is made Link tag in react

Link tag and NavLink tag given by router dom
Navlink - keeps the route link highlighted indicating which page is open
using activeClassName - Refer seventh-example

```
const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
```


<Section> - Does logical grouping

```
import { useParams } from "react-router-dom";
can be used to pass user params to routes

<Route path='/product-details/:productId'>
```

instead of <Route> to traverse all links using <Switch> is recommended

----------------------------------------------------------------------------------------
Hooks - Helps to do reusability  refer eight example
	  - Property POJO

Basic Hooks: 3 Hooks in react
	1. USESTATE - imp
	2. USEEFFECT - imp
	3. USECONTEXT - imp
Additional Hooks: 4 Hooks
	4. USEREDUCER - imp
	5. USECALLBACK - imp
	6. USEMEMO - imp
	7. USEREF - imp
	8. USEIMPERATIVEHANDLE
	9. USELAYOUTEFFECT
	10. USEDEBUGVALUE
	11. USEDEFERREDVALUE
	12. USETRANSITION
	13. USEID
Library Hooks - 2
	14. USESYNCEXTERNALSTORE
	15. USEINSERTIONEFFECT	
Cutom Hooks: Can be created and shared post 16.8 version of react




Every hook takes 2 things - 
1.Object 
2.Setter method
like ```const[myName,setMyName] = React.useState("Name");```
you can set array or object using useState([]) and useState({})


