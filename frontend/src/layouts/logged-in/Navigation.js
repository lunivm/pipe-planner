import React from 'react';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

const renderLink = (href, label) => <Nav.Item><Link to={href} className="nav-link" role="button">{label}</Link></Nav.Item>

export default function Navigation() {
  return (
    <Nav variant="pills">
      {renderLink('/dashboard', 'Dashboard')}
      {renderLink('/vehicles', 'Vehicles')}
    </Nav>
  );
}
