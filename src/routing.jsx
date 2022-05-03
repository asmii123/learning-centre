import React, { lazy, Suspense, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const ClassList = lazy(() => import("./routes/classList"));

function Routing(props) {
  return (
    <Suspense fallback={<LinearProgress sx={{ height: 7 }} />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClassList />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routing;
