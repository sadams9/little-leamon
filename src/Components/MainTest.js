import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

const MainTest = () => {
  const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
        return (s = s * a % m) /m;
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <=23; i++) {
        if(random() < 0.5){
            result.push(i + ':00');
        }
        if(random() > 0.5){
            result.push(i + ':30');
        }
    }
    return result;
  }

  const submitAPI = function(formData) {
    return true;
  }

  const intitialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, intitialState);

  function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();
  function submitForm (formData){
    if(submitAPI(formData)) {
        navigate("/confirmed");
    }
  }

  return (
    <main className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/booking" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
          <Route path="/confirmed" element={<ConfirmedBooking/>} />
        </Routes>
        </Router>
    </main>
  )
}

export default MainTest;


