//@flow
export type MockUser = $ReadOnly<{
  id : string,
  name : string,
}>;

export const mockUsersArray : MockUser[] = [
  {
    id: '1',
    name: 'Joey Tribbiani',
  },
  {
    id: '2',
    name: 'Monica Geller',
  },
  {
    id: '3',
    name: 'Chandler Bing',
  },
  {
    id:'4',
    name: 'Phoebe Buffay',
  },
  {
    id: '5',
    name: 'Rachel Green',
  },
  {
    id: '6',
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
