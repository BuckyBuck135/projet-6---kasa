import {useEffect, useState} from "react";

//custom hook used in Home.js
export function UseGetListings(url) {
        const [listings, setListings] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState(false)

        useEffect(() => {
            async function getListings() {
                try {
                    const response = await fetch(url)
                    const data = await response.json()
                    setListings(data)
                }
                catch(error) {
                    console.log(error)
                    setError(true)
                }
                finally {
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 1500)
                }
            }
            getListings()
        }, [url])

        return {listings, isLoading, error}
}

//custom hook used in FicheLogement.js
export function UseGetListingById(url, params) {
    const [listingById, setListingById] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getListingById() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setListingById(data.find(item => item.id === params.id))
            }
            catch(err) {
                console.log(err)
                setError(true)
            }
            finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1500)
            }
        }
        getListingById()
    }, [url, params.id])

    return {listingById, isLoading, error}
}