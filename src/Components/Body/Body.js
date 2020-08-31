import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Service from '../Service/Service';
import Expressions from '../Expressions/Expressions';
import Inlinecss from '../InLineCssStyling/Inlinecss';
import Home from '../Home/Home';
import ExternalCSS from '../ExternalCSS/ExternalCSS';
import FormComponent from '../Forms/FormComponent';
import PostList from '../../Assignment/PostList/PostList';
import Preview from '../../Assignment/Preview/Preview';
import UserDetails from '../../Assignment/User/UserDetails';
import PostFeed from '../../Assignment/PostFeed/PostFeed';



export default class extends Component {
    render() {
        return (
            <React.Fragment>
                <Sidebar />
                <div class="main">

                    <Switch>
                        <Route path="/" component={About} exact />
                        <Route path="/About" component={About} exact />
                        <Route path="/service" component={Service} exact />
                        <Route path="/Expressions" component={Expressions} exact />
                        <Route path='/InLineCssStyling' component={Inlinecss} />
                        <Route path='/Home' component={Home} />
                        <Route path='/Externalcss' component={ExternalCSS} />
                        <Route path='/FormTest' component={FormComponent}/>
                        <Route path='/PostList' component={PostList}/>
                        <Route path={"/Preview/:id"} component={Preview}/>
                        <Route path={"/UserDetails/:id"} component={UserDetails}/>
                        <Route path={"/PostFeed/:id"} component={PostFeed}/>
                       
                    </Switch>

                </div>

            </React.Fragment>
        )
    }
}
