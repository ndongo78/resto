import React from 'react'
import {BiMap} from 'react-icons/bi';
import {GiSmartphone} from 'react-icons/gi';
import {AiOutlineGlobal} from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className='form_footer'>
    <div className='footer_addreess'>
      <div className='contain'>
      <BiMap size={65} color={'gray'} />
        <h5>ADDRESSE</h5>
        <p>
          130 Rue de la République</p>
          <p>
          78300 Poissy , France
        </p>
      </div>
    </div>
    <div className='footer_direct'>
      <div className='contain'>
      <GiSmartphone size={65} color={'gray'} />
        <h5>DIRECT</h5>
        <p>TEL: +33 1 12 34 56 78</p>
        <p>FAX: +33 1 12 34 56 78</p>
      </div>
    </div>
    <div className='footer_web'>
      <div className='contain'>
    <AiOutlineGlobal size={65} color={'gray'} />
      <h5>WEB</h5>
      <p>site: https://eatlandndongo.fr</p>
      <p>Email: eatland@ndongo.fr</p>
      </div>
    </div>
 </div>
  )
}
