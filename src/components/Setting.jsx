import propTypes from 'prop-types'
import {CiSettings} from 'react-icons/ci'

const Setting = ({isOpen, onOpen, onClose, settings }) => {

    const handleClick = () =>{
        if(isOpen)
            onClose();
        else
            onOpen();
    }

    if(!isOpen){
        return (<CiSettings size={24} className='hover:text-green-800 cursor-pointer' onClick={handleClick}/>);
    }
  return (
    <div className='flex flex-col cursor-pointer'>
        <CiSettings size={24} className='hover:text-green-800' onClick={handleClick}/>
      <ul className='w-fit absolute translate-x-5 translate-y-4'>
        {(!settings)?<></>:settings.map((setting, key)=>(
            <li className={`p-2 bg-slate-800 border border-slate-700 rounded-sm hover:bg-opacity-50`} key={key}><a className='text-white flex items-center justify-left gap-3 text-sm'  href={setting.href}>{setting.icon}{setting.title}<hr/></a></li>
        ))}
      </ul>
    </div>
  )
}

Setting.propTypes = {
  isOpen: propTypes.bool,
  onClose: propTypes.func,
  onOpen: propTypes.func,
  settings: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      icon: propTypes.element,
      href: propTypes.string,
    })
  ),
};


export default Setting
