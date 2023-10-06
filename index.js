  function distanceFromHqInBlocks (pickupLocation){
    return Math.abs(pickupLocation - 42)
    return distanceFromHqInBlocks

  }
  function distanceFromInHqFeet(pickupLocation){
    let blocks= distanceFromHqInBlocks(pickupLocation)
    return blocks * 264
    distanceFromInHqFeet(pickupLocation)
  }
  function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
  }
  function calculatesFarePrice(start, destination){
    let totalDistance = 528
    let calculatesFarePrice
    if (totalDistance <= 400) {
      return totalDistance= (0);
      } 
      else if (totalDistance > 400 && totalDistance <= 2000){
        return ((totalDistance -400)* 0.02);
      }else if (totalDistance > 2000 ){
        return 25;
      }else if (totalDistance>2500) {
        return ('cannot travel that far');
      }
    }