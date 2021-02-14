let selectedCustomerIds;
let setSelectedCustomerIds;
const customers = [];

const handleSelectAll = (event) => {
  let newSelectedCustomerIds;

  if (event.target.checked) {
    newSelectedCustomerIds = customers.map((customer) => customer.id);
  } else {
    newSelectedCustomerIds = [];
  }

  setSelectedCustomerIds(newSelectedCustomerIds);
};

const handleSelectOne = (event, id) => {
  const selectedIndex = selectedCustomerIds.indexOf(id);
  let newSelectedCustomerIds = [];

  if (selectedIndex === -1) {
    newSelectedCustomerIds = newSelectedCustomerIds.concat(
      selectedCustomerIds,
      id
    );
  } else if (selectedIndex === 0) {
    newSelectedCustomerIds = newSelectedCustomerIds.concat(
      selectedCustomerIds.slice(1)
    );
  } else if (selectedIndex === selectedCustomerIds.length - 1) {
    newSelectedCustomerIds = newSelectedCustomerIds.concat(
      selectedCustomerIds.slice(0, -1)
    );
  } else if (selectedIndex > 0) {
    newSelectedCustomerIds = newSelectedCustomerIds.concat(
      selectedCustomerIds.slice(0, selectedIndex),
      selectedCustomerIds.slice(selectedIndex + 1)
    );
  }

  setSelectedCustomerIds(newSelectedCustomerIds);
};
