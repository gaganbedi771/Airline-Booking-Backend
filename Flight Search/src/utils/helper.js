exports.compareTime = (arrivalTimeString, departureTimeString) => {
  let arrivalTime = new Date(arrivalTimeString);
  let departureTime = new Date(departureTimeString);
  return arrivalTime.getTime() > departureTime.getTime();
};
