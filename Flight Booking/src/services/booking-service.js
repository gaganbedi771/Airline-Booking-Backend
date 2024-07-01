exports.createCity = async (data) => {
    try {
      console.log(data);
      return await cityRepository.createCity(data);
    } catch (error) {
      console.log("service layer error");
      throw error;
    }
  };