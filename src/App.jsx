import styles from "./style";
import {
  Hero2,
  Navbar2,
  Waiver,
  Footer2,
  Error,
  Contact,
  Booking2,
  Gallery,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <BrowserRouter>
      <Navbar2 />
      <div>
        <Routes className="flex-grow">
          <Route path="/" index element={<Hero2 />} />
          <Route path="/booking" element={<Booking2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newStuff" element={<Navbar2 />} />
          <Route path="/waiver" element={<Waiver />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>

      <div
        className={`bg-primary sticky top-[100vh] bottom-0`}
      >
        <div className="mx-auto">
          <Footer2 />
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
