import "./styles/App.scss";
import {
  ContactPage,
  HomePage,
  HomeTour,
  UserLogIn,
  NotFound,
  PropertyDetailGallery,
  QuestionnaireLandingPage,
  ShopPage,
} from "./views";
import {
  ChatBotButton,
  Navbar,
  QStepper,
  RecommendationPostCard,
  Footer,
  ScrollToTop,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { salesPosts } from "./assets/constansts";
import PropertyDetail from "./views/PropertyDetail";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ChatBotButton />
        <UserLogIn />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
