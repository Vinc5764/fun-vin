import NavItems from "./NavItems"

const NavLinks = ({selected, items}) => {
    const isActive = item => item.key === selected
    const onClick = item => () => {
        window.location.href = item.url
    }
    return(
        <ul>
            {items.map((item => (
                <NavItems 
                key = {item.key}
                label = {item.label}
                disabled = {item.disabled}
                active = {isActive(item)}
                onClick = {onClick(item)}
                />
            )))}
        </ul>
    )
}


export default NavLinks