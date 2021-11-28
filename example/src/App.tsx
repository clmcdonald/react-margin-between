import React from 'react';
import styled from 'styled-components';
import MarginBetween from 'react-margin-between';

const OuterParent = styled.div`
  padding: 20px;
`;

const HorizontalParent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border: 5px solid black;
  border-radius: 10px;
  width: fit-content;
`;

const VerticalParent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 5px solid black;
  border-radius: 10px;
  width: fit-content;
`;

const Child = styled.div`
  border: 3px solid blue;
  color: blue;
  border-radius: 5px;
  padding: 10px;
  width: fit-content;
`;

const App = () => {
  return (
    <OuterParent>
      <HorizontalParent>
        <MarginBetween marginHorizontal="100px">
          <Child>Child 1</Child>
          <Child>Child 2</Child>
          <Child>Child 3</Child>
        </MarginBetween>
      </HorizontalParent>
      <br />
      <VerticalParent>
        <MarginBetween marginVertical="30px">
          <Child>Child 1</Child>
          <Child>Child 2</Child>
          <Child>Child 3</Child>
        </MarginBetween>
      </VerticalParent>
    </OuterParent>
  );
}

export default App;