import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<h1>hello</h1>} />
      <Route path="/signup" element={<h1>hello</h1>} />
    </Routes>
  );
}

export default AllRoutes;
