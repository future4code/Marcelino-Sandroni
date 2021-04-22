import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound/index'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router
