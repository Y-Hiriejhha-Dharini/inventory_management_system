import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const user = JSON.parse(localStorage.getItem('user_info'));
  const navigate = useNavigate();
  function logout()
  {
    localStorage.clear();
    navigate('/')
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/">INVENTORY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/add_product">Add Product</Link>
            <NavDropdown title="Sales" id="navbarScrollingDropdown">
              <NavDropdown.Item to="/po_add">Add Purchase Order</NavDropdown.Item>
              <NavDropdown.Item to="/po_view">View Purchase Order</NavDropdown.Item>
              <NavDropdown.Item to="/billing">Billing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/sales_order">Sales Order</NavDropdown.Item>
              <NavDropdown.Item to="/invoice">Invoice</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              user ?
              <>
                <Link className='px-4'>Hello {user.name}</Link>
                <Link onClick={logout}>Logout</Link>
                
              </>
              :
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;