import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { MainNav } from '@/components/layout/MainNav';
import { Home } from '@/pages/Home';
import { Board } from '@/pages/Board';
import { Announcements } from '@/pages/Announcements';
import { Documents } from '@/pages/Documents';
import { ARC } from '@/pages/ARC';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/arc" element={<ARC />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;