// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import QuestionPanel from '../../organisms/QuestionPanel/QuestionPanel';

const HomePage = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="row">
        <div className="col l8 push-l2">
          <QuestionPanel />
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
