const Icon = (props) => {
  return (
    <div className={props.class} onClick={props.handlClick}>
      {props.children}
    </div>
  )
}

export default Icon
