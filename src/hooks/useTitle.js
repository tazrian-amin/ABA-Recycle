import { useEffect } from "react"

const useTitle = title => {

    useEffect(() => {
        document.title = `${title} - ABA Recycle`;
    }, [title])

}

export default useTitle;