// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-anonymous-default-export
export default  (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'Myltiane'},
  ]
  return response.json(users)
}
