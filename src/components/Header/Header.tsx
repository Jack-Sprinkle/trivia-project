import './Header.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

function Header({handleClick} : {handleClick : any}) {

    interface ICategory {
        id: string,
        title: string
    }


    const [categories, setCategories] = useState<ICategory[]>([])
    useEffect(() => {
        axios.get('https://jservice.io/api/categories/?count=100')
        .then(resp => {
            const data: ICategory[] = [];
            let count = 0;
            while(count < 15) {
                const randomIndex = Math.floor(Math.random() * resp.data.length);
                const randomCategory: ICategory = {
                    id: resp.data[randomIndex].id,
                    title: resp.data[randomIndex].title
                }
                data.push(randomCategory)
                count += 1;
            }
            setCategories(data)

        }).catch(error => {
            console.error(error)
        })
    }, [])

    if(!categories) {
        return (
            <p>Loading your categories</p>
        )
    }

    return (
        <header className='header'>
            <h1 className='header__heading'>Welcome to Jeopardy!</h1>
            <h3 className='header__heading--small'>Pick your categories here!</h3>
            <p className='header__instructions'>The list of categories will be random each time you visit the page, choose 6.</p>
            <form className='form'>
                {categories?.map((category, index) => {
                    const {id, title} = category;
                    return (
                        <div className='form__input-container' key={index}>
                            <label htmlFor={id} className='form__label'>{title}</label>
                            <input type='radio' id={id} name={title} value={title} className='form__input' onClick={() => handleClick(event)}/>
                        </div>
                    )
                })}
                <button type='submit'>Submit</button>
            </form>
        </header>
    );
};

export default Header;