export const getFormattedUserData = (data: object) => {
    const usersData = Object.values(data).map((_, i) => {
      const filteredVals = [];
      // @ts-ignore
      if(data[i]) {
        // @ts-ignore
        filteredVals.push(data[i]['first name']);
        // @ts-ignore
        filteredVals.push(data[i]['last name']);
        // @ts-ignore
        filteredVals.push(data[i].hobby);
        // @ts-ignore
        filteredVals.push(data[i].address['zip code']);
      }

      return filteredVals;
    })

    return usersData;
}