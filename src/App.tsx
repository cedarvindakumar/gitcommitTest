import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPromise from './Component/TestPromise';
import ExecutionContext from './Component/ExecutionContext';
import Javascript from './Component/Javascript';
import CompA from './Component/ContextApi/CompA';
import ReduxConc from './Component/ReduxConc';
import store from './store';

import { Provider } from 'react-redux';
import LifeCycle from './Component/LifeCycle/LifeCycle';
import TodoList from './Component/TodoList/TodoList';
import UseRef from './Component/UseRef/UseRef';
import GetGithubUser from './Component/GetGithubUser/GetGithubUser';
import SearchApi from './Component/SearchApi/SearchApi';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Layout from './Layout';
import GitCommit from './Component/GitCommit/GitCommit';



function App() {
  // comment added
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="searchApi" element={<SearchApi />} />
              <Route path="lifecycle" element={<LifeCycle />} />
              <Route path="javascript" element={<Javascript />} />
              <Route path="testPromise" element={<TestPromise />} />
              <Route path="executioncontent" element={<ExecutionContext />} />
              <Route path="redux" element={<ReduxConc />} />
              <Route path="todilist" element={<TodoList />} />
              <Route path="githuuser" element={<GetGithubUser />} />
              <Route path="useref" element={<UseRef />} />
              <Route path="gitCommit" element={<GitCommit />} />
              
            </Route>
          </Routes>
        </BrowserRouter>

        {/* <SearchApi /> */}
        {/* <LifeCycle /> */}
        {/* <Javascript /> */}
        {/* <TestPromise /> */}
        {/* <ExecutionContext /> */}
        {/* <CompA /> */}
        {/* <ReduxConc /> */}
        {/* <TodoList /> */}
        {/* <UseRef /> */}
        {/* <GetGithubUser /> */}

      </div>
    </Provider>
  );
}

export default App;
