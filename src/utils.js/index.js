export const getSelectOptions = (data, field) => {
  const arr = data.map((item) => {
    return item[field];
  });
  return [...new Set(arr)];
};

export const getRolesOptions = (data) => {
  const options = data.reduce((acc, item) => {
    acc.push(...item.roles);
    return acc;
  }, []);

  return [...new Set(options)];
};
