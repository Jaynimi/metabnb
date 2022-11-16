import React  from 'react';
import Place from './Place';

const Places = ({datas}) => {

    const displayDatas = datas.map(({id, image}) => (
        <Place key={id} image={image} />
    ))

  return (
    <div className='grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6'>
        {displayDatas}
    </div>
  )
}

export default Places
