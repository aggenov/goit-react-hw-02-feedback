import styled from 'styled-components';

 const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
`;

 const Item = styled.li`
  font-size: 18px;  
  color: black;
  background-color: white;
  margin: 0;
  margin-right: 12px;
`;

const Text = styled.p`
margin: 0;
padding: 0;

// letter-spacing: 0.01em;
// word-spacing: 10px;
`

const Number = styled.span`
font-weight: 500;
`

const style = {
  List,
  Item,
  Text,
  Number
};



export default style;