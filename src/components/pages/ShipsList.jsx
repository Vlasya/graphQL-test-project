import React, { useState } from "react";
import styled from "styled-components";

import { useShips } from "../../hooks/useShips";
import { ControlBlock, ShipItem } from "../organisms";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const DEFAULT_SEARCH_VALUES = {
  name: "",
  home_port: "",
  type: "",
  role: "",
};

function PlanetList() {
  const [searchValues, setSearchValues] = useState(DEFAULT_SEARCH_VALUES);

  const { error, loading, data } = useShips(searchValues);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <Wrapper>
      <ControlBlock
        searchValues={searchValues}
        onChange={setSearchValues}
        data={data ? data?.ships : []}
      />
      {loading ? (
        <Box sx={{ display: "flex" ,marginTop:'30px'}}>
          <CircularProgress />
        </Box>
      ) : (
        <ListBlock>
          {data
            ? data?.ships.map((item) => <ShipItem key={item.id} ship={item} />)
            : null}
        </ListBlock>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;
export default PlanetList;
