//@flow
export type MockUser = $ReadOnly<{
  name : string,
}>

export const mockUsersArray : MockUser[] = [
  {
    name: 'Joey Tribbiani',
  },
  {
    name: 'Monica Geller',
  },
  {
    name: 'Chandler Bing',
  },
  {
    name: 'Phoebe Buffay',
  },
  {
    name: 'Rachel Green',
  },
  {
    name: 'Ross Geller',
  },
];

export const mockUsersMap : { [string] : MockUser } = {
  one: mockUsersArray[0],
  two: mockUsersArray[1],
  three: mockUsersArray[2],
  four: mockUsersArray[3],
  five: mockUsersArray[4],
  six: mockUsersArray[5],
};