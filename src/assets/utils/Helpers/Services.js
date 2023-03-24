import React from "react";

export function UseGetListings(url) {
    const [listings, setListings] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(text => {
                setTimeout(() => {
                    setListings(JSON.parse(text))
                    setIsLoading(false)
                }, 1500)
            })
            
    }, [url])
    return {
        data: listings,
        state: isLoading
    }
}
