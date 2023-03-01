import './Header.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {

    interface Category {
        id: number;
        title: string;
    }

    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('https://jservice.io/api/categories/?count=100')
        .then(resp => {
            const data = []
            let count = 0;
            while(count < 15) {
                const randomIndex = Math.floor(Math.random() * resp.data.length);
                const randomCategory: Category = {
                    id: resp.data[randomIndex].id,
                    title: resp.data[randomIndex].title
                }
                data.push(randomCategory)
                count += 1;
            }

            // if (data.length === 15) {
            //     setCategories(data)
            // }
        }).catch(error => {
            console.error(error)
        })
    }, [])

    if(!categories) {
        return (
            <p>Loading your categories</p>
        )
    }

    console.log(categories)

    return (
        <header className='header'>
            <h1 className='header__heading'>Welcome to Jeopardy!</h1>
            <form className='form'>
                <h3 className='form__heading'>Pick your categories here!</h3>
                <p className='form__instructions'>The list of categories will be random each time you visit the page, choose 6.</p>
            </form>
        </header>
    );
};

export default Header;