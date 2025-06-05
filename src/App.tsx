
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseTemplate from "./pages/CourseTemplate";
import Nursing from "@/pages/Nursing.tsx";
import StudyInGermany from "@/pages/StudyGermany.tsx";
import ExamPreparationPage from "./pages/ExamPrep";
import SelfPacedCourse from "./pages/SelfPaced"
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import RefundPolicyPage from "./pages/RefundPolicy";
import MeetOurFounder from "./pages/founder";
import ComboCoursesPage from "./pages/ComboCoursePage";
import BlogsPage from "./pages/Blog";
import CoachingPage from "./pages/Coaching";
import AusbildungPage from "./pages/AusbildungPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Course routes */}
          <Route path="/courses/:category/:subcategory" element={<CourseTemplate />} />
          <Route path="/study" element={<StudyInGermany/>}/>
          <Route path="/nursing" element={<Nursing/>}/>
          <Route path="course/exam" element={<ExamPreparationPage/>}/>
          <Route path="courses/selfpaced" element={<SelfPacedCourse />}/>
          <Route path="/privacypolicy" element={<PrivacyPolicyPage/>} />
          <Route path="/refund-policy" element={<RefundPolicyPage/>} />
          <Route path="/About-our-Founder" element={<MeetOurFounder />} />
          <Route path="/combo-course" element={<ComboCoursesPage/>} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/courses/coaching" element={<CoachingPage />} />
          <Route path="/Ausbildung-in-Germany" element={<AusbildungPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
