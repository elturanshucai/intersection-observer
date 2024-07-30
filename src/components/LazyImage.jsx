import React, { useEffect, useRef, useState } from 'react'

const LazyImage = (props) => {
    const [visible, setVisible] = useState(false)
    const imageRef = useRef()

    const options = {
        threshold: 0.5
    }

    let callback = (entries) => {
        entries.forEach(element => {
            if (element?.isIntersecting) {
                setVisible(true)
            }
        });
    }

    useEffect(() => {
        let observer = new IntersectionObserver(callback, options);
        if (imageRef?.current) {
            observer.observe(imageRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])
    return visible ?
        <img {...props} /> :
        <div ref={imageRef} className='empty_image'></div>
}

export default LazyImage