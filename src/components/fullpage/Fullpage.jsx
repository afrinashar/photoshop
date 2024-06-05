 import Menu from '../menu/menu';
import PageTab from '../pagetab/pagetab';
import Toolbar from '../toolbar/toolbar';
import Sidepanel from '../sidepanel/sidepanel';
import ReactFullpage from '@fullpage/react-fullpage';
import './fullpage.css';

const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <div className="section">
          <Menu />
          <PageTab />
          <Toolbar />
          <Sidepanel />
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Fullpage;
