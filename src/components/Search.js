import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../css/Search.css';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';
import { allLists } from '../redux/list/list';

const Search = () => {
  const dispatch = useDispatch();
  const allListsAction = bindActionCreators(allLists, dispatch);
  const lists = useSelector((state) => state.lists.allLists);
  const loading = useSelector((state) => state.lists.loading);

  useEffect(async () => {
    if (loading) {
      await allListsAction();
    }
  }, []);

  const renderLists = () => {
    const result = [];
    for (let i = 0; i < lists.length; i += 1) {
      result.push(
        <tr key={i}>
          <td>{lists[i].name}</td>
        </tr>,
      );
    }
    return result;
  };

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
            {!loading && renderLists()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
