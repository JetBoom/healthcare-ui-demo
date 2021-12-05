import { GET, sleep } from 'util/dev';


export async function getPatient(id) {
  // We might await an axios GET request here or use graphql or any number of neat things.
  // For this exercise it's all just inside a local json file.

  // Some fake network lag to simulate loading spinners or skeletons.
  await sleep(500);

  const response = await GET('/testdata/patients.json')
  const json = await response.json()
  return json[id]
}
