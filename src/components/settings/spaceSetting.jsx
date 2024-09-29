import Setting from "../Setting";

import useSpaceSetting from "../../hooks/useSpaceSetting";
import { CiLink, CiPen, CiTrash } from "react-icons/ci";

const SpaceSettings = () => {
    const spaceSetting = useSpaceSetting();
    const settings = 
        [
            {
                title:"Edit Space",
                icon:<CiPen size={20}/>,
                href:"/"

            },
            {
                title:"Get link",
                icon:<CiLink size={20}/>,
                href:"/"
            },
            {
                title:"Delete Space",
                icon:<CiTrash size={20}/>,
                href:"/"
            },
        ]
  return (
   <Setting settings = {settings} isOpen={spaceSetting.isOpen} onClose = {spaceSetting.onClose} onOpen={spaceSetting.onOpen}/>
  )
}

export default SpaceSettings
