import { useContext } from 'react';
import { AppContext } from './../../context/AppContext';
import './header.css';

const Header = () => {
  const { activeSection, setActiveSection } = useContext(AppContext);

  return (
    <header className="header">
      <ul>
        <li 
          className={activeSection === 'consumer' ? 'active' : ''}
          onClick={() => setActiveSection('consumer')}
        >
          Consumer Microfinance
        </li>
        <li 
          className={activeSection === 'commercial' ? 'active' : ''}
          onClick={() => setActiveSection('commercial')}
        >
          Commercial Microfinance
        </li>
        <li 
          className={activeSection === 'group' ? 'active' : ''}
          onClick={() => setActiveSection('group')}
        >
          Group Lending
        </li>
        <li 
          className={activeSection === 'community' ? 'active' : ''}
          onClick={() => setActiveSection('community')}
        >
          Community Development
        </li>
      </ul>
    </header>
  );
};

export default Header;
