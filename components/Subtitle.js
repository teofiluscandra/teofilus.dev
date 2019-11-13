const Subtitle = props => {
    return (
        <>
            <h1 className="text-base font-sans text-grey">{props.subtitle || "No Subtitle"}</h1>
        </>
    )
}

export default Subtitle;