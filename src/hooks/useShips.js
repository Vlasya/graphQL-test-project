import { useQuery, gql } from "@apollo/client";

const GET_SHIPS = gql`
  query ($name: String, $type: String, $home_port: String, $role: String) {
    ships(
      find: { name: $name, type: $type, home_port: $home_port, role: $role }
    ) {
      name
      type
      weight_kg
      home_port
      id
      image
      roles
    }
  }
`;
export const useShips = ({ name, home_port, type, role }) => {
  const { error, loading, data } = useQuery(GET_SHIPS, {
    variables: {
      name,
      home_port,
      type,
      role,
    },
  });

  return {
    error,
    loading,
    data,
  };
};
