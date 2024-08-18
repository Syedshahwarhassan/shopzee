import React from 'react'
import Store from '../../(Storefile)/Store/page';
import PreviewStore from '../PreviewStore/page';

const EditStore = ({searchParams}) => {
  const id=searchParams.id;
    return (
    <div className='h-full w-full overflow-y-auto'>
    <PreviewStore/>
    </div>
  )
}

export default EditStore
