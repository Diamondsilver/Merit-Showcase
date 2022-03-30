import WithSubnavigation from "./components/navbar.js";
import WithBackgroundImage from "./components/Hero.js";
import SplitWithImage from "./components/Features.js";
import BasicStatistics from "./components/grid.js";
import SimpleCard from "./components/signin.js";
import SmallWithSocial from "./components/footer.js";
import SimpleThreeColumns from "./components/points.js";
import GridListWithHeading from "./components/inspiration.js";
import SignupCard from "./components/signup.js";
import { useMoralis } from "react-moralis";
import WithSubnavigation1 from "./components/loginnav.js";
import WithBackgroundImage1 from "./components/enableweb3.js";
import Howstart from "./components/howtostart.js";
import Setuser123 from "./components/setUserName.js";
import Balances1 from "./components/currentbalance.js";
import SendMerit from "./components/sendtouser.js";
import SetUserHero from "./components/setusernamehero.js";
import DonateHero1 from "./components/donateHero.js";
import DonateColumns from "./components/donateIcons.js";
import DonateInsp from "./components/donateInspiration.js";
import Charity1 from "./components/donateoption1.js";
import Charity2 from "./components/donateoption2.js";
import Charity3 from "./components/donateoption3.js";
import TeacherHero1 from "./components/TeachersHero.js";
import TeacherInstruction from "./components/TeacherInstructions.js";
import PrintMerit from "./components/teacherPrint.js";
import AdminHero1 from "./components/AdminHero.js";
import AdminInstruction from "./components/AdminInstructions.js";
import AdminSetTeacher from "./components/adminsetteacher.js";
import RevokeTeacher from "./components/adminrevoketeacher.js";
import AdminSetAdmin from "./components/adminaddadmin.js";
import AdminRemoveAdmin from "./components/adminremoveadmin.js";
import SendMeritToUsername from "./components/sendmeritstousername.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return (
      <Router>
        <div className="app">
          <WithSubnavigation1 />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <WithBackgroundImage1 />
                <Balances1 />
                <SendMeritToUsername />
              </Route>
            </Switch>

            <Switch>
              <Route path="/donate">
                <DonateHero1 />
                <DonateInsp />
                <DonateColumns />
                <Charity1 />
                <Charity2 />
                <Charity3 />
              </Route>
            </Switch>

            <Switch>
              <Route path="/teachers">
                <TeacherHero1 />
                <TeacherInstruction />
                <PrintMerit />
                <SendMeritToUsername />
              </Route>
            </Switch>

            <Switch>
              <Route path="/admins">
                <AdminHero1 />
                <AdminInstruction />
                <AdminSetTeacher />
                <RevokeTeacher />
                <AdminSetAdmin />
                <AdminRemoveAdmin />
              </Route>
            </Switch>

            <Switch>
              <Route path="/setusername">
                <SetUserHero />
                <Setuser123 />
              </Route>
            </Switch>
          </div>
          <SmallWithSocial />
        </div>
      </Router>
    );
  }

  return (
    <div>
      <WithSubnavigation />
      <WithBackgroundImage />
      <SplitWithImage />
      <BasicStatistics />
      <Howstart />
      <SimpleCard />
      <GridListWithHeading />
      <SimpleThreeColumns />
      <SimpleCard />
      <SmallWithSocial />
    </div>
  );
}

export default App;
