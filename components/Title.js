const Title = props => {
    return (
        <>
            <style jsx>
                {`
                    .is-display-2 {
                        font-size: 3.3rem;
                        font-weight: 700;
                        line-height: 1.2;
                    }
                `}
            </style>
            <h1 className="text-black font-bold is-display-2 mb-2">{props.title || "No Title"}</h1>
        </>
    )
}

export default Title;