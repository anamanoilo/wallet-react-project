import { useEffect } from 'react';
import s from './Scrollup.module.scss';



function Scrollup() {
    useEffect(() => {
        // if () {
        //     return;
        // }

    const target = document.querySelector('#root');
    console.log("target:", target)
// const scrollBtn = document.querySelector('.buttonScrollup');
    const options = {
    root: document.querySelector('.Dashboard'),
    rootMargin: '0px',
    threshold: 1.0
    };
    function callback (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            target.classList.add("showBtn");
        } else {
            target.classList.remove("showBtn");
        }
    });
    }
let observer = new IntersectionObserver(callback, options);

observer.observe(target);
    }, []);
    

    return (
        <button type='button' className={s.buttonScrollup}>Up</button>
    );
}

export default Scrollup;