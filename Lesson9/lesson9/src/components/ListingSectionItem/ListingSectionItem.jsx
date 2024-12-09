export default function ListingSectionItem({title, description}){
    return(
        <li>
          <p>
            {title}
          </p>
          <span>
            {description}
          </span>
        </li>
    )
}