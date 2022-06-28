import React from "react";
import styled from "styled-components";

function ShipItem({ ship }) {
  return (
    <Wrapper>
      <Description>
        <div>
          <span>Name :</span> {ship.name}
        </div>
        <div>
          <span>Type :</span> {ship.type}
        </div>
        <div>
          <span>Home port :</span> {ship.home_port}
        </div>
        <div>
          <span>Weight :</span> {ship.weight_kg}
        </div>
        <RoleBlock>
          <span>Role :</span>
          <RoleWrapper>
            {ship.roles.map((role) => (
              <div key={role}>{role}</div>
            ))}
          </RoleWrapper>
        </RoleBlock>
      </Description>

      {ship.image ? (
        <ImageBlock>
          <img src={ship.image} alt={ship.name} />
        </ImageBlock>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 500px;
  height: 210px;
  padding: 10px;
  margin: 5px;

  border: 1px solid gray;
  border-radius: 5px;
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  flex-basis: 50%;
  margin-right: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;

    span {
      font-weight: bold;
      margin-right: 5px;
    }
  }
`;

const ImageBlock = styled.div`
  display: flex;
  flex-basis: 50%;
  img {
    width: 250px;
  }
`;

const RoleBlock = styled.div`
  display: flex;
  align-items: flex-start !important;
  justify-content: space-around;
  span {
    font-weight: bold;
    margin-right: 5px;
  }
`;
const RoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
`;
export default ShipItem;
