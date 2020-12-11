import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./views/Login/Login"
import CreateAccount from "./views/CreateAccount/CreateAccount"
import ForgotPassword from './views/ForgotPassword/ForgotPassword';
import HomePage from './views/HomePage/HomePage';
import ViewHistory from './views/ViewHistory/ViewHistory'
import YourProfile from './views/YourProfile/YourProfile'
import LiveReadings from './views/LiveReadings/LiveReadings';
import PatientProfile from './views/ViewPatientProfile/PatientProfile';
import AddPatient from './views/AddPatient/AddPatient';
import { UserContext } from "./Context"
import './App.css'

const AppRouter = () => {

    const [Empty, setEmpty] = useState(false);
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/createaccount" component={CreateAccount} />
                <Route path="/dashboard" component={HomePage} />
                <UserContext.Provider value={{ Empty, setEmpty }}>
                    <Route path="/viewpatientprofile/:address" component={PatientProfile} />
                    <Route path="/yourprofile" component={YourProfile} />
                    <Route path="/livereadings/:address" component={LiveReadings} />
                    <Route path="/addpatient" component={AddPatient} />
                    <Route path="/viewhistory/:name&:gender&:admissionDate&:address" component={ViewHistory} />
                </UserContext.Provider>
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </Router>
    )
}
export default AppRouter;