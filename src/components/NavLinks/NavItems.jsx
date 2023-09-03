
const NavItems = ({label, active,disabled,onClick})  => (
    <li className= {active ? 'active' : ''}>
        <button disabled = {disabled} onClick={onClick} >
            {label}
        </button>
    </li>
)
export default NavItems