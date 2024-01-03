import "./styles/App.scss";
import {
  ContactPage,
  HomePage,
  HomeTour,
  LogIn,
  NotFound,
  PropertyDetailGallery,
  QuestionnaireLandingPage,
  RentalPage,
  SalePage,
  ShopPage,
  SignUp,
} from "./views";
import {
  ChatBotButton,
  Navbar,
  QStepper,
  RecommendationPostCard,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer";
import { salesPosts } from "./assets/constansts";
import PropertyDetail from "./views/PropertyDetail";

function App() {
  //TODO : add condition as per the requirement
  const isFooterVisibleToCurrentRoute = true;
  // const navBarHideRoutes = ['/property-detail/gallery']

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ChatBotButton />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/rent" element={<RentalPage />} />
          <Route path="/buy" element={<SalePage />} />
          <Route path="/home-tour" element={<HomeTour />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/questionnaire" element={<QuestionnaireLandingPage />} />
          <Route path="/questionnaire/qna" element={<QStepper />} />
          <Route
            path="/recommendation"
            element={<RecommendationPostCard data={salesPosts} />}
          />
          <Route path="/property-detail" element={<PropertyDetail />} />
          <Route
            path="/property-detail/gallery"
            element={<PropertyDetailGallery />}
          />

          {/* Not found route */}
          <Route element={<NotFound />} />
        </Routes>
        {isFooterVisibleToCurrentRoute && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
