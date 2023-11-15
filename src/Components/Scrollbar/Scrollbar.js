import './scrollbar.css';
import Domain from '../Domain/Domain';
import React, { useRef, useState } from 'react';

export default function Scrollbar(){

    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const rightBut = () =>{
        const container = containerRef.current;
        const scrollamount = 100;
        const newScrollPosition = scrollamount + scrollPosition;

        container.scrollLeft = newScrollPosition;
        setScrollPosition(newScrollPosition);
    }

    const leftBut = () =>{
        const container = containerRef.current;
        const scrollamount = 100;
        const newScrollPosition = scrollPosition - scrollamount;

        container.scrollLeft = newScrollPosition;
        setScrollPosition(newScrollPosition);
    }

    return(
        <div className='domain-scroll-bar'>
            <div className='domain-container-scroll-button-left'>
                <button onClick={leftBut}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
                    </svg>
                </button>
            </div>
            <div ref={containerRef} className='domain-scroll-container'>
                <div className='domains-container'>
                    <a href='cc'>
                        <Domain 
                            name="Data Science"
                            imageUrl="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </a>
                    <a href='cc'>
                        <Domain 
                            name = "Cloud Computing"
                        imageUrl="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </a>
                    <a href='cc'>
                        <Domain 
                            name = "AI"
                            imageUrl="https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </a>
                    <a href='cc'>
                        <Domain 
                            name = "Cyber Security"
                            imageUrl="https://images.pexels.com/photos/5380610/pexels-photo-5380610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </a>
                    <a href='cc'>
                        <Domain 
                            name = "Finance"
                            imageUrl="https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </a>
                </div>
            </div>
            <div className='domain-container-scroll-button-right'>
                <button onClick={rightBut}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-bar-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}