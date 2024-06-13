'use client'

import { useEffect } from "react"

function BootstrapClient() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js')
    }, [])

    return null
}

export default BootstrapClient