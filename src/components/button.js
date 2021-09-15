const Button = ({handleOnClick, description, size = 200}) => {
    return <button onClick={handleOnClick} description={description} size={size}>{description}</button>
 }
 
 export default Button