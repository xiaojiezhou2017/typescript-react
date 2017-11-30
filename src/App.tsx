import * as React from 'react';
import Welcome from './containers/welcome';
import Home from './containers/home';
// redux 已经在自己包里面包含了声明,所以不需要在安装@types/redux
// 但是需要在tsconfig的配置项中指明 
// "moduleResolution": "node" 原因还不清楚
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { reducer, StoreType }  from './store/reducer';
import { BrowserRouter, Route, Link} from 'react-router-dom'; 



const store = createStore<StoreType>(reducer);
class App extends React.Component<{},{}>{
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={Welcome} />
                        <Route path="/home" component={Home} />
                        <Link to="/home">go home</Link>
                        <Link to="/">go index</Link>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;