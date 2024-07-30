import React from 'react'
import LazyImage from './LazyImage'

const data = [
    {
        id: 1,
        url: 'https://images.pexels.com/photos/13804796/pexels-photo-13804796.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
        id: 2,
        url: 'https://images.pexels.com/photos/25929075/pexels-photo-25929075/free-photo-of-a-small-animal-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 3,
        url: 'https://images.pexels.com/photos/26934487/pexels-photo-26934487/free-photo-of-chess-pieces-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 4,
        url: 'https://images.pexels.com/photos/27425438/pexels-photo-27425438/free-photo-of-a-person-is-using-a-laptop-and-a-notebook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 5,
        url: 'https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 6,
        url: 'https://images.pexels.com/photos/26832682/pexels-photo-26832682/free-photo-of-sea-view-mallorca.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 7,
        url: 'https://images.pexels.com/photos/26950215/pexels-photo-26950215/free-photo-of-beautiful-small-boat-in-the-blue.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 8,
        url: 'https://images.pexels.com/photos/27238376/pexels-photo-27238376/free-photo-of-an-old-village-on-top-of-the-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 9,
        url: 'https://images.pexels.com/photos/16174520/pexels-photo-16174520/free-photo-of-cheetahs-in-field-in-wild-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
        id: 10,
        url: 'https://images.pexels.com/photos/27138244/pexels-photo-27138244/free-photo-of-a-person-sitting-in-a-small-cabin-in-a-vineyard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
]

const Gallery = () => {
    return (
        <ul className='gallery'>
            {
                data.map(item => (
                    <li key={item.id}>
                        <LazyImage id={item.id} src={item.url} />
                    </li>
                ))
            }
        </ul>
    )
}

export default Gallery