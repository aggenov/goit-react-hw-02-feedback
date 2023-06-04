import styled from "styled-components";

export const List = styled.ul`
list-style: none;
display: flex;
ustify-content: space-between;
padding: 0;
`


export const Button = styled.button`
margin: 10px;
padding: 5px 15px;
font-weight: 500;
font-size: 14px;
border: 1px solid gray;
border-radius: 5px;
box-shadow: 1px 1px 5px  1px rgba(0, 0, 0, 0.2);

&: hover,
&: focus {
  cursor: pointer;
  transform: scale(1.05);
  box-shadow: 2px 2px 8px  3px rgba(0, 0, 0, 0.2);
}
`

