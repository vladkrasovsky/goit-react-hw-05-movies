import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Box as="header" boxShadow="0 0 8px rgba(0,0,0,0.3)">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

export default AppBar;
