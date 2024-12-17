import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './ImgLink.css' 

class ImgLinkProps{
    public link: string;
    public imgSource: string;
    constructor(link: string, imgSource: string){
        this.link = link;
        this.imgSource = imgSource;
    }
}
class IconLinkProps{
    public link: string;
    public icon: IconDefinition;
    constructor(link: string, icon: IconDefinition){
        this.link = link;
        this.icon = icon;
    }
}
export default function ImgLink(props : ImgLinkProps | IconLinkProps){
    if( props instanceof ImgLinkProps){
        return(
            <a href={props.link}>
                <img src={props.imgSource} alt="" />
            </a>
        )
    }else{
        return (
            <a href={props.link}>
                <FontAwesomeIcon icon={props.icon} size="2x"/>
            </a>
        )
    }
}

