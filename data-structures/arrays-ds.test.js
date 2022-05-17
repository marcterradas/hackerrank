function reverseArray(array) {
  array.reverse();
  return array;
}

test('reverseArray',function(){
    expect(reverseArray([1,2,3,4])).toEqual([4,3,2,1])
})
