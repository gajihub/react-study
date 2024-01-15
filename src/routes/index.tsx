import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Home from "@pages/Home";
import EmailList from "@components/EmailList";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/react-study" element={<Home />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.emailList} element={<EmailList />} />
      </Routes>
    </Router>
  );
};

export default index;
