import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Plumbero-${title}`;
    }, [title])
}

export default useTitle;