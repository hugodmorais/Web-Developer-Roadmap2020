import React, { Component, Suspense } from 'react';
import './App.css';

import Page1 from './Components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// import AsyncComponent from './components/AsyncComponent';

const Page2Lazy = React.lazy(()=> import('./Components/Page2'));
const Page3Lazy = React.lazy(()=> import('./Components/Page3'));
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    // No Code Splitting:
    this.setState({route: route});
    // With Code Splitting:
    // if (route === 'page1') {
    //   this.setState({ route: route })
    // } else if (route === 'page2') {
    //   import('./components/Page2').then((Page2) => {
    //     this.setState({ route: route, component: Page2.default})
    //   })
    // } else if (route === 'page3') {
    //   import('./components/Page3').then((Page3) => {
    //     this.setState({ route: route, component: Page3.default})
    //   })
    // }
  }

  render() {
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2') {
    //   const AsyncPage2 = AsyncComponent(()=> import('./components/Page2'));
    //   return <AsyncPage2 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page3') {
    //   const AsyncPage3 = AsyncComponent(()=> import('./components/Page3'));
    //   return <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   console.log(this.state.component)
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;
