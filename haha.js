var originalArray = [1,2,3,4,5,6,7,8,9,10];


// function renderRandomChunk(imagesArr){
//   const array = imagesArr.slice(0);
//   const length = array.length;
//   const result = [];
//   let sum = 0;
//
//   while(sum < length) {
//     const willAdd = Math.floor(Math.random() * 3) + 1;
//     const tuple = [];
//     for(var i = 0; i < willAdd; i++) {
//       if(array[i]){
//       tuple.push(array[i]);
//       }
//     }
//     if(tuple.length > 0) {result.push(tuple);}
//     array.splice(0, willAdd);
//     sum += willAdd;
//   }
//
//   return result;
// }

const renderImageChunk = (imagesData) =>  {
  const result = [];
  const length = imagesData.length;
  let count = 0;

  while(count < length) {
    const tuple = [];
    const willAdd = Math.floor(Math.random() * 4) + 1;

    for(let i = 0; i < willAdd; i++) {
      const image = imagesData[count + i];
      if(image) {tuple.push(image);}
    }
    result.push(tuple);
    count += willAdd;
  }

  return result;
}

console.log(renderImageChunk(originalArray));
console.log("ddddddd");
