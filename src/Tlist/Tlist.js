import React from 'react'
import { Stack } from 'react-bootstrap'
import DEL from '../delete/DEL';

const Tlist = () => {
  
  return (
    <div >
                     <Stack gap={100}  >
      <div className="p-2" >First Task <DEL /> </div>
      <div className="p-2" >Second Task<DEL/> </div>
      <div className="p-2" >ThirdTask <DEL/> </div>

    </Stack>

    </div>
  )
}

export default Tlist