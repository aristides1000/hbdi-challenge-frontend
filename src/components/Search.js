import React from 'react';
import '../css/Search.css';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="container-fluid">
      <div className="row m-5">
        <div className="search">
          <Form>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="name"
                aria-label="name"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <span className='me-2'><BiSearchAlt /></span>
                Search
              </Button>
            </InputGroup>
          </Form>
        </div>
      </div>
      <div className="row m-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
