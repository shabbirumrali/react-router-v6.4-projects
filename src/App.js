import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,  
  Route
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact, { contactAction } from "./pages/Contact";
import FallBack from "./pages/FallBack";
import Careers, { careerLoader } from "./pages/Careers";
import CareerDetail, { careerDetailsLoader } from "./pages/CareerDetail";
import CareersError from "./pages/CareersError";

// layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareerLayout from "./layout/CareerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="careers" element={<CareerLayout />}>
        <Route 
          index 
          element={<Careers />}
          loader={careerLoader}
          errorElement={<CareersError />}          
        />
        <Route 
          path=":id"
          element={<CareerDetail />} 
          loader={careerDetailsLoader}
          errorElement={<CareersError />}
        />
      </Route>

      <Route path="*" element={<FallBack />} />
    </Route>
  )
)

const App = () => {
  return (      
    <RouterProvider router={router} />
  )
}

export default App