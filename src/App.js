import React, {useEffect, useState} from 'react';

import Lamborghini from "./Pages/Lamborghini";
import Ferrari from "./Pages/Ferrari";
import Porsche from "./Pages/Porsche";
import {Route, Routes} from "react-router-dom";
import Prices from "./Pages/Prices";
import Layout from "./Layout/Layout";


const App = () => {
    return (
        <>
<Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Lamborghini/>}/>
        <Route path="Ferrari" element={<Ferrari/>}/>
        <Route path="Porsche" element={<Porsche/>}/>
    </Route>
        <Route path="/Prices" element={<Prices/>}/>
</Routes>


        </>
    );
};

export default App;